import { z } from 'zod';

// W3C Design Token Format schema
const baseTokenSchema = z.object({
  value: z.union([z.string(), z.number()]),
  type: z.enum(['color', 'dimension', 'fontFamily', 'fontWeight', 'duration', 'cubicBezier', 'number', 'strokeStyle', 'border', 'transition', 'shadow', 'gradient', 'typography', 'spacing']).optional(),
  description: z.string().optional(),
  comment: z.string().optional(),
});

// Color token specific schema
const colorTokenSchema = baseTokenSchema.extend({
  value: z.string().regex(/^#[0-9a-fA-F]{6}$|^#[0-9a-fA-F]{3}$|^rgb\(/, 'Invalid color format'),
  type: z.literal('color'),
});

// Dimension token specific schema  
const dimensionTokenSchema = baseTokenSchema.extend({
  value: z.string().regex(/^\d+(\.\d+)?(px|rem|em|%)$/, 'Invalid dimension format'),
  type: z.literal('dimension'),
});

// Font weight schema
const fontWeightSchema = baseTokenSchema.extend({
  value: z.union([z.string(), z.number()]).refine(
    (val) => {
      if (typeof val === 'number') return val >= 100 && val <= 900;
      return ['normal', 'bold', 'lighter', 'bolder'].includes(val);
    },
    'Invalid font weight value'
  ),
  type: z.literal('fontWeight'),
});

// Spacing schema
const spacingTokenSchema = baseTokenSchema.extend({
  value: z.string().regex(/^\d+(\.\d+)?(px|rem|em)$/, 'Invalid spacing format'),
  type: z.literal('spacing'),
});

// Token reference schema (for alias values)
const tokenReferenceSchema = z.string().regex(/^\{[^}]+\}$/, 'Invalid token reference format');

// Complete token schema that handles different types
export const tokenSchema = z.union([
  colorTokenSchema,
  dimensionTokenSchema,
  fontWeightSchema,
  spacingTokenSchema,
  baseTokenSchema,
]);

// Schema for a token value that can be either a direct value or a reference
export const tokenValueSchema = z.union([
  tokenSchema,
  z.object({
    value: tokenReferenceSchema,
    type: z.string().optional(),
  })
]);

// Schema for the entire token structure
export const tokenStructureSchema: z.ZodSchema<any> = z.lazy(() =>
  z.record(z.union([tokenValueSchema, tokenStructureSchema]))
);

// Validation function
export function validateToken(token: unknown, type?: string): { valid: boolean; errors?: string[] } {
  try {
    if (type === 'color') {
      colorTokenSchema.parse(token);
    } else if (type === 'dimension') {
      dimensionTokenSchema.parse(token);
    } else if (type === 'fontWeight') {
      fontWeightSchema.parse(token);
    } else if (type === 'spacing') {
      spacingTokenSchema.parse(token);
    } else {
      tokenSchema.parse(token);
    }
    return { valid: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { 
        valid: false, 
        errors: error.errors.map(e => `${e.path.join('.')}: ${e.message}`)
      };
    }
    return { valid: false, errors: ['Unknown validation error'] };
  }
}

// Validate entire token structure
export function validateTokenStructure(tokens: unknown): { valid: boolean; errors?: string[] } {
  try {
    tokenStructureSchema.parse(tokens);
    return { valid: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        valid: false,
        errors: error.errors.map(e => `${e.path.join('.')}: ${e.message}`)
      };
    }
    return { valid: false, errors: ['Unknown validation error'] };
  }
}
