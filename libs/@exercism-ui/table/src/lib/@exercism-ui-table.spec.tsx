import { render } from '@testing-library/react';

import TableWrapperApp from './@exercism-ui-table-wrapper';

describe('ExercismUiTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TableWrapperApp />);
    expect(baseElement).toBeTruthy();
  });
});
