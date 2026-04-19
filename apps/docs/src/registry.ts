import type { PreviewModule } from '@tagaddod-design/docs-types';
import type { ComponentType } from 'react';

type MDXModule = { default: ComponentType };
type PreviewFile = { preview: PreviewModule };

const previewModules = import.meta.glob<PreviewFile>(
  '../../../packages/react/src/components/**/*.preview.tsx',
  { eager: true },
);

/**
 * Only glob MDX files that have been migrated off Storybook blocks. As more
 * components are converted (via scripts/strip-storybook-mdx.mjs), extend this
 * pattern. Keeping it narrow prevents Vite from failing to compile `.mdx`
 * files that still import `@storybook/blocks`.
 */
const mdxModules = import.meta.glob<MDXModule>(
  [
    '../../../packages/react/src/components/Button/*.mdx',
    '../../../packages/react/src/components/TextInput/*.mdx',
  ],
  { eager: true },
);

function slugToMdxKey(slug: string): string | undefined {
  const name = slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  const entry = Object.entries(mdxModules).find(([path]) =>
    path.endsWith(`/${name}/${name}.mdx`),
  );
  return entry?.[0];
}

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
