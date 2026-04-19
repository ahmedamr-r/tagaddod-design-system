import type { ComponentType } from 'react';
import { getComponent } from '../registry';

interface DocgenPropInfo {
  defaultValue: { value: string } | null;
  description: string;
  name: string;
  required: boolean;
  type: { name: string };
}

type ComponentWithDocs = ComponentType<unknown> & {
  __docgenInfo?: {
    description?: string;
    displayName?: string;
    props?: Record<string, DocgenPropInfo>;
  };
};

export function PropsTable({ previewSlug }: { previewSlug: string }) {
  const entry = getComponent(previewSlug);
  if (!entry) return null;

  const docgen = (entry.preview.component as ComponentWithDocs).__docgenInfo;
  const props = docgen?.props ?? {};
  const rows = Object.values(props);

  if (rows.length === 0) {
    return (
      <p style={{ color: 'var(--t-color-text-secondary, #6b7280)' }}>
        No prop documentation available.
      </p>
    );
  }

  return (
    <table className="props-table">
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((prop) => (
          <tr key={prop.name}>
            <td>
              <code>{prop.name}</code>
              {prop.required ? <span style={{ color: '#dc2626' }}> *</span> : null}
            </td>
            <td>
              <code>{prop.type?.name ?? '—'}</code>
            </td>
            <td>
              {prop.defaultValue?.value ? (
                <code>{prop.defaultValue.value}</code>
              ) : (
                <span style={{ color: 'var(--t-color-text-secondary, #6b7280)' }}>—</span>
              )}
            </td>
            <td>{prop.description || ''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
