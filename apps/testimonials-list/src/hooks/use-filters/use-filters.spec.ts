import { act, renderHook } from '@testing-library/react-hooks';
import useFilters from './use-filters';

describe('useFilters', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useFilters());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
