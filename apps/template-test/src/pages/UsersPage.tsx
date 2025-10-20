import { useState } from 'react'
import { Table, Button, Drawer, TextInput, Select, useTheme } from '@tagaddod-design/react'
import { IconPlus } from '@tabler/icons-react'
import { getTranslations } from '../lib/translations'

interface User {
  id: number
  name: string
  phone: string
  email: string
  role: string
  status: string
}

export function UsersPage() {
  const { locale } = useTheme()
  const t = getTranslations(locale)

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    role: '',
    status: 'active'
  })

  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: 'Ahmed Mohammed',
      phone: '+966 50 123 4567',
      email: 'ahmed.mohammed@example.com',
      role: 'Admin',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Sara Ali',
      phone: '+966 55 234 5678',
      email: 'sara.ali@example.com',
      role: 'Editor',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Mohammed Hassan',
      phone: '+966 54 345 6789',
      email: 'mohammed.hassan@example.com',
      role: 'Viewer',
      status: 'Inactive'
    }
  ])

  const columns = [
    {
      accessorKey: 'name',
      header: t.nameHeader,
      size: 200
    },
    {
      accessorKey: 'phone',
      header: t.phoneHeader,
      size: 150
    },
    {
      accessorKey: 'email',
      header: t.emailHeader,
      size: 250
    },
    {
      accessorKey: 'role',
      header: t.roleHeader,
      size: 120
    },
    {
      accessorKey: 'status',
      header: t.statusHeader,
      size: 100
    }
  ]

  const roleOptions = [
    { value: 'admin', label: t.admin },
    { value: 'editor', label: t.editor },
    { value: 'viewer', label: t.viewer }
  ]

  const statusOptions = [
    { value: 'active', label: t.active },
    { value: 'inactive', label: t.inactive }
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSaveUser = () => {
    const newUser: User = {
      id: users.length + 1,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      role: roleOptions.find(opt => opt.value === formData.role)?.label || formData.role,
      status: statusOptions.find(opt => opt.value === formData.status)?.label || formData.status
    }

    setUsers(prev => [...prev, newUser])

    setFormData({
      name: '',
      phone: '',
      email: '',
      role: '',
      status: 'active'
    })

    setDrawerOpen(false)
  }

  const handleCancel = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      role: '',
      status: 'active'
    })
    setDrawerOpen(false)
  }

  return (
    <>
      <div
        style={{
          backgroundColor: 'var(--t-color-surface-primary)',
          borderRadius: 'var(--t-border-radius-300)',
          padding: 'var(--t-space-500)',
          border: `var(--t-border-width-25) solid var(--t-color-border-secondary)`,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 'var(--t-space-500)',
          }}
        >
          <h2
            style={{
              font: 'var(--t-typography-heading-lg)',
              color: 'var(--t-color-text-primary)',
            }}
          >
            {t.adminUsers}
          </h2>
          <Button
            variant="primary"
            prefixIcon={<IconPlus size={18} />}
            onClick={() => setDrawerOpen(true)}
          >
            {t.addUser}
          </Button>
        </div>

        <Table
          data={users}
          columns={columns}
          title=""
        />
      </div>

      <Drawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        title={t.addNewUser}
        showFooter={true}
        footerVariant="cancelAndActions"
        cancelLabel={t.cancel}
        primaryLabel={t.saveUser}
        onCancel={handleCancel}
        onPrimary={handleSaveUser}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--t-space-400)',
          }}
        >
          <TextInput
            label={t.name}
            placeholder={t.enterUserName}
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            fullWidth
          />

          <TextInput
            label={t.phoneNumber}
            placeholder={t.enterPhoneNumber}
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            fullWidth
          />

          <TextInput
            label={t.email}
            type="email"
            placeholder={t.enterEmail}
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            fullWidth
          />

          <Select
            label={t.role}
            placeholder={t.selectUserRole}
            options={roleOptions}
            value={formData.role}
            onValueChange={(value) => handleInputChange('role', value)}
            fullWidth
          />

          <Select
            label={t.status}
            placeholder={t.selectStatus}
            options={statusOptions}
            value={formData.status}
            onValueChange={(value) => handleInputChange('status', value)}
            fullWidth
          />
        </div>
      </Drawer>
    </>
  )
}
