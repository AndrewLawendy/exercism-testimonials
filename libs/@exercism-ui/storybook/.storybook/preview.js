import { addDecorator } from '@storybook/react';
import { Global, css } from '@emotion/react';
import { ThemeProvider } from '@theme-ui/core';
import { theme } from '@exercism-testimonials/@exercism-ui/theme';

import '@fontsource/poppins';

addDecorator((Story) => (
  <ThemeProvider theme={theme}>
    <Global
      styles={css`
        html {
          box-sizing: border-box;
          font-family: 'Poppins';
        }

        html *,
        html *:before,
        html *:after {
          box-sizing: inherit;
        }
      `}
    />
    <Story />
  </ThemeProvider>
));
