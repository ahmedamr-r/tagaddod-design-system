# Component Integration Rules
# AI Agent Instructions for Integrating and Using Tagaddod Design System Components

## OBJECTIVE
Establish proper patterns, best practices, and implementation guidelines for using Tagaddod Design System components in your application.

## PREREQUISITES
- Design system installed and configured
- ThemeProvider set up
- Styles activated
- Project structure in place

## COMPONENT INTEGRATION PATTERNS

### 1. Import Strategies

#### 1.1 Recommended Import Pattern (Tree-shakable)
```typescript
// ✅ Named imports for optimal tree-shaking
import { 
  Button, 
  TextInput, 
  Select, 
  Modal,
  ThemeProvider,
  useTheme 
} from '@tagaddod-design/react'

// ✅ Icon imports
import { 
  IconPlus, 
  IconEdit, 
  IconTrash,
  IconSearch 
} from '@tabler/icons-react'
```

#### 1.2 Avoid These Import Patterns
```typescript
// ❌ Default imports (not tree-shakable)
import TagaddodDesign from '@tagaddod-design/react'

// ❌ Star imports (imports everything)
import * as TagaddodDesign from '@tagaddod-design/react'

// ❌ Deep imports (may break in updates)
import Button from '@tagaddod-design/react/dist/Button'
```

### 2. Component Re-export Setup

Create a centralized component barrel file (src/components/ui/index.ts):

```typescript
// Re-export design system components with consistent naming
export {
  // Form Controls
  Button,
  TextInput,
  Select,
  Checkbox,
  RadioButton,
  Switch,
  RangeSlider,
  
  // Layout & Structure
  AspectRatio,
  Separator,
  Sidebar,
  TopBar,
  
  // Data Display
  Avatar,
  Badge,
  Table,
  Tooltip,
  Logo,
  
  // Navigation
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Pagination,
  Listbox,
  
  // Overlays & Feedback
  Modal,
  Drawer,
  Popover,
  Sonner,
  
  // Theme System
  ThemeProvider,
  useTheme,
} from '@tagaddod-design/react'

// Export commonly used types for TypeScript
export type {
  ButtonProps,
  TextInputProps,
  SelectProps,
  ModalProps,
  Theme,
  Direction,
  Locale
} from '@tagaddod-design/react'

// Export icon components for convenience
export {
  IconPlus,
  IconMinus,
  IconEdit,
  IconTrash,
  IconSearch,
  IconFilter,
  IconDownload,
  IconUpload,
  IconHome,
  IconUser,
  IconSettings,
  IconBell,
  IconMail,
  IconPhone,
  IconCalendar,
  IconClock,
  IconCheck,
  IconX,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconChevronDown,
  IconArrowLeft,
  IconArrowRight,
  IconExternalLink
} from '@tabler/icons-react'
```

### 3. Form Components Integration

#### 3.1 Contact Form Example
Create (src/components/forms/ContactForm.tsx):

```typescript
import { useState } from 'react'
import { 
  Button, 
  TextInput, 
  Select, 
  Checkbox, 
  Separator 
} from '@/components/ui'
import { IconSend, IconUser, IconMail } from '@tabler/icons-react'

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  country: string
  message: string
  newsletter: boolean
  terms: boolean
}

const COUNTRY_OPTIONS = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ae', label: 'United Arab Emirates' },
  { value: 'sa', label: 'Saudi Arabia' },
]

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    message: '',
    newsletter: false,
    terms: false
  })
  
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Form validation
    const newErrors: Partial<ContactFormData> = {}
    if (!formData.firstName) newErrors.firstName = 'First name is required'
    if (!formData.email) newErrors.email = 'Email is required'
    if (!formData.terms) newErrors.terms = 'You must accept the terms'
    
    setErrors(newErrors)
    
    if (Object.keys(newErrors).length === 0) {
      // Submit form logic here
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
      console.log('Form submitted:', formData)
    }
    
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 p-6 border rounded-lg">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-600">We'd love to hear from you!</p>
      </div>

      {/* Name fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextInput
          label="First Name"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
          errorMessage={errors.firstName}
          required
          prefixIcon={<IconUser size={18} />}
        />
        <TextInput
          label="Last Name"
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
        />
      </div>

      {/* Email and Country */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextInput
          label="Email Address"
          type="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          errorMessage={errors.email}
          required
          prefixIcon={<IconMail size={18} />}
        />
        <Select
          label="Country"
          placeholder="Select your country"
          options={COUNTRY_OPTIONS}
          value={formData.country}
          onChange={(value) => setFormData(prev => ({ ...prev, country: value }))}
        />
      </div>

      {/* Message */}
      <TextInput
        label="Message"
        placeholder="Tell us how we can help..."
        value={formData.message}
        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
        helpText="Optional: Share more details about your inquiry"
      />

      <Separator />

      {/* Checkboxes */}
      <div className="space-y-3">
        <Checkbox
          label="Subscribe to our newsletter"
          helpText="Get updates about new features and releases"
          checked={formData.newsletter}
          onCheckedChange={(checked) => setFormData(prev => ({ ...prev, newsletter: Boolean(checked) }))}
        />
        <Checkbox
          label="I agree to the terms and conditions"
          checked={formData.terms}
          onCheckedChange={(checked) => setFormData(prev => ({ ...prev, terms: Boolean(checked) }))}
          errorMessage={errors.terms}
          required
        />
      </div>

      {/* Submit */}
      <div className="flex justify-end gap-3 pt-4">
        <Button 
          variant="tertiary" 
          type="button"
          onClick={() => setFormData({
            firstName: '',
            lastName: '',
            email: '',
            country: '',
            message: '',
            newsletter: false,
            terms: false
          })}
        >
          Clear
        </Button>
        <Button 
          type="submit" 
          loading={isSubmitting}
          prefixIcon={<IconSend size={18} />}
        >
          Send Message
        </Button>
      </div>
    </form>
  )
}
```

