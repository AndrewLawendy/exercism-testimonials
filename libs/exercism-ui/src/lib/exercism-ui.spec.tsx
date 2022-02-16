import { render } from '@testing-library/react';

import ExercismUi from './exercism-ui';

describe('ExercismUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExercismUi />);
    expect(baseElement).toBeTruthy();
  });
});
