Summary
This project will expose your Tagaddod design-system monorepo (tokens ➜ components ➜ Storybook docs) through a Model Context Protocol (MCP) server. The MCP server publishes two tools—component_search (retrieve docs via vector search) and component_generate (scaffold a brand-compliant fallback component).  Any MCP-aware agent (Claude, LangChain, Cursor, etc.) can then read a PRD in plain language, decide which tool to call, and return ready-to-paste JSX.  The solution relies only on open-source building blocks (Storybook sb extract, Style Dictionary, pgvector, FastMCP) and standard practices such as Row-Level Security (RLS) and rate-limiting.  Below you’ll find the full Product Requirements Document followed by an actionable engineering task list.

⸻

Product Requirements Document (PRD)

1 · Product overview

Create a self-discoverable MCP server that turns the existing Tagaddod design-system repo into a searchable + generative service for large-language-model agents.  The server will:
	•	Ingest Storybook stories (index.json) and API docs into a pgvector index.  ￼ ￼
	•	Expose component_search to fetch the best-matching docs.
	•	Expose component_generate to synthesize a new component that embeds the team’s design tokens.  ￼
	•	Comply with the public MCP specification, so any tool-calling agent can consume it without custom adapters.  ￼ ￼

2 · Goals & success metrics

Goal	KPI / target
Agents import the correct component on first try	≥ 95 % retrieval accuracy (manual validation set)
Brand consistency for generated fallbacks	100 % pass of token-linter; no inline hex values
Latency	< 1 s p95 for component_search; < 8 s for component_generate
Security	Zero incidents of unauthorised writes or key leaks (RLS + read-only creds)  ￼

3 · User stories
	1.	AI Developer – “When I paste a PRD into Claude, it should automatically suggest imports from @tagaddod-design/react.”
	2.	Designer – “If the design calls for a new widget, the agent should create a scaffold that already uses our tokens.”
	3.	Platform engineer – “I need to cap query rate and spend without touching agent code.”

4 · Functional requirements
	•	FR-1: Trigger Storybook build and sb extract to emit index.json on every library publish.  ￼
	•	FR-2: Trigger Style Dictionary build to emit tokens.json.  ￼
	•	FR-3: Chunk docs with a language-aware splitter (e.g., LlamaIndex CodeSplitter) and embed with text-embedding-3-small.  ￼ ￼
	•	FR-4: Store vectors in pgvector; enable Row-Level Security.  ￼
	•	FR-5: Provide two MCP tools via FastMCP:
	•	component_search(query,k?) – returns top-k docs, score, canonical import.  ￼
	•	component_generate(spec) – returns {fileName, code} scaffold using tokens.
	•	FR-6: Publish OpenAPI manifest automatically (FastMCP does this).
	•	FR-7: Provide /health and rate-limit IPs (Fastify-rate-limit).  ￼
	•	FR-8: Add LangChain MCP adapter to any internal agents.  ￼

5 · Non-functional requirements
	•	Security – pgvector user is read-only; API keys in env vars; vectors never exposed publicly (follow Supabase RAG-with-permissions pattern).  ￼
	•	Scalability – Serverless (Vercel/Fly); cold-start < 500 ms.
	•	Portability – No vendor-locked code; MCP compliant.
	•	Observability – Log every tool request + cost; alert on 5xx.

6 · Out of scope
	•	Mobile component libraries.
	•	Non-React renderers.
	•	Migration of historical Figma tokens (handled by design team).

7 · Assumptions & dependencies
	•	Agents already support MCP discovery (Claude desktop does; LangChain via adapter).  ￼
	•	Team has Vercel or Fly budget.
	•	Supabase pgvector instance available.

8 · Risks & mitigations

Risk	Mitigation
Embedding inversion leaks source	Only serve search via server; never expose raw vectors.
Cost blow-ups from agent loops	Enable Spend-Limit on Supabase & embedding model; add Fastify rate-limit.  ￼
Prompt injection	Validate tool inputs; RLS prevents write queries.

9 · Open questions
	1.	Which language flavour for FastMCP—TypeScript or Python?  ￼ ￼
	2.	Provisioned embeddings or on-demand?
	3.	Where to host screenshots—same CDN or separate bucket?

⸻

Engineering task list

#	Phase	Task	Owner	Est.
1	Discovery	Enumerate packages & verify build scripts (storybook, style-dictionary).	Lead dev	0.5 d
2	Docs build	Automate sb extract & token build in scripts/build-docs.ts.	FE dev	1 d
3	Vector DB	Spin up Supabase + pgvector; add RLS read-only policy.  ￼	DevOps	0.5 d
4	Ingest	Write scripts/ingest.ts to chunk (CodeSplitter) & embed docs.  ￼	FE dev	1 d
5	MCP server	Scaffold FastMCP server; define component_docs resource + two tools.  ￼	BE dev	1 d
6	Rate-limit	Add Fastify-rate-limit (100 req/min/IP).  ￼	BE dev	0.5 d
7	CI/CD	GitHub Action: build docs → ingest → deploy to Vercel.	DevOps	1 d
8	Smoke tests	Script: ask MCP “import Button”, expect status 200 + import line.	QA	0.5 d
9	Client wiring	Add MCP URL to Claude desktop / LangChain adapter.  ￼	AI eng.	0.5 d
10	Observability	Enable Supabase & Vercel spend alerts; log tool payloads.  ￼	DevOps	0.5 d
11	Security review	Check env vars, key rotation, embargo vectors from CDN.	Security	0.5 d
12	Docs	README: how to add new packages & regenerate vectors.	Tech writer	0.5 d

Total ≈ 7 person-days; parallelisable across 2-3 contributors.

⸻

References
	1.	Anthropic – Model Context Protocol announcement  ￼
	2.	MCP formal specification (2025-03-26)  ￼
	3.	fastmcp TypeScript framework  ￼
	4.	fastmcp Python / earlier versions  ￼
	5.	Storybook sb extract discussion & docs  ￼
	6.	Storybook CLI index-json reference  ￼
	7.	Style Dictionary token build docs  ￼
	8.	LlamaIndex CodeSplitter API  ￼
	9.	Supabase RLS guide for Postgres tables  ￼
	10.	Supabase RAG-with-permissions pattern  ￼
	11.	Fastify rate-limit example  ￼
	12.	LangChain MCP adapter GitHub repo  ￼
	13.	Windows AI Foundry & MCP adoption news (shows growing ecosystem)  ￼