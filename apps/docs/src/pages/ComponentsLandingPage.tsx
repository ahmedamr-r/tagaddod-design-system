import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@tagaddod-design/react';
import { componentList } from '../registry';

export function ComponentsLandingPage() {
  const [active, setActive] = useState('all');

  return (
    <main className="docs-main docs-prose landing-page">
      <header className="landing-hero">
        <h1>Components</h1>
        <p>
          Browse every component available in <code>@tagaddod-design/react</code>. Open a component
          to see its documentation, live playground, examples, and props reference.
        </p>
      </header>

      <Tabs value={active} onValueChange={setActive}>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="landing-grid">
            {componentList.map((entry) => (
              <Link
                key={entry.slug}
                to={`/components/${entry.slug}`}
                className="landing-card"
              >
                <div className="landing-card__name">{entry.name}</div>
                {entry.description ? (
                  <p className="landing-card__description">{entry.description}</p>
                ) : null}
              </Link>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}
