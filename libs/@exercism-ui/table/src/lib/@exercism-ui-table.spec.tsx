import { render } from '@testing-library/react';

import ExercismUiTable from './@exercism-ui-table';

describe('ExercismUiTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExercismUiTable />);
    expect(baseElement).toBeTruthy();
  });
});
