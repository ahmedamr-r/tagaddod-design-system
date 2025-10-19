import { useState } from 'react'
import {
  TopBar,
  Sidebar,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TextInput,
  Button,
  Card,
  Badge
} from '@tagaddod-design/react'
import {
  IconSearch,
  IconFilter,
  IconArrowsSort,
  IconPackage,
  IconBoxSeam,
  IconClipboardList,
  IconSettings,
  IconBell,
  IconUser,
  IconBottle,
  IconStack2
} from '@tabler/icons-react'

// Dummy shipments data
const shipments = [
  {
    id: 1,
    number: '45738',
    date: '05/10/2025',
    status: 'بدأت',
    warehouse: 'TGX',
    courier: 'سعد البقمي',
    received: 0,
    total: 75
  },
  {
    id: 2,
    number: '45738',
    date: '05/10/2025',
    status: 'بدأت',
    warehouse: 'B2X',
    courier: 'فيصل العتيبي',
    received: 0,
    total: 200
  },
  {
    id: 3,
    number: '45688',
    date: '05/10/2025',
    status: 'بدأت',
    warehouse: 'B2B',
    courier: 'حاتم جمال',
    received: 0,
    total: 0,
    hasMultipleCodes: true
  },
  {
    id: 4,
    date: '05/10/2025',
    status: 'بدأت',
    courier: 'أحمد الصالح',
    received: 0,
    total: 36
  }
]

