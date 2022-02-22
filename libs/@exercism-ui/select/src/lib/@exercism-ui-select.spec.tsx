import { render } from '@testing-library/react';

import { Select } from './@exercism-ui-select';

describe('ExercismUiSelect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Select />);
    expect(baseElement).toBeTruthy();
  });
});
