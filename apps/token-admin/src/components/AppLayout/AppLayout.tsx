'use client';

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Sidebar } from '@tagaddod-design/react';
import { 
  IconHome, 
  IconBrush, 
  IconNetwork,
  IconFileCode
} from '@tabler/icons-react';
import styles from './AppLayout.module.css';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedItem, setSelectedItem] = useState(() => {
    // Determine initial selected item based on current path
    if (pathname === '/' || pathname === '/enhanced') return 'token-editor';
    if (pathname === '/relationships') return 'relationships';
    return 'token-editor';
  });

  // Define menu structure based on Sidebar documentation
  const menuItems = [
    {
      id: 'token-editor',
      icon: IconBrush,
      label: 'Token Editor'
    },
    {
      id: 'relationships',
      icon: IconNetwork,
      label: 'Token Relationships',
      hasChildren: true,
      children: [
        { id: 'graph-view', label: 'Graph View' }
      ]
    }
  ];

  const secondaryItems: any[] = [];

  const bottomItems: any[] = [];

  const handleItemChange = (itemId: string) => {
    setSelectedItem(itemId);
    
    // Handle navigation based on selected item
    switch (itemId) {
      case 'token-editor':
        router.push('/enhanced');
        break;
      case 'relationships':
      case 'graph-view':
        router.push('/relationships');
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.appLayout}>
      <Sidebar
        selectedItem={selectedItem}
        onItemChange={handleItemChange}
        menuItems={menuItems}
        secondaryItems={secondaryItems}
        bottomItems={bottomItems}
        hoverExpand={true}
        showBottomSection={false}
        disableDefaultFallback={true}
      />
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
};

export default AppLayout;