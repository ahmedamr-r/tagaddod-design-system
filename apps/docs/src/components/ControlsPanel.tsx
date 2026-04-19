import type { ControlsFor, ControlSpec } from '@tagaddod-design/docs-types';

interface ControlsPanelProps {
  controls: ControlsFor<Record<string, unknown>>;
  values: Record<string, unknown>;
  onChange: (next: Record<string, unknown>) => void;
}

export function ControlsPanel({ controls, values, onChange }: ControlsPanelProps) {
  const entries = Object.entries(controls) as [string, ControlSpec][];

  const update = (key: string, value: unknown) => {
    onChange({ ...values, [key]: value });
  };

  return (
    <>
      {entries.map(([key, spec]) => (
        <div key={key} className="playground__control">
          <label htmlFor={`ctrl-${key}`}>{spec.label ?? key}</label>
          {renderInput(key, spec, values[key], update)}
          {spec.description ? (
            <span style={{ fontSize: 11, color: 'var(--t-color-text-secondary, #6b7280)' }}>
              {spec.description}
            </span>
          ) : null}
        </div>
      ))}
    </>
  );
}

function renderInput(
  key: string,
  spec: ControlSpec,
  value: unknown,
  update: (key: string, value: unknown) => void,
) {
  const id = `ctrl-${key}`;
  switch (spec.type) {
    case 'text':
      return (
        <input
          id={id}
          type="text"
          value={value == null ? '' : String(value)}
          onChange={(e) => update(key, e.target.value)}
        />
      );
    case 'number':
      return (
        <input
          id={id}
          type="number"
          value={value == null ? '' : Number(value)}
          min={spec.min}
          max={spec.max}
          step={spec.step}
          onChange={(e) => update(key, e.target.value === '' ? undefined : Number(e.target.value))}
        />
      );
    case 'boolean':
      return (
        <input
          id={id}
          type="checkbox"
          checked={Boolean(value)}
          onChange={(e) => update(key, e.target.checked)}
          style={{ justifySelf: 'start' }}
        />
      );
    case 'select':
      return (
        <select
          id={id}
          value={value == null ? '' : String(value)}
          onChange={(e) => update(key, e.target.value || undefined)}
        >
          <option value="">—</option>
          {spec.options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      );
    case 'multiSelect':
      return (
        <select
          id={id}
          multiple
          value={Array.isArray(value) ? (value as string[]) : []}
          onChange={(e) =>
            update(
              key,
              Array.from(e.target.selectedOptions, (o) => o.value),
            )
          }
        >
          {spec.options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      );
    case 'node': {
      const presets = spec.presets ?? {};
      const keys = Object.keys(presets);
      if (keys.length === 0) {
        return (
          <span style={{ fontSize: 12, color: 'var(--t-color-text-secondary, #6b7280)' }}>
            Node prop — set via example preset
          </span>
        );
      }
      const selectedKey =
        keys.find((k) => presets[k] === value) ?? (value === undefined ? '' : '');
      return (
        <select
          id={id}
          value={selectedKey}
          onChange={(e) => {
            const next = e.target.value ? presets[e.target.value] : undefined;
            update(key, next);
          }}
        >
          <option value="">—</option>
          {keys.map((k) => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </select>
      );
    }
  }
}
