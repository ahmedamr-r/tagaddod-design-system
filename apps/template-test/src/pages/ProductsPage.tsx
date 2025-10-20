import { useState } from 'react'
import { Drawer, TextInput, Select, useTheme, showSonner } from '@tagaddod-design/react'
import { ProductKanban, Product } from '../components/ProductKanban'
import { getTranslations } from '../lib/translations'

export function ProductsPage() {
  const { locale } = useTheme()
  const t = getTranslations(locale)

  const [productDrawerOpen, setProductDrawerOpen] = useState(false)
  const [productFormData, setProductFormData] = useState({
    name: '',
    sku: '',
    quantity: '',
    category: '',
    status: 'in-inventory' as Product['status']
  })

  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Laptop Pro 15"',
      sku: 'ELEC-001',
      quantity: 45,
      category: 'Electronics',
      status: 'in-inventory'
    },
    {
      id: 2,
      name: 'Office Chair Ergonomic',
      sku: 'FURN-023',
      quantity: 12,
      category: 'Furniture',
      status: 'in-inventory'
    },
    {
      id: 3,
      name: 'Wireless Mouse',
      sku: 'ELEC-045',
      quantity: 0,
      category: 'Electronics',
      status: 'missing'
    },
    {
      id: 4,
      name: 'Standing Desk',
      sku: 'FURN-012',
      quantity: 8,
      category: 'Furniture',
      status: 'shipping'
    },
    {
      id: 5,
      name: 'Monitor 27"',
      sku: 'ELEC-032',
      quantity: 15,
      category: 'Electronics',
      status: 'shipping'
    },
    {
      id: 6,
      name: 'Keyboard Mechanical',
      sku: 'ELEC-056',
      quantity: 0,
      category: 'Electronics',
      status: 'missing'
    }
  ])

  const categoryOptions = [
    { value: 'electronics', label: t.electronics },
    { value: 'furniture', label: t.furniture },
    { value: 'clothing', label: t.clothing },
    { value: 'food', label: t.food }
  ]

  const productStatusOptions = [
    { value: 'in-inventory', label: t.inInventory },
    { value: 'missing', label: t.missing },
    { value: 'shipping', label: t.shipping }
  ]

  const handleProductInputChange = (field: string, value: string) => {
    setProductFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSaveProduct = () => {
    if (!productFormData.name || !productFormData.sku || !productFormData.quantity || !productFormData.category) {
      showSonner.error({
        title: t.missingInformation,
        description: t.fillAllFields
      })
      return
    }

    const newProduct: Product = {
      id: products.length + 1,
      name: productFormData.name,
      sku: productFormData.sku,
      quantity: parseInt(productFormData.quantity) || 0,
      category: categoryOptions.find(opt => opt.value === productFormData.category)?.label || productFormData.category,
      status: productFormData.status
    }

    setProducts(prev => [...prev, newProduct])

    showSonner.success({
      title: t.productAddedSuccess,
      description: t.productAddedDescription
    })

    setProductFormData({
      name: '',
      sku: '',
      quantity: '',
      category: '',
      status: 'in-inventory'
    })

    setProductDrawerOpen(false)
  }

  const handleCancelProduct = () => {
    setProductFormData({
      name: '',
      sku: '',
      quantity: '',
      category: '',
      status: 'in-inventory'
    })
    setProductDrawerOpen(false)
  }

  return (
    <>
      <ProductKanban
        products={products}
        onAddProduct={() => setProductDrawerOpen(true)}
      />

      <Drawer
        open={productDrawerOpen}
        onOpenChange={setProductDrawerOpen}
        title={t.addNewProduct}
        showFooter={true}
        footerVariant="cancelAndActions"
        cancelLabel={t.cancel}
        primaryLabel={t.saveProduct}
        onCancel={handleCancelProduct}
        onPrimary={handleSaveProduct}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--t-space-400)',
          }}
        >
          <TextInput
            label={t.productName}
            placeholder={t.enterProductName}
            value={productFormData.name}
            onChange={(e) => handleProductInputChange('name', e.target.value)}
            fullWidth
          />

          <TextInput
            label={t.sku}
            placeholder={t.enterSKU}
            value={productFormData.sku}
            onChange={(e) => handleProductInputChange('sku', e.target.value)}
            fullWidth
          />

          <TextInput
            label={t.quantity}
            type="number"
            placeholder={t.enterQuantity}
            value={productFormData.quantity}
            onChange={(e) => handleProductInputChange('quantity', e.target.value)}
            fullWidth
          />

          <Select
            label={t.category}
            placeholder={t.selectCategory}
            options={categoryOptions}
            value={productFormData.category}
            onValueChange={(value) => handleProductInputChange('category', value)}
            fullWidth
          />

          <Select
            label={t.status}
            placeholder={t.selectStatus}
            options={productStatusOptions}
            value={productFormData.status}
            onValueChange={(value) => handleProductInputChange('status', value as Product['status'])}
            fullWidth
          />
        </div>
      </Drawer>
    </>
  )
}
