import { render } from '@testing-library/react';

import ExercismUiIcons from './@exercism-ui-icons';

describe('ExercismUiIcons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExercismUiIcons />);
    expect(baseElement).toBeTruthy();
  });
});
