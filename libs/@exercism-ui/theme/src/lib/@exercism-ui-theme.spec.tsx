import { render } from '@testing-library/react';

import ExercismUiTheme from './@exercism-ui-theme';

describe('ExercismUiTheme', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExercismUiTheme />);
    expect(baseElement).toBeTruthy();
  });
});
