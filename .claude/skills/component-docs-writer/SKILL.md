---
name: component-docs-writer
description: Write or regenerate the Docs-tab MDX for a Tagaddod design-system component. Use when the user asks to "write docs for X", "add a docs tab for X", "generate component documentation for X", or when a new component needs its first Docs tab. Produces Storybook-free MDX whose DOM output is cleanly convertible to Markdown for AI agents fetching the URL.
---

# component-docs-writer

Produces the `.mdx` file that populates the **Docs** tab (first tab) on `/components/{slug}` in the docs app. The output is a markdown-native document: only standard Markdown primitives plus one React component, `<LiveExample>`. Stripping that one tag yields valid CommonMark — this is the contract that makes the page URL-scrapable.

## What this skill does

1. Reads the component's `.preview.tsx` and `.tsx` sources.
2. Writes `packages/react/src/components/{Name}/{Name}.docs.mdx` using the fixed schema below. (The `.docs.mdx` suffix — *not* `.mdx` — is what the registry picks up; the bare `.mdx` path is reserved for legacy Storybook-flavored files that must not be touched.)
3. Prints verification steps for the user.

The registry glob (`apps/docs/src/registry.ts`) and `.component-docs` CSS (`apps/docs/src/styles/global.css`) are already in place. **Do not touch them.**

## Hard rules (non-negotiable)

1. **Never import from `@storybook/*`**. No `<Canvas>`, `<ArgTypes>`, `<Meta>`, no `import * as Stories from ...`.
2. **Only these elements are allowed in the MDX body:**
   - Markdown: `#`, `##`, `###`, paragraphs, bullet lists (`-`), ordered lists (`1.`), fenced code blocks.
   - Exactly one JSX tag: `<LiveExample previewSlug="..." example="..." />`.
   - A single wrapping `<div className="component-docs">...</div>` around the whole document.
   - Optional: one `import` line at the very top for icon references inside code blocks. **No other imports.**
3. **Every `<LiveExample>` must be immediately followed by a fenced `jsx` code block** showing a runnable snippet equivalent to that example. The scraper relies on this 1:1 pairing.
4. **`<LiveExample example="…">` names must exist verbatim in `preview.tsx`**. If a section needs an example that doesn't exist in the preview, **stop and tell the user** — do not invent example names.
5. **Idempotent.** Overwrite `{Name}.docs.mdx` if it already exists. Do not ask before overwriting. Never touch the legacy `{Name}.mdx` (if present) — leave it alone.
6. **No changes outside** `packages/react/src/components/{Name}/{Name}.docs.mdx`. If the skill finds itself wanting to edit `registry.ts`, `global.css`, `ComponentPage.tsx`, or anything else, that's a bug — stop and report instead.

## Inputs

Component name in any casing. Normalize:
- `PascalCase` for path: `packages/react/src/components/{PascalCase}/{PascalCase}.docs.mdx`.
- `kebab-case` for the slug used in `previewSlug` — but always read the actual `preview.slug` value from `{Name}.preview.tsx` rather than computing it. The preview file is authoritative.

## Workflow

### 1. Preflight reads (parallel)

Read these three files in a single message (parallel tool calls):

- `packages/react/src/components/{Name}/{Name}.preview.tsx` — authoritative source for `name`, `slug`, `description`, and the `examples[]` list.
- `packages/react/src/components/{Name}/{Name}.tsx` — for the exported props interface, subcomponents, and variant/tone/size constants.
- `CLAUDE.md` — for the verbatim RTL documentation template (the section headed "STANDARD RTL DOCUMENTATION TEMPLATE"). You must embed it.

### 2. Plan example mapping (mental, no file writes)

For each section you will produce, pick the matching example name from `preview.examples[]`. A section only appears in the MDX if an example for it exists. Typical mapping:

| MDX section        | Example name you look for in `preview.examples`             |
|--------------------|-------------------------------------------------------------|
| Basic usage        | `Default` (or the first example in the array if no `Default`) |
| Variants           | Each name matching a variant constant                        |
| Tones              | Each name matching a tone constant                           |
| Sizes              | A single combined example like `AllSizes`, or per-size       |
| States             | `Loading`, `Disabled`, `Error`, `Open`, etc. as they exist   |
| Icon usage         | `WithPrefixIcon`, `WithSuffixIcon`, `IconOnly`, etc.         |
| Common use cases   | `CommonUseCases`, or skip if no such example                 |

