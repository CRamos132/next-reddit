import { Story, Meta } from '@storybook/react';
import TestWrapper from '../TestWraper';
import Title from './index';

export default {
  title: 'atoms/Title',
  component: Title,
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <TestWrapper>
    <Title to="www.google.com" {...args}>
      Title
    </Title>
  </TestWrapper>
);

export const TitleStory = Template.bind({});
TitleStory.parameters = {
  controls: { hideNoControlsWarning: true },
};
TitleStory.args = {
  to: 'www.google.com',
};
