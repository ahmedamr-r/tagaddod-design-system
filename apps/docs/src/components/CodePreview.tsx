import { isValidElement } from 'react';

interface CodePreviewProps {
  componentName: string;
  props: Record<string, unknown>;
}

export function CodePreview({ componentName, props }: CodePreviewProps) {
  const serialised = serialiseProps(props);
  const hasChildren = 'children' in props && typeof props.children === 'string';

  let opening = `<${componentName}`;
  const attrs = serialised
    .filter(([key]) => key !== 'children')
    .map(([key, value]) => ` ${key}${value}`)
    .join('');
  opening += attrs;

  const code = hasChildren
    ? `${opening}>${props.children as string}</${componentName}>`
    : `${opening} />`;

  return <pre className="playground__code">{code}</pre>;
}

function serialiseProps(props: Record<string, unknown>): [string, string][] {
  return Object.entries(props)
    .filter(([, value]) => value !== undefined && value !== null && value !== '')
    .map(([key, value]) => {
      if (typeof value === 'boolean') {
        return [key, value ? '' : '={false}'];
      }
      if (typeof value === 'number') {
        return [key, `={${value}}`];
      }
      if (typeof value === 'string') {
        return [key, `="${value}"`];
      }
      if (isValidElement(value)) {
        return [key, '={/* node */}'];
      }
      return [key, `={${JSON.stringify(value)}}`];
    });
}
