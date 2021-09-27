import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import Button from '.';
import TestWrapper from '../TestWraper';

const mockFunction = jest.fn((x) => x);

const setup = () => {
  const utils = render(
    <TestWrapper>
      <Button onClick={mockFunction}>
        Test
      </Button>
    </TestWrapper>,
  );
  return {
    ...utils,
  };
};

describe('The button component', () => {
  it('renders the component', () => {
    const { getByRole } = setup();
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });
  it('displays the label text', () => {
    const { getByText } = setup();
    const button = getByText('Test');
    expect(button).toBeInTheDocument();
  });
  it('calls the function passed', () => {
    const { getByText } = setup();
    const button = getByText('Test');
    button.click();
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
