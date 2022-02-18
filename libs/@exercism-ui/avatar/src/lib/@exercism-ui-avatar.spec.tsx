import { render } from '@testing-library/react';

import ExercismUiAvatar from './@exercism-ui-avatar';

describe('ExercismUiAvatar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExercismUiAvatar />);
    expect(baseElement).toBeTruthy();
  });
});
