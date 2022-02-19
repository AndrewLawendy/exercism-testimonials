import { act, renderHook } from '@testing-library/react-hooks';
import useTestimonialsList from './use-testimonials-list';

describe('useTestimonialsList', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useTestimonialsList());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
