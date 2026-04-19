import type { MDXComponents } from 'mdx/types';
import type { ReactNode } from 'react';
import { LiveExample } from './LiveExample';
import { Controls } from './Controls';
import { PropsTable } from './PropsTable';
import { usePreviewContext } from './previewContext';

function Meta(_props: { of?: unknown }) {
  return null;
}

function Canvas(props: { of?: unknown; example?: string; children?: ReactNode }) {
  const preview = usePreviewContext();
  if (!preview) return <>{props.children}</>;

  if (props.example) {
    return <LiveExample previewSlug={preview.slug} example={props.example} />;
  }

  return <>{props.children}</>;
}

function Story(props: { of?: unknown; example?: string }) {
  return <Canvas {...props} />;
}

function ControlsBlock() {
  return <Controls />;
}

function ArgTypes() {
  const preview = usePreviewContext();
  if (!preview) return null;
  return <PropsTable previewSlug={preview.slug} />;
}

export const mdxComponents: MDXComponents = {
  Meta,
  Canvas,
  Story,
  Controls: ControlsBlock,
  ArgTypes,
};
