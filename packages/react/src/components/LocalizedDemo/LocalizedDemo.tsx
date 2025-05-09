import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button/Button';
import styles from './LocalizedDemo.module.css';

export const LocalizedDemo: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{t('demo.title')}</h1>
      <p className={styles.description}>{t('demo.description')}</p>
      <p className={styles.welcome}>{t('demo.welcome')}</p>
      
      <div className={styles.buttonGroup}>
        <Button variant="primary">
          {t('button.primary')}
        </Button>
        <Button variant="secondary">
          {t('button.secondary')}
        </Button>
      </div>
      
      <div className={styles.actionGroup}>
        <button className={styles.action}>{t('common.save')}</button>
        <button className={styles.action}>{t('common.cancel')}</button>
        <button className={styles.action}>{t('common.edit')}</button>
        <button className={styles.action}>{t('common.delete')}</button>
      </div>
    </div>
  );
};
