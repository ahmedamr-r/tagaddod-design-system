declare module 'wcag-contrast' {
  export function hex(foreground: string, background: string): number;
  export function rgb(foreground: [number, number, number], background: [number, number, number]): number;
  export function luminance(l1: number, l2: number): number;
  export function score(ratio: number): 'AAA' | 'AA' | 'AA Large' | 'Fail';
}
