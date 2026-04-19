import colorPrimitivesJson from '@tokens-src/core/color.tokens.json';
import colorSemanticsJson from '@tokens-src/semantic/color.semantic.json';
import sizeJson from '@tokens-src/core/size.tokens.json';
import spaceJson from '@tokens-src/core/space.tokens.json';
import borderRadiusJson from '@tokens-src/core/borderRadius.tokens.json';
import borderWidthJson from '@tokens-src/core/borderWidth.tokens.json';
import shadowJson from '@tokens-src/extras/shadow.tokens.json';
import motionJson from '@tokens-src/extras/motion.tokens.json';
import zIndexJson from '@tokens-src/extras/zIndex.tokens.json';
import typographyJson from '@tokens-src/locales/en/typography.tokens.json';
import fontJson from '@tokens-src/locales/en/font.tokens.json';

/**
 * Converts a dotted token path (e.g. "color.blue.1200", "borderRadius.150")
 * to the generated CSS custom property name (e.g. "--t-color-blue-1200",
 * "--t-border-radius-150"). Matches the Style Dictionary transform used in
 * packages/tokens/style-dictionary.config.js.
 */
export function pathToCssVar(path: string): string {
  const kebab = path
    .split('.')
    .map((segment) =>
      segment.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
    )
    .join('-');
  return `--t-${kebab}`;
}

/** Parses `{color.gray.1600}` → `color.gray.1600`, returns null if not a ref. */
function parseReference(raw: unknown): string | null {
  if (typeof raw !== 'string') return null;
  const match = raw.match(/^\{([^}]+)\}$/);
  return match ? match[1] : null;
}

function isTokenLeaf(node: unknown): node is { $value: unknown; $type?: string; $description?: string } {
  return (
    typeof node === 'object' &&
    node !== null &&
    '$value' in (node as Record<string, unknown>)
  );
}

/** Walks a token tree and returns leaf descriptors. */
function walkTokens(
  node: unknown,
  prefix: string[] = []
): Array<{ path: string; value: unknown; type?: string; description?: string }> {
  const results: Array<{ path: string; value: unknown; type?: string; description?: string }> = [];
  if (!node || typeof node !== 'object') return results;

  for (const [key, child] of Object.entries(node as Record<string, unknown>)) {
    const nextPath = [...prefix, key];
    if (isTokenLeaf(child)) {
      results.push({
        path: nextPath.join('.'),
        value: child.$value,
        type: child.$type,
        description: child.$description,
      });
    } else if (typeof child === 'object' && child !== null) {
      results.push(...walkTokens(child, nextPath));
    }
  }
  return results;
}

/* -----------------------------------------------------------------------
 * Colour primitives
 * --------------------------------------------------------------------- */
export interface ColorPrimitive {
  hue: string;
  step: string;
  path: string;
  cssVar: string;
  value: string;
}

export function getColorPrimitivesByHue(): Record<string, ColorPrimitive[]> {
  const grouped: Record<string, ColorPrimitive[]> = {};
  const leaves = walkTokens(colorPrimitivesJson);
  for (const leaf of leaves) {
    const [, hue, step] = leaf.path.split('.');
    if (!hue || !step) continue;
    const entry: ColorPrimitive = {
      hue,
      step,
      path: leaf.path,
      cssVar: pathToCssVar(leaf.path),
      value: String(leaf.value),
    };
    (grouped[hue] ||= []).push(entry);
  }
  // Keep steps ordered numerically.
  for (const hue of Object.keys(grouped)) {
    grouped[hue].sort((a, b) => Number(a.step) - Number(b.step));
  }
  return grouped;
}

export const COLOR_HUES = ['blue', 'green', 'red', 'orange', 'purple', 'gray'] as const;
export type ColorHue = typeof COLOR_HUES[number];

/* -----------------------------------------------------------------------
 * Colour semantics
 * --------------------------------------------------------------------- */
export interface ColorSemantic {
  /** e.g. "text", "fill", "border", "surface", "bg", "icon", "overlay" */
  group: string;
  /** e.g. "primary", "secondary", "brand-hover" */
  name: string;
  /** Full dotted path, e.g. "color.text.primary" */
  path: string;
  /** Generated CSS var, e.g. "--t-color-text-primary" */
  cssVar: string;
  /** Description from $description, when available. */
  description?: string;
  /** If the token references a primitive, the primitive's path (e.g. "color.gray.1600"). */
  referencePath?: string;
  /** Generated CSS var of the referenced primitive. */
  referenceCssVar?: string;
  /** Resolved hex/rgba value (either the primitive's value or the raw rgba string). */
  resolvedValue: string;
}

export const SEMANTIC_GROUPS = [
  'text',
  'icon',
  'fill',
  'surface',
  'border',
  'bg',
  'overlay',
] as const;
export type SemanticGroup = typeof SEMANTIC_GROUPS[number];

