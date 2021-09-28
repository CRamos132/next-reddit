import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import { Box } from '@chakra-ui/react';
import TestWrapper from '../../atoms/TestWraper';
import PostList from '.';
import { IPost } from '../../../contexts/PostsContext';
import posts from '../../../mocks/posts';

const setup = (postList: IPost[] = []) => {
  const utils = render(
    <TestWrapper>
      <Box data-testid="wrapper">
        <PostList posts={postList} />
      </Box>
    </TestWrapper>,
  );
  return {
    ...utils,
  };
};

describe('The PostList component', () => {
  it('displays correct amount of posts', () => {
    const { getAllByTestId } = setup(posts);
    const component = getAllByTestId('post');
    expect(component).toHaveLength(3);
  });
  it('displays the post information', () => {
    const { getByText } = setup(posts);
    const title = getByText('Test Post');
    const author = getByText('author 1');
    expect(title).toBeInTheDocument();
    expect(author).toBeInTheDocument();
  });
});
