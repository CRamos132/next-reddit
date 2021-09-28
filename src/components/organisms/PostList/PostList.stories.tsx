import { Story, Meta } from '@storybook/react';
import posts from '../../../mocks/posts';
import TestWrapper from '../../atoms/TestWraper';
import PostList from './index';

export default {
  title: 'organisms/PostList',
  component: PostList,
  argTypes: {},
} as Meta;

const Template: Story = () => (
  <TestWrapper>
    <PostList posts={posts} />
  </TestWrapper>
);

export const PostListStory = Template.bind({});
PostListStory.parameters = {
  controls: { hideNoControlsWarning: true },
};
PostListStory.args = {
};
