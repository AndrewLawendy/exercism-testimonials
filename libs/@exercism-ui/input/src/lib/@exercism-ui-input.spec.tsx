import { render } from '@testing-library/react';

import ExercismUiInput from './@exercism-ui-input';

describe('ExercismUiInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExercismUiInput />);
    expect(baseElement).toBeTruthy();
  });
});
