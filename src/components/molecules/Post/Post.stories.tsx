import { Story, Meta } from '@storybook/react';
import TestWrapper from '../../atoms/TestWraper';
import Post from './index';

export default {
  title: 'molecules/Post',
  component: Post,
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <TestWrapper>
    <Post
      author="Test author"
      postLink=""
      image=""
      date={0}
      domain=""
      title=""
      url=""
      {...args}
    />
  </TestWrapper>
);

export const PostStory = Template.bind({});
PostStory.parameters = {
  controls: { hideNoControlsWarning: true },
};
PostStory.args = {
  author: 'Test author',
  postLink: '',
  image: '',
  date: 0,
  domain: 'www.google.com',
  title: 'Post Title',
  url: 'www.google.com',
};
