import { useState } from 'react';
import { ControlsPanel } from './ControlsPanel';
import { CodePreview } from './CodePreview';
import { usePreviewContext } from './previewContext';
import { PreviewFrame } from './PreviewFrame';

export function Controls() {
  const entry = usePreviewContext();
  const [props, setProps] = useState<Record<string, unknown>>(
    (entry?.preview.defaultProps ?? {}) as Record<string, unknown>,
  );
  if (!entry) return null;

  const Component = entry.preview.component as React.ComponentType<Record<string, unknown>>;

  return (
    <div>
      <div className="playground">
        <PreviewFrame className="playground__stage">
          <Component {...props} />
        </PreviewFrame>
        <div className="playground__controls">
          <ControlsPanel controls={entry.preview.controls} values={props} onChange={setProps} />
        </div>
      </div>
      <CodePreview componentName={entry.preview.name} props={props} />
    </div>
  );
}
