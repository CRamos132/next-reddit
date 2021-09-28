import { Story, Meta } from '@storybook/react';
import TestWrapper from '../TestWraper';
import Link from './index';

export default {
  title: 'atoms/Link',
  component: Link,
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <TestWrapper>
    <Link {...args}>
      Link
    </Link>
  </TestWrapper>
);

export const LinkStory = Template.bind({});
LinkStory.parameters = {
  controls: { hideNoControlsWarning: true },
};
LinkStory.args = {
  href: 'www.google.com',
};
