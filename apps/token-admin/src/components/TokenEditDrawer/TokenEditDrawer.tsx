import React, { useState, useEffect } from 'react';
import { Drawer } from 'vaul';
import styles from './TokenEditDrawer.module.css';

interface Token {
  path: string;
  value: string;
  type: string;
  description?: string;
}

interface TokenEditDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  token: Token | null;
  onSave: (token: Token) => void;
}

export const TokenEditDrawer: React.FC<TokenEditDrawerProps> = ({
  open,
  onOpenChange,
  token,
  onSave,
}) => {
  const [formData, setFormData] = useState<Token>({
    path: '',
    value: '',
    type: '',
    description: '',
  });

  useEffect(() => {
    if (token) {
      setFormData(token);
    }
  }, [token]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onOpenChange(false);
  };

  const handleChange = (field: keyof Token, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange}>
      <Drawer.Portal>
        <Drawer.Overlay className={styles.overlay} />
        <Drawer.Content className={styles.content}>
          <div className={styles.header}>
            <Drawer.Title className={styles.title}>Edit Token</Drawer.Title>
            <Drawer.Close className={styles.closeButton}>
              <span aria-hidden>×</span>
            </Drawer.Close>
          </div>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="token-path" className={styles.label}>
                Token Path
              </label>
              <input
                id="token-path"
                type="text"
                value={formData.path}
                onChange={(e) => handleChange('path', e.target.value)}
                className={styles.input}
                placeholder="e.g., color.green.500"
                required
                readOnly
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="token-value" className={styles.label}>
                Value
              </label>
              <input
                id="token-value"
                type="text"
                value={formData.value}
                onChange={(e) => handleChange('value', e.target.value)}
                className={styles.input}
                placeholder="e.g., #25b24b"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="token-type" className={styles.label}>
                Type
              </label>
              <select
                id="token-type"
                value={formData.type}
                onChange={(e) => handleChange('type', e.target.value)}
                className={styles.select}
                required
              >
                <option value="">Select type</option>
                <option value="color">color</option>
                <option value="dimension">dimension</option>
                <option value="fontFamily">fontFamily</option>
                <option value="fontWeight">fontWeight</option>
                <option value="number">number</option>
                <option value="string">string</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="token-description" className={styles.label}>
                Description
              </label>
              <textarea
                id="token-description"
                value={formData.description || ''}
                onChange={(e) => handleChange('description', e.target.value)}
                className={styles.textarea}
                placeholder="Optional description"
                rows={3}
              />
            </div>

            <div className={styles.footer}>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className={styles.cancelButton}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={styles.saveButton}
              >
                Save Changes
              </button>
            </div>
          </form>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
