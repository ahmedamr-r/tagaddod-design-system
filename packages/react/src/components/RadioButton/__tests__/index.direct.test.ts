/**
 * @jest-environment jsdom
 */

import { RadioGroup, RadioButtonItem } from '../index.ts';

describe('RadioButton index exports', () => {
  it('exports RadioGroup and RadioButtonItem components', () => {
    expect(RadioGroup).toBeDefined();
    expect(RadioButtonItem).toBeDefined();
  });
});
