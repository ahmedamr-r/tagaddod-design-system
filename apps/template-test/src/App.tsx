import { useState } from 'react'
import {
  Sidebar,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Badge,
  Button,
  Avatar,
  Card,
  Table,
  TextInput,
  Number as NumberInput,
  useTheme
} from '@tagaddod-design/react'
import {
  IconSettings,
  IconHome,
  IconTicket,
  IconUsers,
  IconBuilding,
  IconChartBar,
  IconSearch,
  IconBell,
  IconHelp,
  IconUser,
  IconChevronLeft
} from '@tabler/icons-react'

// Mock data for tickets
const ticketsData = [
  { id: '#3', subject: 'SAMPLE TICKET: Order status says it is still processing', requester: 'Carlos Garcia', updated: 'Thursday 09:09', group: 'Support', assignee: 'Sam Lee', priority: 'urgent', status: 'Open' },
  { id: '#10', subject: 'SAMPLE TICKET: Missing assembly instructions', requester: 'Jakub Wójcik', updated: 'Thursday 09:09', group: 'Support', assignee: 'Sam Lee', priority: 'urgent', status: 'Open' },
  { id: '#13', subject: 'SAMPLE TICKET: Need less items than ordered', requester: 'Boonsri Saeli', updated: 'Thursday 09:09', group: 'Support', assignee: 'Sam Lee', priority: 'urgent', status: 'Open' },
  { id: '#2', subject: 'SAMPLE TICKET: Damaged product', requester: 'Taylor Moore', updated: 'Thursday 09:10', group: 'Support', assignee: 'Sam Lee', priority: 'urgent', status: 'Open' },
  { id: '#7', subject: 'SAMPLE TICKET: Wrong address', requester: 'Soobin Do', updated: 'Thursday 09:11', group: 'Support', assignee: 'Sam Lee', priority: 'urgent', status: 'Open' },
  { id: '#8', subject: 'SAMPLE TICKET: Ordered the wrong color', requester: 'Ram Sitwat', updated: 'Thursday 09:11', group: 'Support', assignee: 'Sam Lee', priority: 'urgent', status: 'Open' },
  { id: '#12', subject: 'SAMPLE TICKET: Cancel order', requester: 'Luka Jensen', updated: 'Thursday 09:11', group: 'Support', assignee: 'Sam Lee', priority: 'urgent', status: 'Open' },
  { id: '#1', subject: 'SAMPLE TICKET: Meet the ticket', requester: 'The Customer', updated: 'Thursday 09:06', group: 'Support', assignee: 'Sam Lee', priority: 'normal', status: 'Open' },
  { id: '#14', subject: "SAMPLE TICKET: Where's it made?", requester: 'Taylor Moore', updated: 'Thursday 09:08', group: 'Support', assignee: 'Sam Lee', priority: 'normal', status: 'Open' },
  { id: '#16', subject: "SAMPLE TICKET: Where's my order?", requester: 'Ella Rivera', updated: 'Thursday 09:08', group: 'Support', assignee: 'Sam Lee', priority: 'normal', status: 'Open' },
  { id: '#15', subject: 'SAMPLE TICKET: Putting it together?', requester: 'Carlos Garcia', updated: 'Thursday 09:08', group: 'Support', assignee: 'Sam Lee', priority: 'normal', status: 'Open' },
  { id: '#18', subject: 'SAMPLE TICKET: Shipping cost', requester: 'Zhang Wei Xu', updated: 'Thursday 09:08', group: 'Support', assignee: 'Sam Lee', priority: 'normal', status: 'Open' },
  { id: '#17', subject: 'SAMPLE TICKET: New delivery address', requester: 'Ingrid Van Dijk', updated: 'Thursday 09:08', group: 'Support', assignee: 'Sam Lee', priority: 'normal', status: 'Open' }
]

