import { act, renderHook } from '@testing-library/react-hooks';
import useFilters from './use-filters';
import { MemoryRouter } from 'react-router-dom';

import { TestimonialsListParams } from '../../resources/use-testimonials-list/use-testimonials-list';

describe('useFilters', () => {
  it('should render successfully', () => {
    const { result } = renderHook(
      () => useFilters<TestimonialsListParams>({ page: 1 }),
      {
        wrapper: MemoryRouter,
      }
    );

    expect(result.current.filters.page).toBe(1);
    expect(result.current.filtersString).toBe('page=1');

    act(() => {
      result.current.updateFilters({ order: 'newest_first' });
    });

    expect(result.current.filters.page).toBe(1);
    expect(result.current.filters.order).toBe('newest_first');
    expect(result.current.filtersString).toBe('order=newest_first&page=1');
  });
});