### 4. Data Display Components

#### 4.1 User Table Example
Create (src/components/tables/UserTable.tsx):

```typescript
import { useState } from 'react'
import { 
  Table, 
  Avatar, 
  Badge, 
  Button, 
  TextInput,
  Modal 
} from '@/components/ui'
import { IconEdit, IconTrash, IconSearch, IconPlus } from '@tabler/icons-react'

interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user' | 'moderator'
  status: 'active' | 'inactive' | 'pending'
  avatar?: string
  lastLogin: string
}

const SAMPLE_USERS: User[] = [
  {
    id: '1',
    name: 'Ahmed Hassan',
    email: 'ahmed@example.com',
    role: 'admin',
    status: 'active',
    lastLogin: '2024-01-15'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    role: 'user',
    status: 'active',
    lastLogin: '2024-01-14'
  },
  {
    id: '3',
    name: 'Mohammed Ali',
    email: 'mohammed@example.com',
    role: 'moderator',
    status: 'inactive',
    lastLogin: '2024-01-10'
  }
]

export function UserTable() {
  const [users, setUsers] = useState<User[]>(SAMPLE_USERS)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const columns = [
    {
      accessorKey: 'name',
      header: 'User',
      cell: ({ getValue, row }: any) => (
        <div className="flex items-center gap-3">
          <Avatar 
            type="initial" 
            initial={getValue().charAt(0)}
            size="sm"
          />
          <div>
            <div className="font-medium">{getValue()}</div>
            <div className="text-sm text-gray-500">{row.original.email}</div>
          </div>
        </div>
      )
    },
    {
      accessorKey: 'role',
      header: 'Role',
      cell: ({ getValue }: any) => (
        <Badge tone={getValue() === 'admin' ? 'info' : 'default'}>
          {getValue()}
        </Badge>
      )
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ getValue }: any) => {
        const status = getValue()
        const toneMap = {
          active: 'success' as const,
          inactive: 'critical' as const,
          pending: 'warning' as const
        }
        return (
          <Badge tone={toneMap[status]}>
            {status}
          </Badge>
        )
      }
    },
    {
      accessorKey: 'lastLogin',
      header: 'Last Login',
      cell: ({ getValue }: any) => (
        <span className="text-sm text-gray-600">
          {new Date(getValue()).toLocaleDateString()}
        </span>
      )
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }: any) => (
        <div className="flex items-center gap-2">
          <Button
            size="micro"
            variant="secondary"
            prefixIcon={<IconEdit size={14} />}
            onClick={() => setSelectedUser(row.original)}
          >
            Edit
          </Button>
          <Button
            size="micro"
            variant="primary"
            tone="critical"
            prefixIcon={<IconTrash size={14} />}
            onClick={() => handleDeleteUser(row.original.id)}
          >
            Delete
          </Button>
        </div>
      )
    }
  ]

  const handleDeleteUser = (userId: string) => {
    setUsers(prev => prev.filter(user => user.id !== userId))
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">User Management</h2>
          <p className="text-gray-600">Manage user accounts and permissions</p>
        </div>
        <Button prefixIcon={<IconPlus size={18} />}>
          Add User
        </Button>
      </div>

      {/* Search */}
      <div className="w-full max-w-md">
        <TextInput
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          prefixIcon={<IconSearch size={18} />}
        />
      </div>

      {/* Table */}
      <Table
        data={filteredUsers}
        columns={columns}
        title="Users"
        showSearch={false} // We have custom search
      />

      {/* Edit Modal */}
      {selectedUser && (
        <Modal
          title="Edit User"
          showTitle={true}
          onCancel={() => setSelectedUser(null)}
          onConfirm={() => {
            // Save user logic here
            setSelectedUser(null)
          }}
        >
          <div className="space-y-4">
            <TextInput
              label="Name"
              value={selectedUser.name}
              onChange={() => {}} // Add proper handler
            />
            <TextInput
              label="Email"
              type="email"
              value={selectedUser.email}
              onChange={() => {}} // Add proper handler
            />
          </div>
        </Modal>
      )}
    </div>
  )
}
```

