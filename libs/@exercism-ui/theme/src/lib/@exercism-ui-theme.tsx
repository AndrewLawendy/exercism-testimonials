import { useThemeUI, ThemeUIContextValue } from 'theme-ui';

/* eslint-disable-next-line */
export interface ExactContextValue extends Omit<ThemeUIContextValue, 'theme'> {
  theme: typeof theme;
}

const theme = {
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

    'dark-text-label': '#F0F3F9',
    'dark-text-label-tertiary': '#6A6781',

    background: '#E5E5E5',
    'background-light': '#FBFCFE',

    'alert-light': '#D85050',

    'divider-light': '#E0E0ED',

    border: '#C8D5EF',
  },
  shadows: {
    large: '0px 4px 42px rgba(79, 114, 205, 0.15)',
  },
};

export const useTheme = useThemeUI as () => ExactContextValue;

export default theme;
