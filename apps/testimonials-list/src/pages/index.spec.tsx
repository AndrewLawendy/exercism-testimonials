import { render } from '@testing-library/react';

import Main from './index';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Main />);
    expect(baseElement).toBeTruthy();
  });
});
