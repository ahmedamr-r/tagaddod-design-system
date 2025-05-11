import { z } from 'zod';
import { FlatToken } from '../types/token';

const tokenSchema = z.object({
  value: z.union([z.string(), z.number()]),
  type: z.enum([
    'color',
    'dimension',
    'font',
    'number',
    'string',
    'shadow',
    'gradient',
    'transition',
    'cubic-bezier',
  ]),
  description: z.string().optional(),
});

const colorValueSchema = z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^rgb\(|^rgba\(|^hsl\(|^hsla\(/);
const dimensionValueSchema = z.string().regex(/^\d+(\.\d+)?(px|rem|em|%)$/);
const numberValueSchema = z.number();

export function validateToken(token: FlatToken): string[] {
  const errors: string[] = [];
  
  // Basic structure validation
  try {
    tokenSchema.parse({
      value: token.value,
      type: token.type,
      description: token.description,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      errors.push(...error.errors.map(e => e.message));
    }
  }
  
  // Type-specific validation
  try {
    switch (token.type) {
      case 'color':
        colorValueSchema.parse(token.value);
        break;
      case 'dimension':
        dimensionValueSchema.parse(token.value);
        break;
      case 'number':
        numberValueSchema.parse(token.value);
        break;
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      errors.push(`Invalid ${token.type} value: ${error.errors[0].message}`);
    }
  }
  
  // Path validation
  if (!token.path || token.path.length === 0) {
    errors.push('Token path is required');
  }
  
  // Reference validation
  if (token.isReference && typeof token.value === 'string') {
    const refPattern = /^\{([^}]+)\}$/;
    if (!refPattern.test(token.value)) {
      errors.push('Invalid reference format. Must be {path.to.token}');
    }
  }
  
  return errors;
}

export function validateTokenSet(tokens: any): string[] {
  const errors: string[] = [];
  
  // Validate structure
  if (!tokens.primitives || typeof tokens.primitives !== 'object') {
    errors.push('Token set must have primitives');
  }
  
  if (!tokens.semantics || typeof tokens.semantics !== 'object') {
    errors.push('Token set must have semantics');
  }
  
  // TODO: Add more comprehensive validation
  
  return errors;
}
