import type { PreviewModule } from '@tagaddod-design/docs-types';
import { Sonner, showSonner, sonnerPositions, type SonnerProps } from './Sonner';
import { Button } from '../Button/Button';

const themes = ['light', 'dark', 'system'] as const;

const SonnerPreview = (props: SonnerProps) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Button
        variant="primary"
        tone="success"
        onClick={() =>
          showSonner.success({ title: 'Saved successfully', description: 'Your changes have been saved.' })
        }
      >
        Success toast
      </Button>
      <Button
        variant="primary"
        tone="critical"
        onClick={() =>
          showSonner.error({ title: 'Could not save', description: 'Please try again in a moment.' })
        }
      >
        Error toast
      </Button>
      <Button
        variant="tonal"
        tone="critical"
        onClick={() =>
          showSonner.warning({ title: 'Check your connection', description: 'Re-sync may be required.' })
        }
      >
        Warning toast
      </Button>
      <Button
        variant="outlined"
        onClick={() => showSonner.info({ title: 'Heads up', description: 'New features are available.' })}
      >
        Info toast
      </Button>
    </div>
    <Sonner {...props} />
  </div>
);

SonnerPreview.displayName = 'Sonner';

export const preview: PreviewModule<SonnerProps> = {
  name: 'Sonner',
  slug: 'sonner',
  description: 'Toast notifications (success, error, warning, info) with position and theme control.',
  component: SonnerPreview,
  defaultProps: {
    position: 'bottom-right',
    theme: 'system',
    richColors: true,
    expand: false,
    duration: 4000,
    visibleToasts: 3,
    closeButton: true,
    gap: 14,
  },
  controls: {
    position: { type: 'select', options: sonnerPositions, description: 'Viewport anchor for toasts' },
    theme: { type: 'select', options: themes, description: 'Toast colour theme' },
    richColors: { type: 'boolean', description: 'Use richer colours for status toasts' },
    expand: { type: 'boolean', description: 'Expand stacked toasts by default' },
    closeButton: { type: 'boolean', description: 'Show a close button on each toast' },
    duration: { type: 'number', description: 'Default auto-dismiss duration (ms)' },
    visibleToasts: { type: 'number', description: 'How many toasts are visible at once' },
    gap: { type: 'number', description: 'Spacing between stacked toasts (px)' },
  },
  examples: [
    {
      name: 'AllTypes',
      description: 'Trigger every toast type.',
      props: {},
      render: () => (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Button onClick={() => showSonner.success({ title: 'Success', description: 'It worked.' })}>
            Success
          </Button>
          <Button
            tone="critical"
            onClick={() => showSonner.error({ title: 'Error', description: 'Something broke.' })}
          >
            Error
          </Button>
          <Button
            variant="tonal"
            tone="critical"
            onClick={() => showSonner.warning({ title: 'Warning', description: 'Heads up.' })}
          >
            Warning
          </Button>
          <Button variant="outlined" onClick={() => showSonner.info({ title: 'Info', description: 'FYI.' })}>
            Info
          </Button>
          <Button
            variant="tonal"
            onClick={() =>
              showSonner.loading({ title: 'Uploading…', description: 'Please wait while we finish.' })
            }
          >
            Loading
          </Button>
          <Sonner position="bottom-right" />
        </div>
      ),
    },
    {
      name: 'WithAction',
      props: {},
      render: () => (
        <div style={{ display: 'flex', gap: 8 }}>
          <Button
            onClick={() =>
              showSonner.info({
                title: 'Email archived',
                description: 'You can undo this action within 10 seconds.',
                action: { label: 'Undo', onClick: () => {} },
              })
            }
          >
            Show with action
          </Button>
          <Sonner position="bottom-right" />
        </div>
      ),
    },
    {
      name: 'TopCenter',
      description: 'Place the toaster at the top of the viewport.',
      props: {},
      render: () => (
        <div style={{ display: 'flex', gap: 8 }}>
          <Button
            onClick={() => showSonner.success({ title: 'Top centre toast', description: 'Hello from the top.' })}
          >
            Fire top-centre toast
          </Button>
          <Sonner position="top-center" />
        </div>
      ),
    },
  ],
};
