import { Story, Meta } from '@storybook/react';
import TestWrapper from '../../atoms/TestWraper';
import NavControl from './index';

export default {
  title: 'molecules/NavControl',
  component: NavControl,
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <TestWrapper>
    <NavControl refetch={() => {}} search="hot" {...args} />
  </TestWrapper>
);

export const NavControlStory = Template.bind({});
NavControlStory.parameters = {
  controls: { hideNoControlsWarning: true },
};
NavControlStory.args = {
  search: 'hot',
};
