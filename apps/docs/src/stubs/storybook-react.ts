// Minimal stand-ins for the `@storybook/react` types referenced by legacy
// `*.stories.tsx` files. We don't run Storybook — these keep Vite happy when
// MDX files pull the stories module into the docs app's graph.

export type Meta<_T = unknown> = Record<string, unknown>;
export type StoryObj<_T = unknown> = Record<string, unknown>;
