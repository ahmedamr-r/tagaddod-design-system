import { useState } from 'react';
import type { PreviewModule } from '@tagaddod-design/docs-types';
import { ControlsPanel } from './ControlsPanel';
import { CodePreview } from './CodePreview';
import { PreviewFrame } from './PreviewFrame';

interface PlaygroundProps {
  preview: PreviewModule;
}

export function Playground({ preview }: PlaygroundProps) {
  const [props, setProps] = useState<Record<string, unknown>>(
    preview.defaultProps as Record<string, unknown>,
  );
  const Component = preview.component as React.ComponentType<Record<string, unknown>>;

  return (
    <div>
      <div className="playground">
        <PreviewFrame className="playground__stage">
          <Component {...props} />
        </PreviewFrame>
        <div className="playground__controls">
          <ControlsPanel controls={preview.controls} values={props} onChange={setProps} />
        </div>
      </div>
      <CodePreview componentName={preview.name} props={props} />
    </div>
  );
}