If the component has no variants/tones/sizes (e.g. `AspectRatio`, `Separator`), skip those sections entirely. If every example is a single-axis variation (e.g. `AspectRatio` with `Sixteen-by-nine`, `Square`, …), group them under **Examples** instead of **Variants**.

If a section you want to include has no matching example in `preview.examples`, either (a) drop the section, or (b) surface it to the user — never fabricate an example name.

### 3. Write the MDX

Use this exact shape. Every `<LiveExample>` line must be preceded by a blank line and followed by a blank line. Every `<LiveExample>` must be followed by a fenced `jsx` block.

```mdx
<div className="component-docs">

# {ComponentName}

{One-paragraph description. Start from `preview.description`, expand with 1–2 sentences that explain when to reach for this component.}

## Import

​```jsx
import { {ComponentName} } from '@tagaddod-design/react';
​```

## Basic usage

{One sentence describing the default case.}

<LiveExample previewSlug="{slug}" example="{FirstExampleName}" />

​```jsx
<{ComponentName} … />
​```

## {Variants | Examples | States | …}

### {SectionItemTitle}

{One sentence.}

<LiveExample previewSlug="{slug}" example="{ExampleName}" />

​```jsx
<{ComponentName} variant="{value}" />
​```

## Props

See the **Props** tab for the full auto-generated table. Key props:

- `{propName}` — *{type}* — {one-line description}.
- …4 to 8 bullets max…

## Internationalization and RTL support

{Verbatim RTL template from CLAUDE.md with [ComponentName] substituted.}

## Accessibility

- {Keyboard key} — {what it does}
- {ARIA role / attribute} — {when applied}
- {Focus behavior}
- {Any required `aria-label` guidance}

## Common use cases

### {Use case name}

{One sentence.}

​```jsx
// runnable snippet
​```

</div>
```

Notes on the shape:

- The opening `<div className="component-docs">` and closing `</div>` **must** be on their own lines with blank lines around them so the MDX parser treats the inner content as Markdown.
- The `# {ComponentName}` paragraph directly under it becomes the hero — the CSS styles `.component-docs h1 + p` specifically.
- `## Props` is a short curated bulleted list only. The full table lives in the Props tab automatically.
- The RTL section is **required** for any component that has directional behavior, icons, or text. If the component is purely visual and has no text/icons (rare — `Separator`, `AspectRatio`), you may drop it, but prefer including it.
- For components with many examples of the same axis (e.g. `Badge`'s six tones), prefer one `<LiveExample>` per value rather than one matrix example — the per-value cards read better.

### 4. Write the file

Use the `Write` tool on `packages/react/src/components/{Name}/{Name}.docs.mdx`. Overwrite silently if present. Never write to or delete `{Name}.mdx` — that path is reserved for legacy files.

### 5. Report to the user

Print exactly:

1. The path that was written.
2. The three verification checks below.
3. A one-line note if any example you needed was missing from `preview.examples` and how you handled it.

## Verification (tell the user to run these)

1. Start the docs app: `yarn dev:docs` (port 6010). No MDX compile errors in the terminal.
2. Visit `http://localhost:6010/components/{slug}`. The **Docs** tab is the first tab and is selected by default.
3. Every `<LiveExample>` renders an example card — **no** "Example … not found" cards.

## Self-check before finishing

Before reporting done, confirm:

- [ ] No `@storybook/*` import exists in the file.
- [ ] No JSX except `<div className="component-docs">` and `<LiveExample />`.
- [ ] Every `<LiveExample>` name matches a real entry in `preview.examples`.
- [ ] Every `<LiveExample>` is followed by a fenced `jsx` block.
- [ ] File path is `packages/react/src/components/{PascalName}/{PascalName}.docs.mdx` (note the `.docs` segment).
- [ ] The document opens with `<div className="component-docs">` and closes with `</div>`, each on its own line with blank lines around it.

If any check fails, fix it and re-run the self-check.
