import { TextInput, TextInputProps, textInputSizes } from '../';

describe('TextInput exports', () => {
  it('exports TextInput component', () => {
    expect(TextInput).toBeDefined();
  });

  it('exports TextInputProps type', () => {
    // We can't directly test TypeScript types at runtime, so we can only check if it's defined
    const props: TextInputProps = {
      label: 'Test Label',
      size: 'medium'
    };
    expect(props).toBeDefined();
  });

  it('exports textInputSizes constant', () => {
    expect(textInputSizes).toEqual(['micro', 'medium', 'large']);
  });
});
