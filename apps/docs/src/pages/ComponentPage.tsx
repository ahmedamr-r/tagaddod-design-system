import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@tagaddod-design/react';
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

      <Tabs
        value={active}
        onValueChange={(value) => setActive(value as TabId)}
        count={visibleTabs.length as 2 | 3 | 4 | 5 | 6}
        ariaLabel={`${entry.name} documentation sections`}
      >
        <TabsList>
          {visibleTabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {hasDocs && MDXContent ? (
          <TabsContent value="docs">
            <MDXContent />
          </TabsContent>
        ) : null}
        <TabsContent value="playground">
          <Playground preview={entry.preview} />
        </TabsContent>
        <TabsContent value="examples">
          <ExamplesGrid slug={entry.slug} />
        </TabsContent>
        <TabsContent value="props">
          <PropsTable previewSlug={entry.slug} />
        </TabsContent>
      </Tabs>
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
