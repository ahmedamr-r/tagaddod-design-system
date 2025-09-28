export const pageBreakpoints = {
  xl: '1440px',
  l: '1220px',
  md: '768px',
  sm: '490px'
} as const;

export const pageContainerWidths = {
  default: '1240px',
  fluid: 'auto'
} as const;

export const pageMargins = {
  large: '24px',
  small: '16px'
} as const;

export type PageBreakpoint = keyof typeof pageBreakpoints;
export type PageContainerWidth = keyof typeof pageContainerWidths;
export type PageMargin = keyof typeof pageMargins;