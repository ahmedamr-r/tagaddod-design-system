// Translations for bilingual support (English/Arabic)

export interface Translations {
  // Navigation
  dashboard: string
  users: string
  customers: string
  products: string

  // User Management
  adminUsers: string
  addUser: string
  addNewUser: string
  saveUser: string
  cancel: string

  // Form Labels
  name: string
  phoneNumber: string
  email: string
  role: string
  status: string

  // Form Placeholders
  enterUserName: string
  enterPhoneNumber: string
  enterEmail: string
  selectUserRole: string
  selectStatus: string

  // Roles
  admin: string
  editor: string
  viewer: string

  // Status
  active: string
  inactive: string

  // Table Headers
  nameHeader: string
  phoneHeader: string
  emailHeader: string
  roleHeader: string
  statusHeader: string

  // Placeholders
  customersContent: string
  productsContent: string

  // Language Selector
  language: string
  languageLabel: string

  // Products Kanban
  addProduct: string
  addNewProduct: string
  saveProduct: string
  inInventory: string
  missing: string
  shipping: string
  productName: string
  quantity: string
  sku: string
  category: string
  enterProductName: string
  enterQuantity: string
  enterSKU: string
  selectCategory: string
  electronics: string
  furniture: string
  clothing: string
  food: string
  productInventory: string

  // Toast Notifications
  productAddedSuccess: string
  productAddedDescription: string
  missingInformation: string
  fillAllFields: string
}

export const translations: Record<'en' | 'ar', Translations> = {
  en: {
    // Navigation
    dashboard: 'Dashboard',
    users: 'Users',
    customers: 'Customers',
    products: 'Products',

    // User Management
    adminUsers: 'Admin Users',
    addUser: 'Add User',
    addNewUser: 'Add New User',
    saveUser: 'Save User',
    cancel: 'Cancel',

    // Form Labels
    name: 'Name',
    phoneNumber: 'Phone Number',
    email: 'Email',
    role: 'Role',
    status: 'Status',

    // Form Placeholders
    enterUserName: 'Enter user name',
    enterPhoneNumber: 'Enter phone number',
    enterEmail: 'Enter email address',
    selectUserRole: 'Select user role',
    selectStatus: 'Select status',

    // Roles
    admin: 'Admin',
    editor: 'Editor',
    viewer: 'Viewer',

    // Status
    active: 'Active',
    inactive: 'Inactive',

    // Table Headers
    nameHeader: 'Name',
    phoneHeader: 'Phone Number',
    emailHeader: 'Email',
    roleHeader: 'Role',
    statusHeader: 'Status',

    // Placeholders
    customersContent: 'Customer content will be added here.',
    productsContent: 'Products content will be added here.',

    // Language Selector
    language: 'Language',
    languageLabel: 'Select Language',

    // Products Kanban
    addProduct: 'Add Product',
    addNewProduct: 'Add New Product',
    saveProduct: 'Save Product',
    inInventory: 'In Inventory',
    missing: 'Missing',
    shipping: 'Shipping',
    productName: 'Product Name',
    quantity: 'Quantity',
    sku: 'SKU',
    category: 'Category',
    enterProductName: 'Enter product name',
    enterQuantity: 'Enter quantity',
    enterSKU: 'Enter SKU',
    selectCategory: 'Select category',
    electronics: 'Electronics',
    furniture: 'Furniture',
    clothing: 'Clothing',
    food: 'Food',
    productInventory: 'Product Inventory',

    // Toast Notifications
    productAddedSuccess: 'Product Added!',
    productAddedDescription: 'The product has been added successfully to the inventory.',
    missingInformation: 'Missing Information',
    fillAllFields: 'Please fill in all required fields.'
  },
  ar: {
    // Navigation
    dashboard: 'لوحة التحكم',
    users: 'المستخدمون',
    customers: 'العملاء',
    products: 'المنتجات',

    // User Management
    adminUsers: 'المستخدمون الإداريون',
    addUser: 'إضافة مستخدم',
    addNewUser: 'إضافة مستخدم جديد',
    saveUser: 'حفظ المستخدم',
    cancel: 'إلغاء',

    // Form Labels
    name: 'الاسم',
    phoneNumber: 'رقم الهاتف',
    email: 'البريد الإلكتروني',
    role: 'الدور',
    status: 'الحالة',

    // Form Placeholders
    enterUserName: 'أدخل اسم المستخدم',
    enterPhoneNumber: 'أدخل رقم الهاتف',
    enterEmail: 'أدخل البريد الإلكتروني',
    selectUserRole: 'اختر دور المستخدم',
    selectStatus: 'اختر الحالة',

    // Roles
    admin: 'مدير',
    editor: 'محرر',
    viewer: 'مشاهد',

    // Status
    active: 'نشط',
    inactive: 'غير نشط',

    // Table Headers
    nameHeader: 'الاسم',
    phoneHeader: 'رقم الهاتف',
    emailHeader: 'البريد الإلكتروني',
    roleHeader: 'الدور',
    statusHeader: 'الحالة',

    // Placeholders
    customersContent: 'سيتم إضافة محتوى العملاء هنا.',
    productsContent: 'سيتم إضافة محتوى المنتجات هنا.',

    // Language Selector
    language: 'اللغة',
    languageLabel: 'اختر اللغة',

    // Products Kanban
    addProduct: 'إضافة منتج',
    addNewProduct: 'إضافة منتج جديد',
    saveProduct: 'حفظ المنتج',
    inInventory: 'في المخزون',
    missing: 'مفقود',
    shipping: 'قيد الشحن',
    productName: 'اسم المنتج',
    quantity: 'الكمية',
    sku: 'رمز التخزين',
    category: 'الفئة',
    enterProductName: 'أدخل اسم المنتج',
    enterQuantity: 'أدخل الكمية',
    enterSKU: 'أدخل رمز التخزين',
    selectCategory: 'اختر الفئة',
    electronics: 'إلكترونيات',
    furniture: 'أثاث',
    clothing: 'ملابس',
    food: 'أطعمة',
    productInventory: 'مخزون المنتجات',

    // Toast Notifications
    productAddedSuccess: 'تمت إضافة المنتج!',
    productAddedDescription: 'تم إضافة المنتج بنجاح إلى المخزون.',
    missingInformation: 'معلومات ناقصة',
    fillAllFields: 'يرجى ملء جميع الحقول المطلوبة.'
  }
}

// Helper function to get translations based on locale
export function getTranslations(locale: 'en' | 'ar'): Translations {
  return translations[locale]
}