// Mock data for updates
const updatesData = [
  { user: 'Luka Jensen', ticket: 'Cancel order', comment: 'Yes, please', time: 'Thursday 09:11', initial: 'L' },
  { user: 'Marcus Allen', ticket: 'Free repair', comment: "Amazing, I'll send that right away.", time: 'Thursday 09:11', initial: 'M' },
  { user: 'Ram Sitwat', ticket: 'Ordered the wrong color', comment: "I see, I'll put through a new order now. Thanks so much.", time: 'Thursday 09:11', initial: 'R' },
  { user: 'Soobin Do', ticket: 'Wrong address', comment: "Yes, that's the one!", time: 'Thursday 09:11', initial: 'S' },
  { user: 'Taylor Moore', ticket: 'Damaged product', comment: 'I would like a replacement, thank you.', time: 'Thursday 09:10', initial: 'T' },
  { user: 'Boonsri Saeli', ticket: 'Need less items than ordered', comment: "It's 34612846", time: 'Thursday 09:09', initial: 'B' }
]

function App() {
  const [selectedTab, setSelectedTab] = useState('dashboard')
  const [selectedSidebarItem, setSelectedSidebarItem] = useState('home')
  const [searchQuery, setSearchQuery] = useState('')
  const { direction, setDirection, locale, setLocale } = useTheme()

  // Toggle language and direction
  const toggleLanguage = () => {
    if (direction === 'ltr') {
      setDirection('rtl')
      setLocale('ar')
    } else {
      setDirection('ltr')
      setLocale('en')
    }
  }

  // Sidebar menu items
  const sidebarMenuItems = [
    { id: 'settings', label: 'Settings', icon: IconSettings },
    { id: 'home', label: 'Home', icon: IconHome },
    { id: 'tickets', label: 'Tickets', icon: IconTicket },
    { id: 'users', label: 'Users', icon: IconUsers },
    { id: 'organizations', label: 'Organizations', icon: IconBuilding },
    { id: 'analytics', label: 'Analytics', icon: IconChartBar }
  ]

  // Filter tickets based on search
  const filteredTickets = ticketsData.filter(ticket =>
    ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.requester.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.id.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Group tickets by priority
  const urgentTickets = filteredTickets.filter(t => t.priority === 'urgent')
  const normalTickets = filteredTickets.filter(t => t.priority === 'normal')

  // Table columns configuration
  const columns = [
    {
      accessorKey: 'select',
      header: '',
      size: 40,
      cell: () => <input type="checkbox" style={{ cursor: 'pointer' }} />
    },
    {
      accessorKey: 'status',
      header: 'Ticket status',
      size: 120,
      cell: ({ row }: any) => (
        <Badge variant="critical" strong>
          {row.original.status}
        </Badge>
      )
    },
    {
      accessorKey: 'id',
      header: 'ID',
      size: 80,
      cell: ({ row }: any) => (
        <span style={{
          font: 'var(--t-typography-body-sm)',
          color: 'var(--t-color-text-primary)',
          fontWeight: 500
        }}>
          {row.original.id}
        </span>
      )
    },
    {
      accessorKey: 'subject',
      header: 'Subject',
      cell: ({ row }: any) => (
        <span style={{
          font: 'var(--t-typography-body-sm)',
          color: 'var(--t-color-text-primary)'
        }}>
          {row.original.subject}
        </span>
      )
    },
    {
      accessorKey: 'requester',
      header: 'Requester',
      size: 150,
      cell: ({ row }: any) => (
        <span style={{
          font: 'var(--t-typography-body-sm)',
          color: 'var(--t-color-text-secondary)'
        }}>
          {row.original.requester}
        </span>
      )
    },
    {
      accessorKey: 'updated',
      header: 'Requester updated',
      size: 150,
      cell: ({ row }: any) => (
        <span style={{
          font: 'var(--t-typography-body-sm)',
          color: 'var(--t-color-text-secondary)'
        }}>
          {row.original.updated}
        </span>
      )
    },
    {
      accessorKey: 'group',
      header: 'Group',
      size: 100,
      cell: ({ row }: any) => (
        <span style={{
          font: 'var(--t-typography-body-sm)',
          color: 'var(--t-color-text-secondary)'
        }}>
          {row.original.group}
        </span>
      )
    },
    {
      accessorKey: 'assignee',
      header: 'Assignee',
      size: 120,
      cell: ({ row }: any) => (
        <span style={{
          font: 'var(--t-typography-body-sm)',
          color: 'var(--t-color-text-secondary)'
        }}>
          {row.original.assignee}
        </span>
      )
    }
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      {/* Top Header Bar */}
      <div style={{
        backgroundColor: '#1a4d4a',
        color: 'white',
        padding: 'var(--t-space-300) var(--t-space-400)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--t-space-200)'
        }}>
          <IconChevronLeft size={18} />
          <span style={{ font: 'var(--t-typography-body-sm)' }}>Trial home</span>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--t-space-300)'
        }}>
          <span style={{ font: 'var(--t-typography-body-sm)' }}>You have 8 days left in your trial</span>
          <Button variant="outlined" size="small" style={{ color: 'white', borderColor: 'white' }}>
            Compare plans
          </Button>
          <Button variant="primary" size="small">
            Buy your trial
          </Button>
        </div>
      </div>

      {/* Secondary Top Bar */}
      <div style={{
        backgroundColor: 'var(--t-color-fill-primary)',
        borderBottom: '1px solid var(--t-color-border-secondary)',
        padding: '0 var(--t-space-400)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '52px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--t-space-400)'
        }}>
          <div style={{
            backgroundColor: '#1a4d4a',
            color: 'white',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'var(--t-border-radius-100)',
            fontWeight: 600,
            font: 'var(--t-typography-body-md-medium)'
          }}>
            Z
          </div>
          <Button variant="plain" size="small" style={{ font: 'var(--t-typography-body-sm)' }}>
            + add
          </Button>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--t-space-300)'
        }}>
          <IconSearch size={20} style={{ color: 'var(--t-color-icon-secondary)', cursor: 'pointer' }} />
          <IconBell size={20} style={{ color: 'var(--t-color-icon-secondary)', cursor: 'pointer' }} />
          <IconHelp size={20} style={{ color: 'var(--t-color-icon-secondary)', cursor: 'pointer' }} />

          {/* Language/Direction Switcher */}
          <div style={{
            borderLeft: '1px solid var(--t-color-border-secondary)',
            paddingLeft: 'var(--t-space-300)',
            marginLeft: 'var(--t-space-200)'
          }}>
            <Button
              variant="outlined"
              size="small"
              onClick={toggleLanguage}
              style={{
                font: 'var(--t-typography-body-sm)',
                minWidth: '60px'
              }}
            >
              {locale === 'en' ? 'العربية' : 'English'}
            </Button>
          </div>

          <IconUser size={20} style={{ color: 'var(--t-color-icon-secondary)', cursor: 'pointer' }} />
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Left Sidebar using Sidebar component */}
        <Sidebar
          selectedItem={selectedSidebarItem}
          onItemChange={setSelectedSidebarItem}
          menuItems={sidebarMenuItems}
          position="left"
          alwaysExpanded={false}
          expandOnHover={true}
          style={{
            backgroundColor: '#1a4d4a'
          }}
        />

        {/* Main Dashboard Content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', backgroundColor: 'var(--t-color-fill-primary)' }}>
          {/* Tab Navigation */}
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <div style={{
              borderBottom: '1px solid var(--t-color-border-secondary)',
              backgroundColor: 'var(--t-color-fill-primary)',
              padding: '0 var(--t-space-500)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <TabsList>
                <TabsTrigger value="trial-home">Trial home</TabsTrigger>
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              </TabsList>
              <Button variant="plain" size="small" style={{ color: 'var(--t-color-text-link)' }}>
                Chat now
              </Button>
            </div>

            {/* Dashboard Tab Content */}
            <TabsContent value="dashboard" style={{ flex: 1, overflow: 'auto', padding: 'var(--t-space-500)' }}>
              <div style={{ display: 'flex', gap: 'var(--t-space-500)', height: '100%' }}>
                {/* Left Panel: Updates Feed */}
                <div style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: 'var(--t-space-300)' }}>
                  <h3 style={{
                    font: 'var(--t-typography-heading-md)',
                    color: 'var(--t-color-text-primary)',
                    margin: 0
                  }}>
                    Updates to your tickets
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--t-space-300)', overflow: 'auto' }}>
                    {updatesData.map((update, index) => (
                      <Card key={index} variant="elevated">
                        <div style={{ display: 'flex', gap: 'var(--t-space-300)' }}>
                          <Avatar type="initial" initial={update.initial} size="md" />
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ marginBottom: 'var(--t-space-100)' }}>
                              <span style={{
                                font: 'var(--t-typography-body-sm-medium)',
                                color: 'var(--t-color-text-primary)'
                              }}>
                                {update.user}
                              </span>
                              <span style={{
                                font: 'var(--t-typography-body-sm)',
                                color: 'var(--t-color-text-secondary)'
                              }}>
                                {' '}commented on "{update.ticket}"
                              </span>
                            </div>
                            <p style={{
                              font: 'var(--t-typography-body-sm)',
                              color: 'var(--t-color-text-primary)',
                              margin: '0 0 var(--t-space-200) 0'
                            }}>
                              {update.comment}
                            </p>
                            <span style={{
                              font: 'var(--t-typography-body-xs)',
                              color: 'var(--t-color-text-tertiary)'
                            }}>
                              {update.time}
                            </span>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Right Panel: Dashboard Stats and Table */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--t-space-500)' }}>
                  {/* Stats Cards Row using Number component */}
                  <div style={{ display: 'flex', gap: 'var(--t-space-400)' }}>
                    {/* Open Tickets Card */}
                    <Card variant="elevated" style={{ flex: 1 }}>
                      <div style={{ marginBottom: 'var(--t-space-300)' }}>
                        <span style={{
                          font: 'var(--t-typography-body-sm)',
                          color: 'var(--t-color-text-secondary)'
                        }}>
                          Open Tickets <span style={{ color: 'var(--t-color-text-tertiary)' }}>(current)</span>
                        </span>
                      </div>
                      <div style={{ display: 'flex', gap: 'var(--t-space-600)' }}>
                        <div style={{ textAlign: 'center' }}>
                          <NumberInput
                            value={25}
                            readOnly
                            hideSteppers
                            size="xLarge"
                            style={{
                              font: 'var(--t-typography-heading-2xl)',
                              fontWeight: 600,
                              textAlign: 'center',
                              border: 'none',
                              backgroundColor: 'transparent',
                              width: '60px'
                            }}
                          />
                          <div style={{
                            font: 'var(--t-typography-body-sm)',
                            color: 'var(--t-color-text-secondary)',
                            textTransform: 'uppercase',
                            marginTop: 'var(--t-space-100)'
                          }}>
                            YOU
                          </div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                          <NumberInput
                            value={27}
                            readOnly
                            hideSteppers
                            size="xLarge"
                            style={{
                              font: 'var(--t-typography-heading-2xl)',
                              fontWeight: 600,
                              textAlign: 'center',
                              border: 'none',
                              backgroundColor: 'transparent',
                              width: '60px'
                            }}
                          />
                          <div style={{
                            font: 'var(--t-typography-body-sm)',
                            color: 'var(--t-color-text-secondary)',
                            textTransform: 'uppercase',
                            marginTop: 'var(--t-space-100)'
                          }}>
                            GROUPS
                          </div>
                        </div>
                      </div>
                    </Card>

                    {/* Ticket Statistics Card */}
                    <Card variant="elevated" style={{ flex: 1 }}>
                      <div style={{ marginBottom: 'var(--t-space-300)' }}>
                        <span style={{
                          font: 'var(--t-typography-body-sm)',
                          color: 'var(--t-color-text-secondary)'
                        }}>
                          Ticket Statistics <span style={{ color: 'var(--t-color-text-tertiary)' }}>(this week)</span>
                        </span>
                      </div>
                      <div style={{ display: 'flex', gap: 'var(--t-space-400)' }}>
                        {[
                          { label: 'GOOD', value: 0 },
                          { label: 'BAD', value: 0 },
                          { label: 'SOLVED', value: 0 }
                        ].map((stat) => (
                          <div key={stat.label} style={{ textAlign: 'center' }}>
                            <NumberInput
                              value={stat.value}
                              readOnly
                              hideSteppers
                              size="xLarge"
                              style={{
                                font: 'var(--t-typography-heading-2xl)',
                                fontWeight: 600,
                                textAlign: 'center',
                                border: 'none',
                                backgroundColor: 'transparent',
                                width: '50px'
                              }}
                            />
                            <div style={{
                              font: 'var(--t-typography-body-sm)',
                              color: 'var(--t-color-text-secondary)',
                              textTransform: 'uppercase',
                              marginTop: 'var(--t-space-100)'
                            }}>
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>

                  {/* Tickets Table using Table component */}
                  <Card variant="elevated" style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: 'var(--t-space-400)',
                      paddingBottom: 'var(--t-space-300)',
                      borderBottom: '1px solid var(--t-color-border-secondary)',
                      marginBottom: 'var(--t-space-300)'
                    }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--t-space-200)', marginBottom: 'var(--t-space-300)' }}>
                          <h3 style={{
                            font: 'var(--t-typography-heading-md)',
                            color: 'var(--t-color-text-primary)',
                            margin: 0
                          }}>
                            Tickets requiring your attention ({filteredTickets.length})
                          </h3>
                          <Button variant="plain" size="small" style={{ color: 'var(--t-color-text-link)', fontSize: '13px' }}>
                            What is this?
                          </Button>
                        </div>
                        <TextInput
                          placeholder="Search tickets..."
                          prefixIcon={<IconSearch size={18} />}
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          clearable
                          size="medium"
                          style={{ maxWidth: '400px' }}
                        />
                      </div>
                      <Button variant="outlined" size="small">
                        Play
                      </Button>
                    </div>

                    <div style={{ overflow: 'auto', flex: 1 }}>
                      {/* Urgent Priority Section */}
                      {urgentTickets.length > 0 && (
                        <div style={{ marginBottom: 'var(--t-space-400)' }}>
                          <div style={{
                            padding: 'var(--t-space-300) var(--t-space-200)',
                            backgroundColor: 'var(--t-color-fill-secondary)',
                            font: 'var(--t-typography-body-sm-medium)',
                            color: 'var(--t-color-text-secondary)',
                            marginBottom: 'var(--t-space-200)'
                          }}>
                            Priority: Urgent
                          </div>
                          <Table
                            columns={columns}
                            data={urgentTickets}
                            striped={false}
                            enableSorting={false}
                          />
                        </div>
                      )}

                      {/* Normal Priority Section */}
                      {normalTickets.length > 0 && (
                        <div>
                          <div style={{
                            padding: 'var(--t-space-300) var(--t-space-200)',
                            backgroundColor: 'var(--t-color-fill-secondary)',
                            font: 'var(--t-typography-body-sm-medium)',
                            color: 'var(--t-color-text-secondary)',
                            marginBottom: 'var(--t-space-200)'
                          }}>
                            Priority: Normal
                          </div>
                          <Table
                            columns={columns}
                            data={normalTickets}
                            striped={false}
                            enableSorting={false}
                          />
                        </div>
                      )}

                      {/* Empty State */}
                      {filteredTickets.length === 0 && (
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: 'var(--t-space-800)',
                          color: 'var(--t-color-text-tertiary)',
                          font: 'var(--t-typography-body-md)'
                        }}>
                          No tickets found matching your search
                        </div>
                      )}
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Trial Home Tab Content */}
            <TabsContent value="trial-home" style={{ flex: 1, padding: 'var(--t-space-800)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <h2 style={{
                  font: 'var(--t-typography-heading-xl)',
                  color: 'var(--t-color-text-primary)',
                  marginBottom: 'var(--t-space-300)'
                }}>
                  Trial Home
                </h2>
                <p style={{
                  font: 'var(--t-typography-body-lg)',
                  color: 'var(--t-color-text-secondary)'
                }}>
                  Welcome to your trial home page
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default App