export const SEMANTIC_GROUP_LABELS: Record<SemanticGroup, string> = {
  text: 'Text',
  icon: 'Icon',
  fill: 'Fill',
  surface: 'Surface',
  border: 'Border',
  bg: 'Background',
  overlay: 'Overlay',
};

export const SEMANTIC_GROUP_BLURBS: Record<SemanticGroup, string> = {
  text: 'Colours for body text, headings, links and supporting copy.',
  icon: 'Colours for iconography across states and contexts.',
  fill: 'Background colours for contained elements like buttons and badges.',
  surface: 'Background colours for elevated surfaces like cards and panels.',
  border: 'Outline colours that separate elements and communicate state.',
  bg: 'Page and container backgrounds that sit behind everything else.',
  overlay: 'Transparent layers for scrims, modals and hover effects.',
};

function resolvePrimitive(primitivePath: string): string | undefined {
  // Walk the primitive JSON using the dotted path.
  const parts = primitivePath.split('.');
  let node: unknown = colorPrimitivesJson;
  for (const part of parts) {
    if (node && typeof node === 'object' && part in (node as Record<string, unknown>)) {
      node = (node as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }
  if (isTokenLeaf(node)) return String(node.$value);
  return undefined;
}

export function getColorSemanticsByGroup(): Record<string, ColorSemantic[]> {
  const grouped: Record<string, ColorSemantic[]> = {};
  const leaves = walkTokens(colorSemanticsJson);
  for (const leaf of leaves) {
    const parts = leaf.path.split('.');
    // Expecting paths like color.{group}.{name...}
    if (parts[0] !== 'color' || parts.length < 3) continue;
    const group = parts[1];
    const name = parts.slice(2).join('-');
    const referencePath = parseReference(leaf.value) ?? undefined;
    const resolvedValue = referencePath
      ? resolvePrimitive(referencePath) ?? String(leaf.value)
      : String(leaf.value);
    const entry: ColorSemantic = {
      group,
      name,
      path: leaf.path,
      cssVar: pathToCssVar(leaf.path),
      description: leaf.description,
      referencePath,
      referenceCssVar: referencePath ? pathToCssVar(referencePath) : undefined,
      resolvedValue,
    };
    (grouped[group] ||= []).push(entry);
  }
  return grouped;
}

/* -----------------------------------------------------------------------
 * Spacing, sizes, radii
 * --------------------------------------------------------------------- */
export interface DimensionToken {
  path: string;
  name: string;
  cssVar: string;
  value: string;
  px: string;
  description?: string;
}

function remToPx(value: string): string {
  if (value === '0') return '0px';
  const remMatch = value.match(/^([\d.]+)rem$/);
  if (remMatch) {
    const px = Number(remMatch[1]) * 16;
    return `${Number.isInteger(px) ? px : px.toFixed(2)}px`;
  }
  return value;
}

function dimensionTokens(
  json: unknown,
  rootKey: string
): DimensionToken[] {
  return walkTokens(json).map((leaf) => {
    const name = leaf.path.startsWith(`${rootKey}.`)
      ? leaf.path.slice(rootKey.length + 1)
      : leaf.path;
    const ref = parseReference(leaf.value);
    // Resolve size aliases via the size primitives map.
    const resolvedValue = ref
      ? resolveSizeAlias(ref) ?? String(leaf.value)
      : String(leaf.value);
    return {
      path: leaf.path,
      name,
      cssVar: pathToCssVar(leaf.path),
      value: resolvedValue,
      px: remToPx(resolvedValue),
      description: leaf.description,
    };
  });
}

function resolveSizeAlias(path: string): string | undefined {
  const parts = path.split('.');
  let node: unknown = sizeJson;
  for (const part of parts) {
    if (node && typeof node === 'object' && part in (node as Record<string, unknown>)) {
      node = (node as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }
  if (isTokenLeaf(node)) return String(node.$value);
  return undefined;
}

export function getSpacingTokens(): DimensionToken[] {
  return dimensionTokens(spaceJson, 'space');
}

export function getSizeTokens(): DimensionToken[] {
  return dimensionTokens(sizeJson, 'size');
}

export function getBorderRadiusTokens(): DimensionToken[] {
  return dimensionTokens(borderRadiusJson, 'borderRadius');
}

export function getBorderWidthTokens(): DimensionToken[] {
  return dimensionTokens(borderWidthJson, 'borderWidth');
}

/* -----------------------------------------------------------------------
 * Shadow
 * --------------------------------------------------------------------- */
export interface ShadowToken {
  path: string;
  name: string;
  cssVar: string;
  /** Human-readable composite shadow CSS. */
  css: string;
  description?: string;
}

function shadowToCss(shadow: {
  color?: string;
  offsetX?: string;
  offsetY?: string;
  blur?: string;
  spread?: string;
}): string {
  return [
    shadow.offsetX ?? '0',
    shadow.offsetY ?? '0',
    shadow.blur ?? '0',
    shadow.spread ?? '0',
    shadow.color ?? 'rgba(0,0,0,0.1)',
  ].join(' ');
}

export function getShadowTokens(): ShadowToken[] {
  return walkTokens(shadowJson).map((leaf) => {
    const name = leaf.path.startsWith('shadow.')
      ? leaf.path.slice('shadow.'.length)
      : leaf.path;
    const css = typeof leaf.value === 'object'
      ? shadowToCss(leaf.value as Record<string, string>)
      : String(leaf.value);
    return {
      path: leaf.path,
      name,
      cssVar: pathToCssVar(leaf.path),
      css,
      description: leaf.description,
    };
  });
}

/* -----------------------------------------------------------------------
 * Motion
 * --------------------------------------------------------------------- */
export interface MotionToken {
  path: string;
  name: string;
  cssVar: string;
  value: string;
  kind: 'duration' | 'easing' | 'transition';
}

export function getMotionTokens(): MotionToken[] {
  return walkTokens(motionJson).map((leaf) => {
    let kind: MotionToken['kind'] = 'duration';
    if (leaf.path.startsWith('easing')) kind = 'easing';
    if (leaf.path.startsWith('transition')) kind = 'transition';

    let value: string;
    if (Array.isArray(leaf.value)) {
      value = `cubic-bezier(${(leaf.value as number[]).join(', ')})`;
    } else if (typeof leaf.value === 'object' && leaf.value !== null) {
      const obj = leaf.value as { duration?: string; timingFunction?: string };
      value = `${obj.duration ?? ''} ${obj.timingFunction ?? ''}`.trim();
    } else {
      value = String(leaf.value);
    }

    return {
      path: leaf.path,
      name: leaf.path.split('.').slice(1).join('.') || leaf.path,
      cssVar: pathToCssVar(leaf.path),
      value,
      kind,
    };
  });
}

/* -----------------------------------------------------------------------
 * Z-index
 * --------------------------------------------------------------------- */
export interface ZIndexToken {
  path: string;
  name: string;
  cssVar: string;
  value: number;
}

export function getZIndexTokens(): ZIndexToken[] {
  return walkTokens(zIndexJson)
    .map((leaf) => ({
      path: leaf.path,
      name: leaf.path.startsWith('z.') ? leaf.path.slice(2) : leaf.path,
      cssVar: pathToCssVar(leaf.path),
      value: Number(leaf.value),
    }))
    .sort((a, b) => a.value - b.value);
}

/* -----------------------------------------------------------------------
 * Typography
 * --------------------------------------------------------------------- */
export interface TypographyToken {
  path: string;
  name: string;
  cssVar: string;
  fontFamily: string;
  fontWeight: string;
  fontSize: string;
  fontSizePx: string;
  group: 'heading' | 'body' | 'caption';
}

function resolveFontTokenRef(ref: string): string | undefined {
  const parts = ref.split('.');
  let node: unknown = fontJson;
  for (const part of parts) {
    if (node && typeof node === 'object' && part in (node as Record<string, unknown>)) {
      node = (node as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }
  if (isTokenLeaf(node)) {
    const v = node.$value;
    const nested = typeof v === 'string' ? parseReference(v) : null;
    if (nested) return resolveSizeAlias(nested);
    return String(v);
  }
  return undefined;
}

export function getTypographyTokens(): TypographyToken[] {
  const leaves = walkTokens(typographyJson);
  return leaves.map((leaf) => {
    const v = leaf.value as Record<string, string> | string;
    const val = typeof v === 'object' ? v : { fontFamily: '', fontWeight: '', fontSize: String(v) };

    const resolveField = (field?: string): string => {
      if (!field) return '';
      const ref = parseReference(field);
      if (!ref) return field;
      return resolveFontTokenRef(ref) ?? resolveSizeAlias(ref) ?? field;
    };

    const fontFamily = resolveField(val.fontFamily);
    const fontWeight = resolveField(val.fontWeight);
    const fontSize = resolveField(val.fontSize);

    const parts = leaf.path.split('.');
    const group = (parts[1] as TypographyToken['group']) ?? 'body';

    return {
      path: leaf.path,
      name: parts.slice(1).join('.'),
      cssVar: pathToCssVar(leaf.path),
      fontFamily,
      fontWeight,
      fontSize,
      fontSizePx: remToPx(fontSize),
      group,
    };
  });
}

/* -----------------------------------------------------------------------
 * Shared: copy helper
 * --------------------------------------------------------------------- */
export function copyToClipboard(text: string): Promise<void> {
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    return navigator.clipboard.writeText(text);
  }
  return Promise.resolve();
}
