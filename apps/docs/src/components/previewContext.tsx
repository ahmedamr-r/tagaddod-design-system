import { createContext, useContext, type ReactNode } from 'react';
import type { RegistryEntry } from '../registry';

const PreviewContext = createContext<RegistryEntry | undefined>(undefined);

export function PreviewProvider({
  value,
  children,
}: {
  value: RegistryEntry;
  children: ReactNode;
}) {
  return <PreviewContext.Provider value={value}>{children}</PreviewContext.Provider>;
}

export function usePreviewContext(): RegistryEntry | undefined {
  return useContext(PreviewContext);
}