### 5. Navigation Components

#### 5.1 App Sidebar Implementation
Create (src/components/layout/AppSidebar.tsx):

```typescript
import { useState } from 'react'
import { Sidebar, Logo } from '@/components/ui'
import { 
  IconHome, 
  IconUser, 
  IconSettings, 
  IconChartBar, 
  IconBell,
  IconMail,
  IconFiles,
  IconHelp
} from '@tabler/icons-react'

const MENU_ITEMS = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <IconHome size={20} />,
    href: '/dashboard'
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: <IconChartBar size={20} />,
    href: '/analytics',
    children: [
      {
        id: 'reports',
        label: 'Reports',
        href: '/analytics/reports'
      },
      {
        id: 'insights',
        label: 'Insights',
        href: '/analytics/insights'
      }
    ]
  },
  {
    id: 'users',
    label: 'Users',
    icon: <IconUser size={20} />,
    href: '/users'
  },
  {
    id: 'content',
    label: 'Content',
    icon: <IconFiles size={20} />,
    href: '/content',
    children: [
      {
        id: 'articles',
        label: 'Articles',
        href: '/content/articles'
      },
      {
        id: 'media',
        label: 'Media Library',
        href: '/content/media'
      }
    ]
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: <IconBell size={20} />,
    href: '/notifications'
  },
  {
    id: 'messages',
    label: 'Messages',
    icon: <IconMail size={20} />,
    href: '/messages'
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <IconSettings size={20} />,
    href: '/settings'
  },
  {
    id: 'help',
    label: 'Help & Support',
    icon: <IconHelp size={20} />,
    href: '/help'
  }
]

interface AppSidebarProps {
  selectedItem?: string
  onItemChange?: (itemId: string) => void
}

export function AppSidebar({ selectedItem, onItemChange }: AppSidebarProps) {
  const [currentSelection, setCurrentSelection] = useState(selectedItem || 'dashboard')

  const handleItemChange = (itemId: string) => {
    setCurrentSelection(itemId)
    onItemChange?.(itemId)
  }

  return (
    <Sidebar
      menuItems={MENU_ITEMS}
      selectedItem={currentSelection}
      onItemChange={handleItemChange}
      position="left"
    />
  )
}
```

### 6. Modal and Overlay Patterns

#### 6.1 Confirmation Modal Component
Create (src/components/modals/ConfirmationModal.tsx):

```typescript
import { Modal, Button } from '@/components/ui'
import { IconAlertTriangle, IconCheck, IconX } from '@tabler/icons-react'

interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  description: string
  confirmLabel?: string
  cancelLabel?: string
  type?: 'danger' | 'warning' | 'info'
  loading?: boolean
}

export function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  type = 'info',
  loading = false
}: ConfirmationModalProps) {
  const iconMap = {
    danger: <IconX size={24} className="text-red-500" />,
    warning: <IconAlertTriangle size={24} className="text-orange-500" />,
    info: <IconCheck size={24} className="text-blue-500" />
  }

  const buttonToneMap = {
    danger: 'critical' as const,
    warning: 'warning' as const,
    info: 'default' as const
  }

  return (
    <Modal
      title={title}
      showTitle={true}
      onCancel={onClose}
      onConfirm={onConfirm}
      cancelLabel={cancelLabel}
      confirmLabel={confirmLabel}
    >
      <div className="flex items-start gap-4 py-4">
        <div className="flex-shrink-0">
          {iconMap[type]}
        </div>
        <div className="flex-1">
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </Modal>
  )
}

// Usage example component
export function ConfirmationExample() {
  const [showModal, setShowModal] = useState(false)

  const handleDelete = () => {
    // Perform delete action
    console.log('Item deleted')
    setShowModal(false)
  }

  return (
    <>
      <Button 
        tone="critical"
        onClick={() => setShowModal(true)}
      >
        Delete Item
      </Button>

      <ConfirmationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDelete}
        title="Delete Item"
        description="Are you sure you want to delete this item? This action cannot be undone."
        confirmLabel="Delete"
        type="danger"
      />
    </>
  )
}
```

### 7. Toast Notifications Integration

#### 7.1 Notification Service
Create (src/lib/notifications.ts):

