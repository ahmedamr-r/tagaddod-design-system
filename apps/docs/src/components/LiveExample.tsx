import { getComponent } from '../registry';
import { PreviewFrame } from './PreviewFrame';

interface LiveExampleProps {
  previewSlug: string;
  example: string;
}

export function LiveExample({ previewSlug, example }: LiveExampleProps) {
  const entry = getComponent(previewSlug);
  if (!entry) return null;

  const match = entry.preview.examples.find((ex) => ex.name === example);
  if (!match) {
    return (
      <div className="example-card">
        <span className="example-card__name">Example &ldquo;{example}&rdquo; not found</span>
      </div>
    );
  }

  const Component = entry.preview.component as React.ComponentType<Record<string, unknown>>;
  const merged = { ...entry.preview.defaultProps, ...match.props } as Record<string, unknown>;

  return (
    <div className="example-card">
      <PreviewFrame className="example-card__stage">
        {match.render ? match.render() : <Component {...merged} />}
      </PreviewFrame>
      <div className="example-card__name">{match.name}</div>
      {match.description ? (
        <div style={{ fontSize: 12, color: 'var(--t-color-text-secondary, #6b7280)' }}>
          {match.description}
        </div>
      ) : null}
    </div>
  );
}
