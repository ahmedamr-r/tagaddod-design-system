import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getComponent } from '../registry';
import { Playground } from '../components/Playground';
import { PropsTable } from '../components/PropsTable';
import { PreviewProvider } from '../components/previewContext';
import { PreviewFrame } from '../components/PreviewFrame';

type TabId = 'docs' | 'playground' | 'examples' | 'props';

const tabs: { id: TabId; label: string }[] = [
  { id: 'docs', label: 'Docs' },
  { id: 'playground', label: 'Playground' },
  { id: 'examples', label: 'Examples' },
  { id: 'props', label: 'Props' },
];

export function ComponentPage() {
  const { slug = '' } = useParams();
  const entry = getComponent(slug);
  const hasDocs = Boolean(entry?.MDXContent);
  const [active, setActive] = useState<TabId>(hasDocs ? 'docs' : 'playground');

  if (!entry) {
    return (
      <div>
        <h1>Component not found</h1>
        <p>
          No preview is registered for slug <code>{slug}</code>.
        </p>
      </div>
    );
  }

  const { MDXContent } = entry;
  const visibleTabs = tabs.filter((tab) => (tab.id === 'docs' ? hasDocs : true));

  return (
    <PreviewProvider value={entry}>
      <h1>{entry.name}</h1>
      {entry.description ? <p>{entry.description}</p> : null}

      <div className="tabs" role="tablist">
        {visibleTabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active === tab.id}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {active === 'docs' && MDXContent ? <MDXContent /> : null}
      {active === 'playground' ? <Playground preview={entry.preview} /> : null}
      {active === 'examples' ? <ExamplesGrid slug={entry.slug} /> : null}
      {active === 'props' ? <PropsTable previewSlug={entry.slug} /> : null}
    </PreviewProvider>
  );
}

function ExamplesGrid({ slug }: { slug: string }) {
  const entry = getComponent(slug);
  if (!entry) return null;
  const Component = entry.preview.component as React.ComponentType<Record<string, unknown>>;

  return (
    <div className="examples-grid">
      {entry.preview.examples.map((example) => {
        const merged = { ...entry.preview.defaultProps, ...example.props } as Record<
          string,
          unknown
        >;
        return (
          <div key={example.name} className="example-card">
            <PreviewFrame className="example-card__stage">
              {example.render ? example.render() : <Component {...merged} />}
            </PreviewFrame>
            <div className="example-card__name">{example.name}</div>
            {example.description ? (
              <div style={{ fontSize: 12, color: 'var(--t-color-text-secondary, #6b7280)' }}>
                {example.description}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
