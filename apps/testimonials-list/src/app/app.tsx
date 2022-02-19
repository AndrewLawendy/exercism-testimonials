/** @jsxImportSource theme-ui */
import { ThemeProvider } from '@theme-ui/core';
import { Global, css } from '@emotion/react';
import { theme } from '@exercism-testimonials/@exercism-ui/theme';
import { QueryClient, QueryClientProvider } from 'react-query';

import '@fontsource/poppins';
import 'normalize.css';

import Main from '../pages';

export function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Global
          styles={css`
            html {
              box-sizing: border-box;
              font-family: 'Poppins';
              background-color: #fbfcfe;
            }

            html *,
            html *:before,
            html *:after {
              box-sizing: inherit;
            }

            ul {
              margin: 0;
              padding: 0;

              li {
                list-style-type: none;
              }
            }
          `}
        />

        <Main />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
