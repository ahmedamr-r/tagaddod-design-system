'use client'
import type { Metadata } from 'next';
import './globals.css';


export const metadata: Metadata = {
  title: 'Token Admin - Tagaddod Design System',
  description: 'Manage design tokens for Tagaddod Design System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}


      </body>
    </html>
  );
}
