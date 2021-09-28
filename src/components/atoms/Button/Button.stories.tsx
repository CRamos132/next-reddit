import { Story, Meta } from '@storybook/react';
import TestWrapper from '../TestWraper';
import Button from './index';

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <TestWrapper>
    <Button
      {...args}
    >
      Button
    </Button>
  </TestWrapper>
);

export const ButtonStory = Template.bind({});
ButtonStory.parameters = {
  controls: { hideNoControlsWarning: true },
};
ButtonStory.args = {
  colorScheme: 'primary',
};
