import React, { useState } from 'react';
import { Pagination } from '../src/components/Pagination';
import '../dist/styles/index.css';

const mockData = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `Item ${index + 1}`,
  value: Math.floor(Math.random() * 1000),
}));

const PaginationExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [countType, setCountType] = useState<'short' | 'long'>('long');
  const [showCount, setShowCount] = useState(true);
  const [showRowsInPage, setShowRowsInPage] = useState(true);
  const [isRTL, setIsRTL] = useState(false);
  
  // Handle page change
  const handlePageChange = (page: number, size?: number) => {
    setCurrentPage(page);
    if (size) setPageSize(size);
  };
  
  // Calculate current items
  const currentItems = mockData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  
  // Apply RTL when toggled
  React.useEffect(() => {
    document.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    
    return () => {
      document.dir = 'ltr';
      document.documentElement.dir = 'ltr';
    };
  }, [isRTL]);
  
  return (
    <div style={{ 
      maxWidth: '960px', 
      margin: '0 auto', 
      padding: '2rem',
      fontFamily: 'var(--t-font-family-primary, "Helvetica Neue LT Std")',
    }}>
      <h1>Pagination Example</h1>
      
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        marginBottom: '1rem',
        flexWrap: 'wrap',
      }}>
        <label>
          <input 
            type="checkbox" 
            checked={countType === 'long'} 
            onChange={(e) => setCountType(e.target.checked ? 'long' : 'short')}
          />
          Long Pagination (with ellipsis)
        </label>
        
        <label>
          <input 
            type="checkbox" 
            checked={showCount} 
            onChange={(e) => setShowCount(e.target.checked)}
          />
          Show Count
        </label>
        
        <label>
          <input 
            type="checkbox" 
            checked={showRowsInPage} 
            onChange={(e) => setShowRowsInPage(e.target.checked)}
          />
          Show Rows Selector
        </label>
        
        <label>
          <input 
            type="checkbox" 
            checked={isRTL} 
            onChange={(e) => setIsRTL(e.target.checked)}
          />
          RTL Mode
        </label>
      </div>
      
      <table style={{ 
        width: '100%', 
        borderCollapse: 'collapse',
        marginBottom: '1rem',
        textAlign: isRTL ? 'right' : 'left',
      }}>
        <thead>
          <tr>
            <th style={{ padding: '0.5rem', borderBottom: '1px solid #d9d9d9' }}>ID</th>
            <th style={{ padding: '0.5rem', borderBottom: '1px solid #d9d9d9' }}>Name</th>
            <th style={{ padding: '0.5rem', borderBottom: '1px solid #d9d9d9' }}>Value</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td style={{ padding: '0.5rem', borderBottom: '1px solid #d9d9d9' }}>{item.id}</td>
              <td style={{ padding: '0.5rem', borderBottom: '1px solid #d9d9d9' }}>{item.name}</td>
              <td style={{ padding: '0.5rem', borderBottom: '1px solid #d9d9d9' }}>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div>
        <Pagination 
          total={mockData.length}
          current={currentPage}
          pageSize={pageSize}
          onChange={handlePageChange}
          countType={countType}
          showCount={showCount}
          showRowsInPage={showRowsInPage}
        />
      </div>
    </div>
  );
};

export default PaginationExample;
