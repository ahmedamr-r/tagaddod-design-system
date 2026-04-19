import type { PreviewModule } from '@tagaddod-design/docs-types';
import type { ComponentType } from 'react';

type MDXModule = { default: ComponentType };
type PreviewFile = { preview: PreviewModule };

const previewModules = import.meta.glob<PreviewFile>(
  '../../../packages/react/src/components/**/*.preview.tsx',
  { eager: true },
);

/**
 * New-style docs produced by the `component-docs-writer` skill use the
 * `{Name}.docs.mdx` naming convention and contain no Storybook imports, so
 * the whole tree can be globbed safely.
 */
const docsMdxModules = import.meta.glob<MDXModule>(
  '../../../packages/react/src/components/**/*.docs.mdx',
  { eager: true },
);

/**
 * Legacy Storybook-free MDX kept on a narrow allowlist until regenerated
 * through the skill. Do not add Storybook-dependent MDX here — Vite will
 * fail to compile it.
 */
const legacyMdxModules = import.meta.glob<MDXModule>(
  [
    '../../../packages/react/src/components/Button/Button.mdx',
    '../../../packages/react/src/components/TextInput/TextInput.mdx',
  ],
  { eager: true },
);

function slugToMdxKey(slug: string): string | undefined {
  const name = slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  const docsEntry = Object.entries(docsMdxModules).find(([path]) =>
    path.endsWith(`/${name}/${name}.docs.mdx`),
  );
  if (docsEntry) return docsEntry[0];
  const legacyEntry = Object.entries(legacyMdxModules).find(([path]) =>
    path.endsWith(`/${name}/${name}.mdx`),
  );
  return legacyEntry?.[0];
}

const mdxModules: Record<string, MDXModule> = {
  ...legacyMdxModules,
  ...docsMdxModules,
};

export interface RegistryEntry {
  slug: string;
  name: string;
  description?: string;
  preview: PreviewModule;
  MDXContent?: ComponentType;
}

const registryMap = new Map<string, RegistryEntry>();

for (const mod of Object.values(previewModules)) {
  const preview = mod.preview;
  if (!preview || !preview.slug) continue;

  const mdxKey = slugToMdxKey(preview.slug);
  const MDXContent = mdxKey ? mdxModules[mdxKey]?.default : undefined;

  registryMap.set(preview.slug, {
    slug: preview.slug,
    name: preview.name,
    description: preview.description,
    preview,
    MDXContent,
  });
}

export const componentList: RegistryEntry[] = Array.from(registryMap.values()).sort(
  (a, b) => a.name.localeCompare(b.name),
);

export function getComponent(slug: string): RegistryEntry | undefined {
  return registryMap.get(slug);
}
