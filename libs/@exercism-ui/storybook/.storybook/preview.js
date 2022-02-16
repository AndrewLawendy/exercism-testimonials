import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@theme-ui/core';
import theme from '../../theme/src/lib/@exercism-ui-theme';

addDecorator((Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
));
