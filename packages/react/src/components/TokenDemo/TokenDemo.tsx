import React from 'react';
import styles from './TokenDemo.module.css';

export const TokenDemo: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Token Demo</h2>
      
      <section className={styles.section}>
        <h3>Color Tokens</h3>
        <div className={styles.colorGrid}>
          <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--t-color-blue-500)' }}>
            <span>--t-color-blue-500</span>
          </div>
          <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--t-color-green-500)' }}>
            <span>--t-color-green-500</span>
          </div>
          <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--t-color-red-500)' }}>
            <span>--t-color-red-500</span>
          </div>
          <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--t-color-neutral-50)', color: 'var(--t-color-neutral-900)' }}>
            <span>--t-color-neutral-50</span>
          </div>
          <div className={styles.colorSwatch} style={{ backgroundColor: 'var(--t-color-neutral-900)' }}>
            <span>--t-color-neutral-900</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h3>Component Tokens</h3>
        <div className={styles.componentGrid}>
          <div className={styles.componentDemo} style={{ backgroundColor: 'var(--t-button-primary-background)', color: 'var(--t-button-primary-text)' }}>
            <span>Primary Button</span>
          </div>
          <div className={styles.componentValue}>
            <code>--t-button-primary-background</code>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h3>Space Tokens</h3>
        <div className={styles.spaceDemo}>
          {[100, 200, 300, 400, 500, 600].map((size) => (
            <div key={size} className={styles.spaceItem}>
              <div className={styles.spaceBox} style={{ width: `var(--t-space-${size})`, height: `var(--t-space-${size})` }} />
              <span>--t-space-{size}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h3>Border Radius</h3>
        <div className={styles.radiusDemo}>
          {[100, 200, 300].map((size) => (
            <div key={size} className={styles.radiusItem}>
              <div className={styles.radiusBox} style={{ borderRadius: `var(--t-radius-${size})` }} />
              <span>--t-radius-{size}</span>
            </div>
          ))}
          <div className={styles.radiusItem}>
            <div className={styles.radiusBox} style={{ borderRadius: 'var(--t-radius-round)' }} />
            <span>--t-radius-round</span>
          </div>
        </div>
      </section>
    </div>
  );
};
