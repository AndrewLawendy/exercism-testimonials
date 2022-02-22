import { act, renderHook } from '@testing-library/react-hooks';
import useTracksList from './use-tracks-list';

describe('useTracksList', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useTracksList());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
