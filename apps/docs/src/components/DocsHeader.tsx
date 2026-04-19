import { useDocsTheme, type Brand, type Mode } from '../context/DocsThemeProvider';

const brands: { value: Brand; label: string }[] = [
  { value: 'tagaddod', label: 'Tagaddod' },
  { value: 'greenpan', label: 'GreenPan' },
];

const modes: { value: Mode; label: string }[] = [
  { value: 'en-ltr', label: 'English (LTR)' },
  { value: 'ar-rtl', label: 'Arabic (RTL)' },
];

export function DocsHeader() {
  const { brand, setBrand, mode, setMode } = useDocsTheme();

  return (
    <header className="docs-header">
      <div className="docs-header__brand">Tagaddod Design System</div>
      <div className="docs-header__controls">
        <div className="docs-header__control">
          <label htmlFor="docs-brand">Brand</label>
          <select
            id="docs-brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value as Brand)}
          >
            {brands.map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
              </option>
            ))}
          </select>
        </div>

        <div className="docs-header__control">
          <label htmlFor="docs-mode">Language</label>
          <select
            id="docs-mode"
            value={mode}
            onChange={(e) => setMode(e.target.value as Mode)}
          >
            {modes.map((m) => (
              <option key={m.value} value={m.value}>
                {m.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}
