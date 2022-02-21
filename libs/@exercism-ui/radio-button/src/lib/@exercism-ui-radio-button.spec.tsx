import { render } from '@testing-library/react';

import ExercismUiRadioButton from './@exercism-ui-radio-button';

describe('ExercismUiRadioButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExercismUiRadioButton />);
    expect(baseElement).toBeTruthy();
  });
});
