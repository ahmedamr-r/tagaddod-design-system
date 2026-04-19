import type { ReactNode } from 'react';

type StubProps = { children?: ReactNode } & Record<string, unknown>;

const PassThrough = ({ children }: StubProps) => <>{children ?? null}</>;
const Hidden = () => null;

export const Meta = Hidden;
export const Story = PassThrough;
export const Canvas = PassThrough;
export const Controls = Hidden;
export const ArgTypes = Hidden;
export const Source = Hidden;
