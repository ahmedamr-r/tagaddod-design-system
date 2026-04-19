import type { ComponentType, ReactNode } from 'react';

export type ControlSpec =
  | { type: 'text'; label?: string; description?: string }
  | { type: 'number'; label?: string; description?: string; min?: number; max?: number; step?: number }
  | { type: 'boolean'; label?: string; description?: string }
  | { type: 'select'; options: readonly string[]; label?: string; description?: string }
  | { type: 'multiSelect'; options: readonly string[]; label?: string; description?: string }
  | { type: 'node'; label?: string; description?: string; presets?: Record<string, ReactNode> };

export type ControlsFor<Props> = Partial<Record<keyof Props, ControlSpec>>;

export interface PreviewExample<Props> {
  name: string;
  description?: string;
  props: Partial<Props>;
  /** Optional custom render for showcase examples that compose multiple instances. */
  render?: () => ReactNode;
}

export interface PreviewModule<Props = Record<string, unknown>> {
  /** Human-readable display name shown in the docs nav. */
  name: string;
  /** URL-safe slug. Must match the `.mdx` file's slug and the registry key. */
  slug: string;
  /** One-line summary for the component index. */
  description?: string;
  /** The component rendered in the playground. */
  component: ComponentType<Props>;
  /** Props applied on first render of the playground. */
  defaultProps: Partial<Props>;
  /** Editable prop controls. Keys that map to non-serialisable props (icons, nodes) use `type: 'node'`. */
  controls: ControlsFor<Props>;
  /** Preset variants surfaced as static cards and referenced by MDX `<Canvas example="..."/>`. */
  examples: PreviewExample<Props>[];
}
