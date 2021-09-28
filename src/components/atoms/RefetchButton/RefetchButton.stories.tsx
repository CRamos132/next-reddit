import { Story, Meta } from '@storybook/react';
import TestWrapper from '../TestWraper';
import RefetchButton from './index';

export default {
  title: 'atoms/RefetchButton',
  component: RefetchButton,
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <TestWrapper>
    <RefetchButton {...args} />
  </TestWrapper>
);

export const RefetchButtonStory = Template.bind({});
RefetchButtonStory.parameters = {
  controls: { hideNoControlsWarning: true },
};
RefetchButtonStory.args = {
};
