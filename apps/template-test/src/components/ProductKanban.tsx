import { useState } from 'react'
import { Button, Badge, useTheme } from '@tagaddod-design/react'
import { IconPlus, IconPackage } from '@tabler/icons-react'
import { getTranslations } from '../lib/translations'

// Product type definition
export interface Product {
  id: number
  name: string
  sku: string
  quantity: number
  category: string
  status: 'in-inventory' | 'missing' | 'shipping'
}

interface ProductKanbanProps {
  products: Product[]
  onAddProduct: () => void
}

export function ProductKanban({ products, onAddProduct }: ProductKanbanProps) {
  const { locale } = useTheme()
  const t = getTranslations(locale)

  // Group products by status
  const productsByStatus = {
    'in-inventory': products.filter(p => p.status === 'in-inventory'),
    'missing': products.filter(p => p.status === 'missing'),
    'shipping': products.filter(p => p.status === 'shipping')
  }

  // Column configuration
  const columns = [
    {
      id: 'in-inventory' as const,
      title: t.inInventory,
      color: 'var(--t-color-fill-success)',
      products: productsByStatus['in-inventory']
    },
    {
      id: 'missing' as const,
      title: t.missing,
      color: 'var(--t-color-fill-critical)',
      products: productsByStatus['missing']
    },
    {
      id: 'shipping' as const,
      title: t.shipping,
      color: 'var(--t-color-fill-info)',
      products: productsByStatus['shipping']
    }
  ]

  return (
    <div
      style={{
        backgroundColor: 'var(--t-color-surface-primary)',
        borderRadius: 'var(--t-border-radius-300)',
        padding: 'var(--t-space-500)',
        border: `var(--t-border-width-25) solid var(--t-color-border-secondary)`,
      }}
    >
      {/* Header */}
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
          {t.productInventory}
        </h2>
        <Button
          variant="primary"
          prefixIcon={<IconPlus size={18} />}
          onClick={onAddProduct}
        >
          {t.addProduct}
        </Button>
      </div>

      {/* Kanban Board */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'var(--t-space-500)',
        }}
      >
        {columns.map((column) => (
          <div
            key={column.id}
            style={{
              backgroundColor: 'var(--t-color-surface-secondary)',
              border: `var(--t-border-width-25) solid var(--t-color-border-tertiary)`,
              borderRadius: 'var(--t-border-radius-300)',
              padding: 'var(--t-space-400)',
            }}
          >
            {/* Column Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--t-space-200)',
                marginBottom: 'var(--t-space-400)',
                padding: 'var(--t-space-300)',
                backgroundColor: 'var(--t-color-surface-primary)',
                borderRadius: 'var(--t-border-radius-200)',
                border: `var(--t-border-width-25) solid var(--t-color-border-secondary)`,
              }}
            >
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: column.color,
                }}
              />
              <h3
                style={{
                  font: 'var(--t-typography-label-md-semibold)',
                  color: 'var(--t-color-text-primary)',
                  margin: 0,
                  flex: 1,
                }}
              >
                {column.title}
              </h3>
              <Badge tone="default">
                {column.products.length}
              </Badge>
            </div>

            {/* Column Cards */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--t-space-300)',
                minHeight: '350px',
              }}
            >
              {column.products.map((product) => (
                <div
                  key={product.id}
                  style={{
                    backgroundColor: 'var(--t-color-surface-primary)',
                    border: `var(--t-border-width-25) solid var(--t-color-border-secondary)`,
                    borderRadius: 'var(--t-border-radius-300)',
                    padding: 'var(--t-space-400)',
                    transition: 'var(--t-transition-soft)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--t-color-surface-hover)'
                    e.currentTarget.style.boxShadow = 'var(--t-shadow-2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--t-color-surface-primary)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {/* Card Header */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--t-space-200)',
                      marginBottom: 'var(--t-space-200)',
                    }}
                  >
                    <IconPackage size={20} style={{ color: column.color }} />
                    <h4
                      style={{
                        font: 'var(--t-typography-label-md-semibold)',
                        color: 'var(--t-color-text-primary)',
                        margin: 0,
                        flex: 1,
                      }}
                    >
                      {product.name}
                    </h4>
                  </div>

                  {/* Card Content */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'var(--t-space-100)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        font: 'var(--t-typography-body-sm)',
                        color: 'var(--t-color-text-secondary)',
                      }}
                    >
                      <span>{t.sku}:</span>
                      <span style={{ color: 'var(--t-color-text-primary)' }}>
                        {product.sku}
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        font: 'var(--t-typography-body-sm)',
                        color: 'var(--t-color-text-secondary)',
                      }}
                    >
                      <span>{t.quantity}:</span>
                      <span
                        style={{
                          color: 'var(--t-color-text-primary)',
                          fontWeight: 600,
                        }}
                      >
                        {product.quantity}
                      </span>
                    </div>
                    <div style={{ marginTop: 'var(--t-space-200)' }}>
                      <Badge tone="info">
                        {product.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}

              {/* Empty State */}
              {column.products.length === 0 && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    minHeight: '200px',
                    padding: 'var(--t-space-600)',
                    textAlign: 'center',
                  }}
                >
                  <p
                    style={{
                      font: 'var(--t-typography-body-sm)',
                      color: 'var(--t-color-text-tertiary)',
                    }}
                  >
                    No products
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
