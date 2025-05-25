import React, { useState, useMemo } from 'react'
import { 
  ThemeProvider,
  Button,
  Avatar,
  Badge,
  TextInput,
  Modal,
  Table,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Switch,
  useTheme
} from '@tagaddod-design/react'
import { IconUser, IconSettings, IconHome } from '@tabler/icons-react'
import type { ColumnDef } from '@tanstack/react-table'

// Import styles - Using local copy
import './styles.css'

// Sample data type for the table
interface Person {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'pending' | 'inactive';
  department: string;
  joinDate: string;
}

function ThemeControls() {
  const { theme, setTheme, direction, setDirection, locale, setLocale } = useTheme();
  
  return (
    <div style={{ 
      display: 'flex', 
      gap: '12px', 
      padding: '20px', 
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      marginBottom: '20px'
    }}>
      <div>
        <strong>Theme:</strong>
        <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
          <Button 
            size="micro"
            variant={theme === 'tagaddod' ? 'primary' : 'secondary'}
            onClick={() => setTheme('tagaddod')}
          >
            Tagaddod
          </Button>
          <Button 
            size="micro"
            variant={theme === 'greenpan' ? 'primary' : 'secondary'}
            onClick={() => setTheme('greenpan')}
          >
            GreenPan
          </Button>
        </div>
      </div>
      
      <div>
        <strong>Direction:</strong>
        <div style={{ marginTop: '8px' }}>
          <Button 
            size="micro"
            variant="tertiary"
            onClick={() => setDirection(direction === 'ltr' ? 'rtl' : 'ltr')}
          >
            {direction.toUpperCase()} → {direction === 'ltr' ? 'RTL' : 'LTR'}
          </Button>
        </div>
      </div>
      
      <div>
        <strong>Locale:</strong>
        <div style={{ marginTop: '8px' }}>
          <span style={{ fontSize: '14px' }}>{locale === 'en' ? 'English' : 'العربية'}</span>
        </div>
      </div>
    </div>
  );
}