export default function ShipmentsPage() {
  const [selectedShipment, setSelectedShipment] = useState<number | null>(null)
  const [selectedMenuItem, setSelectedMenuItem] = useState('receiving')
  const [selectedTab, setSelectedTab] = useState('shipments')

  // Sidebar menu items
  const sidebarItems = [
    { id: 'receiving', label: 'استلام و تسليم', icon: IconPackage },
    { id: 'custody', label: 'العهدة', icon: IconBoxSeam },
    { id: 'quality', label: 'الجودة', icon: IconClipboardList },
    { id: 'settings', label: 'الاعدادات', icon: IconSettings },
    { id: 'inventory', label: 'Inventory', icon: IconStack2 },
    { id: 'notifications', label: 'الإشعارات', icon: IconBell },
    { id: 'profile', label: '', icon: IconUser }
  ]

  return (
    <div style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
      {/* Top Bar */}
      <TopBar />

      {/* Tabs Navigation */}
      <div style={{
        borderBottom: '1px solid var(--t-color-border-secondary)',
        backgroundColor: 'var(--t-color-fill-primary)'
      }}>
        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          syncWithUrl={true}
          urlParamName="tab"
        >
          <TabsList style={{
            padding: '0 var(--t-space-500)',
            justifyContent: 'flex-end',
            direction: 'rtl'
          }}>
            <TabsTrigger value="shipments">رحلات وطلبات</TabsTrigger>
            <TabsTrigger value="invoices">فواتير و أدوات</TabsTrigger>
            <TabsTrigger value="records">سجلات</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Main Content - Order changed for RTL */}
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden', direction: 'rtl' }}>

          {/* Shipments List Panel */}
          <div style={{
            width: '420px',
            borderLeft: '1px solid var(--t-color-border-secondary)',
            backgroundColor: 'var(--t-color-fill-primary)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}>
            {/* Header */}
            <div style={{
              padding: 'var(--t-space-500)',
              borderBottom: '1px solid var(--t-color-border-secondary)'
            }}>
              <h1 style={{
                font: 'var(--t-typography-heading-xl)',
                color: 'var(--t-color-text-primary)',
                margin: 0,
                marginBottom: 'var(--t-space-400)',
                textAlign: 'right'
              }}>
                الرحلات
              </h1>

              {/* Search and Filters */}
              <div style={{
                display: 'flex',
                gap: 'var(--t-space-200)',
                alignItems: 'center',
                direction: 'rtl'
              }}>
                <Button
                  variant="outlined"
                  size="medium"
                  prefixIcon={<IconFilter size={18} />}
                  style={{ flexShrink: 0 }}
                />
                <Button
                  variant="outlined"
                  size="medium"
                  prefixIcon={<IconArrowsSort size={18} />}
                  style={{ flexShrink: 0 }}
                />
                <div style={{ flex: 1 }}>
                  <TextInput
                    placeholder="بحث برقم الرحلة، اسم المندوب..."
                    prefixIcon={<IconSearch size={18} />}
                  />
                </div>
              </div>
            </div>

            {/* Shipments List */}
            <div style={{
              flex: 1,
              overflow: 'auto',
              padding: 'var(--t-space-400)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--t-space-300)'
            }}>
              {shipments.map((shipment) => (
                <Card
                  key={shipment.id}
                  onClick={() => setSelectedShipment(shipment.id)}
                  style={{
                    cursor: 'pointer',
                    padding: 'var(--t-space-400)',
                    backgroundColor: selectedShipment === shipment.id
                      ? 'var(--t-color-fill-secondary)'
                      : 'var(--t-color-fill-primary)',
                    border: selectedShipment === shipment.id
                      ? '2px solid var(--t-color-border-brand)'
                      : '1px solid var(--t-color-border-secondary)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {/* Header Row */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 'var(--t-space-300)',
                    direction: 'rtl'
                  }}>
                    <div style={{
                      display: 'flex',
                      gap: 'var(--t-space-200)',
                      alignItems: 'center'
                    }}>
                      <span style={{
                        font: 'var(--t-typography-body-sm)',
                        color: 'var(--t-color-text-secondary)'
                      }}>
                        {shipment.date}
                      </span>
                      <IconPackage size={16} style={{ color: 'var(--t-color-icon-secondary)' }} />
                    </div>
                    <div style={{
                      display: 'flex',
                      gap: 'var(--t-space-200)',
                      alignItems: 'center'
                    }}>
                      <Badge variant="info">{shipment.status}</Badge>
                      {shipment.number && (
                        <span style={{
                          font: 'var(--t-typography-body-sm-medium)',
                          color: 'var(--t-color-text-primary)'
                        }}>
                          رحلة {shipment.number}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Warehouse Code */}
                  {shipment.warehouse && (
                    <div style={{
                      marginBottom: 'var(--t-space-300)',
                      textAlign: 'right'
                    }}>
                      {shipment.hasMultipleCodes ? (
                        <div style={{
                          display: 'flex',
                          gap: 'var(--t-space-200)',
                          justifyContent: 'flex-end'
                        }}>
                          <Badge variant="outlined">B2C</Badge>
                          <Badge variant="outlined">B2B</Badge>
                        </div>
                      ) : (
                        <Badge variant="outlined">{shipment.warehouse}</Badge>
                      )}
                    </div>
                  )}

                  {/* Not Received Status */}
                  <div style={{
                    display: 'flex',
                    gap: 'var(--t-space-200)',
                    alignItems: 'center',
                    marginBottom: 'var(--t-space-300)',
                    justifyContent: 'flex-end',
                    direction: 'rtl'
                  }}>
                    <IconPackage size={16} style={{ color: 'var(--t-color-icon-secondary)' }} />
                    <span style={{
                      font: 'var(--t-typography-body-sm)',
                      color: 'var(--t-color-text-secondary)'
                    }}>
                      لم يتم الاستلام بعد
                    </span>
                  </div>

                  {/* Courier and Package Info */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    direction: 'rtl'
                  }}>
                    <div style={{
                      display: 'flex',
                      gap: 'var(--t-space-200)',
                      alignItems: 'center'
                    }}>
                      <IconBottle size={20} style={{ color: 'var(--t-color-icon-brand)' }} />
                      <span style={{
                        font: 'var(--t-typography-body-sm)',
                        color: 'var(--t-color-text-secondary)'
                      }}>
                        مستلم {shipment.received} كيلو | منتوج {shipment.total} كيلو
                      </span>
                    </div>
                    <span style={{
                      font: 'var(--t-typography-body-md-medium)',
                      color: 'var(--t-color-text-primary)'
                    }}>
                      {shipment.courier}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Details Panel - Empty State */}
          <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--t-color-fill-secondary)'
          }}>
            <p style={{
              font: 'var(--t-typography-body-lg)',
              color: 'var(--t-color-text-tertiary)',
              textAlign: 'center'
            }}>
              اختر رحلة لعرض التفاصيل
            </p>
          </div>
        </div>

        {/* Sidebar - Positioned on the right in RTL */}
        <Sidebar
          selectedItem={selectedMenuItem}
          onItemChange={setSelectedMenuItem}
          menuItems={sidebarItems}
          position="right"
        />
      </div>
    </div>
  )
}
