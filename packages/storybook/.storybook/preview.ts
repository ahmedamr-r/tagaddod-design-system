import React from 'react';
import { ThemeProvider } from '@tagaddod/react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
// Import tokens CSS globally
import '@tagaddod/tokens/dist/css/tokens.css';
// Import theme-specific CSS
import '@tagaddod/themes/dist/css/themes.css';

const rtlDecorator = (Story: any, context: any) => {
  const { locale } = context.globals;
  
  React.useEffect(() => {
    // Change language
    i18n.changeLanguage(locale);
    
    // Set RTL direction for Arabic
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = locale;
    
    // Add RTL/LTR class for styling hooks
    document.documentElement.classList.remove('rtl', 'ltr');
    document.documentElement.classList.add(locale === 'ar' ? 'rtl' : 'ltr');
  }, [locale]);
  
  return React.createElement(Story);
};

export const decorators = [
  rtlDecorator,
  (Story: any, ctx: any) => {
    return React.createElement(ThemeProvider, { name: ctx.globals.brand },
      React.createElement(I18nextProvider, { i18n },
        React.createElement(Story)
      )
    );
  }
];

export const globalTypes = {
  brand: {
    name: 'Brand',
    description: 'Global brand for components',
    defaultValue: 'tagaddod',
    toolbar: { 
      icon: 'paintbrush',
      items: ['tagaddod', 'greenpan'],
      showName: true,
      title: 'Brand'
    }
  },
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: { 
      icon: 'globe',
      items: [
        { value: 'en', title: 'English', right: '🇺🇸' }, 
        { value: 'ar', title: 'العربية', right: '🇪🇬' }
      ],
      showName: true,
      title: 'Locale'
    }
  }
};

export const initialGlobals = {
  brand: 'tagaddod',
  locale: 'en'
};
