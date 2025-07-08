'use client';

import React from 'react';
import { ThemeProvider } from '@tagaddod-design/react';
import { AppLayout } from './AppLayout';

interface AppLayoutWrapperProps {
  children: React.ReactNode;
}

export const AppLayoutWrapper: React.FC<AppLayoutWrapperProps> = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="tagaddod" defaultLocale="en">
      <AppLayout>
        {children}
      </AppLayout>
    </ThemeProvider>
  );
};