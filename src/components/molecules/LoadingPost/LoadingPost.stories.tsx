import { Story, Meta } from '@storybook/react';
import TestWrapper from '../../atoms/TestWraper';
import LoadingPost from './index';

export default {
  title: 'molecules/LoadingPost',
  component: LoadingPost,
  argTypes: {},
} as Meta;

const Template: Story = () => (
  <TestWrapper>
    <LoadingPost />
  </TestWrapper>
);

export const LoadingPostStory = Template.bind({});
LoadingPostStory.parameters = {
  controls: { hideNoControlsWarning: true },
};
LoadingPostStory.args = {
};