function ComponentShowcase() {
  const [modalOpen, setModalOpen] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample data for the table
  const sampleData: Person[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@tagaddod.com',
      role: 'Admin',
      status: 'active',
      department: 'Engineering',
      joinDate: '2023-01-15'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@tagaddod.com',
      role: 'Designer',
      status: 'active',
      department: 'Design',
      joinDate: '2023-03-20'
    },
    {
      id: 3,
      name: 'Ahmed Hassan',
      email: 'ahmed.hassan@tagaddod.com',
      role: 'Developer',
      status: 'pending',
      department: 'Engineering',
      joinDate: '2023-12-01'
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@greenpan.com',
      role: 'Manager',
      status: 'active',
      department: 'Product',
      joinDate: '2022-08-10'
    },
    {
      id: 5,
      name: 'Mohammed Ali',
      email: 'mohammed.ali@tagaddod.com',
      role: 'Analyst',
      status: 'inactive',
      department: 'Marketing',
      joinDate: '2023-06-15'
    }
  ];

  // Define table columns
  const columns: ColumnDef<Person, any>[] = useMemo(() => [
    {
      accessorKey: 'name',
      header: 'Name',
      cell: ({ row }) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Avatar size="sm" type="initial" initial={row.original.name.split(' ').map(n => n[0]).join('')} />
          <span>{row.original.name}</span>
        </div>
      )
    },
    {
      accessorKey: 'email',
      header: 'Email',
      cell: ({ getValue }) => (
        <span style={{ color: 'var(--t-color-text-secondary)' }}>
          {getValue() as string}
        </span>
      )
    },
    {
      accessorKey: 'role',
      header: 'Role'
    },
    {
      accessorKey: 'department',
      header: 'Department'
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ getValue }) => {
        const status = getValue() as string;
        const toneMap: Record<string, "success" | "warning" | "critical"> = {
          active: 'success',
          pending: 'warning',
          inactive: 'critical'
        };
        return (
          <Badge tone={toneMap[status]}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        );
      }
    },
    {
      accessorKey: 'joinDate',
      header: 'Join Date',
      cell: ({ getValue }) => new Date(getValue() as string).toLocaleDateString()
    }
  ], []);

  // Filtered data based on search
  const filteredData = useMemo(() => {
    if (!searchQuery) return sampleData;
    return sampleData.filter(person => 
      person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.department.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sampleData]);
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>Component Showcase</h2>
      
      {/* Buttons Section */}
      <section style={{ marginBottom: '40px' }}>
        <h3>Buttons</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="plain">Plain</Button>
        </div>
        
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
          <Button tone="success">Success</Button>
          <Button tone="warning">Warning</Button>
          <Button tone="critical">Critical</Button>
          <Button tone="magic">Magic</Button>
        </div>
        
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button size="micro">Micro</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
          <Button prefixIcon={<IconUser size={18} />}>With Icon</Button>
        </div>
      </section>

      {/* Avatars & Badges */}
      <section style={{ marginBottom: '40px' }}>
        <h3>Avatars & Badges</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
          <Avatar size="sm" />
          <Avatar size="md" type="initial" initial="JD" />
          <Avatar size="lg" type="image" src="https://via.placeholder.com/100" alt="User" />
          <Avatar size="xl" type="initial" initial="AB" />
        </div>
        
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Badge>Default</Badge>
          <Badge tone="success">Success</Badge>
          <Badge tone="warning">Warning</Badge>
          <Badge tone="critical">Critical</Badge>
          <Badge tone="info">Info</Badge>
          <Badge tone="magic">Magic</Badge>
        </div>
      </section>

      {/* Form Controls */}
      <section style={{ marginBottom: '40px' }}>
        <h3>Form Controls</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '300px' }}>
          <TextInput
            label="Name"
            placeholder="Enter your name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            helperText="This is a helper text"
          />
          
          <TextInput
            label="Email"
            type="email"
            placeholder="Enter your email"
            prefixIcon={<IconUser size={18} />}
          />
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Switch 
              checked={switchValue}
              onCheckedChange={setSwitchValue}
              label="Enable notifications"
            />
          </div>
        </div>
      </section>

      {/* Modal Demo */}
      <section style={{ marginBottom: '40px' }}>
        <h3>Modal</h3>
        <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
        
        <Modal
          open={modalOpen}
          onOpenChange={setModalOpen}
          title="Example Modal"
          description="This is an example modal dialog."
        >
          <div style={{ padding: '20px' }}>
            <p>This is the modal content. You can put any components here.</p>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', marginTop: '20px' }}>
              <Button variant="tertiary" onClick={() => setModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setModalOpen(false)}>
                Confirm
              </Button>
            </div>
          </div>
        </Modal>
      </section>

      {/* Tabs Demo */}
      <section style={{ marginBottom: '40px' }}>
        <h3>Tabs</h3>
        <Tabs defaultValue="tab1" variant="underline">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tab1">
            <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
              <h4>Tab 1 Content</h4>
              <p>This is the content for the first tab.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="tab2">
            <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
              <h4>Tab 2 Content</h4>
              <p>This is the content for the second tab.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="tab3">
            <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
              <h4>Tab 3 Content</h4>
              <p>This is the content for the third tab.</p>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Advanced Table Demo */}
      <section style={{ marginBottom: '40px' }}>
        <h3>Advanced Table</h3>
        <div style={{ marginBottom: '16px' }}>
          <p style={{ color: 'var(--t-color-text-secondary)', fontSize: '14px', marginBottom: '16px' }}>
            This table demonstrates the TanStack Table integration with search, filtering, sorting, and pagination features.
          </p>
        </div>
        
        <Table
          data={filteredData}
          columns={columns}
          title="Team Members"
          badge={filteredData.length}
          showSearch={true}
          showFilters={true}
          showExport={true}
          showPagination={true}
          striped={true}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onRowClick={(row) => {
            console.log('Row clicked:', row.original);
            alert(`Clicked on ${row.original.name}`);
          }}
          onExport={() => {
            console.log('Export clicked');
            alert('Export functionality would be implemented here');
          }}
          pagination={{
            pageSize: 5,
            pageIndex: 0,
            pageCount: Math.ceil(filteredData.length / 5),
            onPageChange: (pageIndex) => {
              console.log('Page changed to:', pageIndex);
            },
            onPageSizeChange: (pageSize) => {
              console.log('Page size changed to:', pageSize);
            },
            pageSizeOptions: [5, 10, 20]
          }}
          filterOptions={{
            status: {
              label: 'Status',
              options: [
                { label: 'Active', value: 'active' },
                { label: 'Pending', value: 'pending' },
                { label: 'Inactive', value: 'inactive' }
              ]
            },
            department: {
              label: 'Department',
              options: [
                { label: 'Engineering', value: 'Engineering' },
                { label: 'Design', value: 'Design' },
                { label: 'Product', value: 'Product' },
                { label: 'Marketing', value: 'Marketing' }
              ]
            }
          }}
          emptyMessage="No team members found"
          notFoundMessage="No team members match your search criteria"
        />
      </section>

    </div>
  );
}

function App() {
  return (
    <ThemeProvider 
      defaultTheme="tagaddod"
      defaultDirection="ltr"
      defaultLocale="en"
      storageKey="test-app-theme"
    >
      <div style={{ minHeight: '100vh', backgroundColor: 'var(--t-color-surface-background, #ffffff)' }}>
        <header style={{ 
          padding: '20px', 
          borderBottom: '1px solid var(--t-color-border-default, #e1e1e1)',
          backgroundColor: 'var(--t-color-surface-primary, #ffffff)'
        }}>
          <h1 style={{ 
            margin: 0, 
            color: 'var(--t-color-text-primary, #000000)',
            fontFamily: 'var(--t-font-family-primary, system-ui)'
          }}>
            Tagaddod Design System Test App
          </h1>
          <p style={{ 
            margin: '8px 0 0 0', 
            color: 'var(--t-color-text-secondary, #666666)',
            fontSize: '14px'
          }}>
            Testing the @tagaddod-design/react component library
          </p>
        </header>
        
        <main style={{ padding: '20px' }}>
          <ThemeControls />
          <ComponentShowcase />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