```typescript
import { toast } from 'sonner'

export const notifications = {
  success: (message: string, description?: string) => {
    toast.success(message, {
      description,
      duration: 4000,
    })
  },

  error: (message: string, description?: string) => {
    toast.error(message, {
      description,
      duration: 6000,
    })
  },

  warning: (message: string, description?: string) => {
    toast.warning(message, {
      description,
      duration: 5000,
    })
  },

  info: (message: string, description?: string) => {
    toast.info(message, {
      description,
      duration: 4000,
    })
  },

  loading: (message: string, promise: Promise<any>) => {
    return toast.promise(promise, {
      loading: message,
      success: 'Operation completed successfully',
      error: 'Operation failed',
    })
  },

  custom: (message: string, options?: any) => {
    toast(message, options)
  }
}

// Usage examples in components:
export function useNotificationExamples() {
  const showSuccessExample = () => {
    notifications.success(
      'User created successfully',
      'The new user has been added to your organization'
    )
  }

  const showErrorExample = () => {
    notifications.error(
      'Failed to save changes',
      'Please check your internet connection and try again'
    )
  }

  const showLoadingExample = async () => {
    const savePromise = new Promise((resolve) => {
      setTimeout(resolve, 2000)
    })

    notifications.loading('Saving changes...', savePromise)
  }

  return {
    showSuccessExample,
    showErrorExample,
    showLoadingExample
  }
}
```

### 8. TypeScript Integration Best Practices

#### 8.1 Component Props Extensions
Create (src/types/components.ts):

```typescript
import type { 
  ButtonProps as BaseButtonProps,
  TextInputProps as BaseTextInputProps 
} from '@tagaddod-design/react'

// Extend design system props with app-specific additions
export interface AppButtonProps extends BaseButtonProps {
  analyticsId?: string
  dataTestId?: string
}

export interface AppTextInputProps extends BaseTextInputProps {
  maxLength?: number
  pattern?: string
  dataTestId?: string
}

// Form-specific types
export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'select' | 'checkbox' | 'textarea'
  required?: boolean
  options?: { value: string; label: string }[]
  validation?: {
    pattern?: RegExp
    minLength?: number
    maxLength?: number
    custom?: (value: any) => string | null
  }
}

export interface FormState<T = Record<string, any>> {
  data: T
  errors: Partial<Record<keyof T, string>>
  touched: Partial<Record<keyof T, boolean>>
  isSubmitting: boolean
  isValid: boolean
}
```

## VALIDATION STEPS

### 1. Test Component Imports
```typescript
// Create a test file to verify all imports work
import { 
  Button, 
  TextInput, 
  Table, 
  Modal, 
  useTheme 
} from '@/components/ui'

// Should compile without errors
```

### 2. Verify Component Functionality
- Create sample components using the patterns above
- Test form submission and validation
- Verify table sorting and filtering
- Test modal opening and closing

### 3. Check TypeScript Integration
```bash
npm run type-check
```
Should complete without errors

### 4. Test Tree-shaking
Build the application and verify bundle size:
```bash
npm run build
```
Check that unused components are not included in bundle

## TROUBLESHOOTING

### Common Issues:

#### 1. Import Errors
**Problem**: Cannot resolve module '@/components/ui'
**Solution**: Verify path aliases in tsconfig.json

#### 2. Component Props Errors
**Problem**: TypeScript errors on component props
**Solution**: Import proper types from design system

#### 3. Icon Not Displaying
**Problem**: Tabler icons not rendering
**Solution**: Verify @tabler/icons-react is installed

#### 4. Toast Notifications Not Working
**Problem**: Sonner toasts not appearing
**Solution**: Ensure Sonner component is included in app root

### Success Indicators:
- All components import without errors
- TypeScript compilation succeeds
- Components render with proper styling
- Form validation works correctly
- Toast notifications display properly

## COMPONENT DOCUMENTATION REFERENCE

When implementing components, always reference the corresponding .mdx files:

- **Button** → `Button.mdx` - All variants, states, and accessibility
- **TextInput** → `TextInput.mdx` - Input types, validation, icons
- **Table** → `Table.mdx` - Column definitions, sorting, filtering
- **Modal** → `Modal.mdx` - Focus management, accessibility
- **Sidebar** → `Sidebar.mdx` - Menu structure, responsiveness

## NEXT STEPS
After successful component integration:
1. Download and use `rtl-support.rules` for enhanced RTL features
2. Download and use `optimization.rules` for performance tuning
3. Explore advanced patterns in component .mdx documentation

## NOTES
- Always use named imports for tree-shaking
- Reference .mdx files for component-specific guidance
- Follow TypeScript best practices with proper typing
- Use consistent naming conventions across components
- Implement proper error handling and loading states