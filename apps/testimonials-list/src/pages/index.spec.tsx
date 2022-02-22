import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@theme-ui/core';
import { theme } from '@exercism-testimonials/@exercism-ui/theme';

import Main from './index';

describe('Index', () => {
  const queryClient = new QueryClient();

  it('should render successfully', () => {
    const { baseElement } = render(<Main />, {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <MemoryRouter>{children}</MemoryRouter>
          </QueryClientProvider>
        </ThemeProvider>
      ),
    });
    expect(baseElement).toBeTruthy();
  });
});
