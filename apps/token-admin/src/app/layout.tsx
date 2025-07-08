import type { Metadata } from 'next';
import React from 'react';
import { AppLayoutWrapper } from '@/components/AppLayout/AppLayoutWrapper';
import './globals.css';
import '@tagaddod-design/react/styles';

export const metadata: Metadata = {
  title: 'Token Admin - Tagaddod Design System',
  description: 'Comprehensive token management with relationships, context switching, and enhanced descriptions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts for the design system */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Tajawal:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body suppressHydrationWarning={true}>
        <AppLayoutWrapper>
          {children}
        </AppLayoutWrapper>
      </body>
    </html>
  );
}
