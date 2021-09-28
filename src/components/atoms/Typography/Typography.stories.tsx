import { Story, Meta } from '@storybook/react';
import TestWrapper from '../TestWraper';
import Typography from './index';

export default {
  title: 'atoms/Typography',
  component: Typography,
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <TestWrapper>
    <Typography {...args}>
      Title
    </Typography>
  </TestWrapper>
);

export const TypographyStory = Template.bind({});
TypographyStory.parameters = {
  controls: { hideNoControlsWarning: true },
};
TypographyStory.args = {
};
