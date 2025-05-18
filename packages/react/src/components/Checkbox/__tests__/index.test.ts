import { Checkbox as CheckboxComponent } from '../Checkbox';
import { Checkbox } from '../index';

/**
 * Note: This test verifies that the index.ts file correctly re-exports the Checkbox component.
 * However, due to how Jest reports coverage for simple re-export files, it may still show
 * as uncovered in coverage reports, despite being functionally tested here.
 */
describe('Checkbox Index', () => {
  it('exports Checkbox component correctly', () => {
    expect(Checkbox).toBe(CheckboxComponent);
  });
});
