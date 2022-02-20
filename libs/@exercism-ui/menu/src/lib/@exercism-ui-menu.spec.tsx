import { render } from '@testing-library/react';

import { Menu } from './@exercism-ui-menu';

describe('ExercismUiMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Menu menuButton={<div></div>} />);
    expect(baseElement).toBeTruthy();
  });
});
