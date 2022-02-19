import { useThemeUI, ThemeUIContextValue } from 'theme-ui';

/* eslint-disable-next-line */
export interface ExactContextValue extends Omit<ThemeUIContextValue, 'theme'> {
  theme: typeof theme;
}

export const theme = {
  space: {
    'spacing-xxs': '4px',
    'spacing-xs': '8px',
    'spacing-s': '16px',
    'spacing-m': '24px',
    'spacing-l': '32px',
    'spacing-xl': '48px',
    'spacing-xxl': '64px',
    'spacing-xxxl': '80px',
    'spacing-xxxxl': '96px',
  },
  colors: {
    'light-text': '#3F3A5A',
    'light-label': '#130B43',
    'light-label-secondary': '#5C5589',
    'light-label-tertiary': '#76709F',
    'light-highlight': '#E1EBFF',

    'dark-text-label': '#F0F3F9',
    'dark-text-label-tertiary': '#6A6781',

    'stroke-19': '#EAECF3',
    'stroke-border-light': '#D5D8E4',
    'stroke-light-blue': '#2E57E8',

    'active-input-glow': 'rgba(46, 87, 232, 0.25)',

    background: '#E5E5E5',
    'background-light': '#FBFCFE',

    'alert-light': '#D85050',

    'divider-light': '#E0E0ED',

    border: '#C8D5EF',

    'table-hover': '#F4F7FD',
  },
  shadows: {
    large: '0px 4px 42px rgba(79, 114, 205, 0.15)',
    notification: '0px 4px 24px rgba(156, 130, 38, 0.4)',
  },

  fontWeights: {
    bold: 700,
    'medium-bold': 600,
    medium: 500,
    regular: 400,
    light: 300,
  },

  text: {
    h2: {
      fontSize: '1.95rem',
      fontWeight: 'bold',
      lineHeight: '2.695rem',
    },
    'p-large': {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
    'p-medium': {
      fontSize: '0.938rem',
      lineHeight: '1.594rem',
    },
    'p-small': {
      fontSize: '0.875rem',
      lineHeight: '1.313rem',
    },
  },
};

export const useTheme = useThemeUI as () => ExactContextValue;
