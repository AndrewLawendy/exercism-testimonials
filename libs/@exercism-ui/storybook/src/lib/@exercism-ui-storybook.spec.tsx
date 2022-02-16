import { render } from '@testing-library/react';

import ExercismUiStorybook from './@exercism-ui-storybook';

describe('ExercismUiStorybook', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExercismUiStorybook />);
    expect(baseElement).toBeTruthy();
  });
});
