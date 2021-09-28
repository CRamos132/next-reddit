import { Story, Meta } from '@storybook/react';
import TestWrapper from '../../atoms/TestWraper';
import LoadingSection from './index';

export default {
  title: 'organisms/LoadingSection',
  component: LoadingSection,
  argTypes: {},
} as Meta;

const Template: Story = () => (
  <TestWrapper>
    <LoadingSection />
  </TestWrapper>
);

export const LoadingSectionStory = Template.bind({});
LoadingSectionStory.parameters = {
  controls: { hideNoControlsWarning: true },
};
LoadingSectionStory.args = {
};
