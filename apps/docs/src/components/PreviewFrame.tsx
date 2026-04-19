import type { CSSProperties, ReactNode } from 'react';
import { useDocsTheme } from '../context/DocsThemeProvider';

interface PreviewFrameProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/**
 * Scopes `dir` + `lang` to a subtree so only the wrapped live component
 * preview flips to RTL/Arabic — the docs chrome stays LTR/English.
 *
 * Relies on the tokens package emitting `[lang="x"]` (cascading) rather than
 * `html[lang="x"]` (html-anchored) so locale variables reach nested elements.
 */
export function PreviewFrame({ children, className, style }: PreviewFrameProps) {
  const { direction, locale } = useDocsTheme();
  return (
    <div
      dir={direction}
      lang={locale}
      data-preview-scope
      className={className}
      style={style}
    >
      {children}
    </div>
  );
}
