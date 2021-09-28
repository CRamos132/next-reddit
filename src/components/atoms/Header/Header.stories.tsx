import { Story, Meta } from '@storybook/react';
import TestWrapper from '../TestWraper';
import Header from './index';

export default {
  title: 'atoms/Button',
  component: Header,
  argTypes: {},
} as Meta;

const Template: Story = () => (
  <TestWrapper>
    <Header />
  </TestWrapper>
);

export const HeaderStory = Template.bind({});
HeaderStory.parameters = {
  controls: { hideNoControlsWarning: true },
};
HeaderStory.args = {

};
