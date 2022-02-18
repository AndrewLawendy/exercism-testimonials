import { render } from '@testing-library/react';

import ExercismUiButton from './@exercism-ui-button';

describe('ExercismUiButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExercismUiButton />);
    expect(baseElement).toBeTruthy();
  });
});
