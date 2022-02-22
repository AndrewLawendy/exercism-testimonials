import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@theme-ui/core';
import { theme } from '@exercism-testimonials/@exercism-ui/theme';

import Testimonials from './testimonials';

describe('Testimonials', () => {
  const queryClient = new QueryClient();

  it('should render successfully', () => {
    const { baseElement } = render(<Testimonials />, {
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
