import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import NavControl from '.';
import TestWrapper from '../../atoms/TestWraper';

const mockFunction = jest.fn(() => null);

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '',
      pathname: '',
      query: '',
      asPath: '',
      push: () => null,
    };
  },
}));

const setup = () => {
  const utils = render(
    <TestWrapper>
      <NavControl refetch={mockFunction} search="hot" />
    </TestWrapper>,
  );
  return {
    ...utils,
  };
};

describe('The NavControl component', () => {
  it('renders', () => {
    const { getByText } = setup();
    const button1 = getByText('Hot');
    const button2 = getByText('News');
    const button3 = getByText('Rising');
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
    expect(button3).toBeInTheDocument();
  });
});
