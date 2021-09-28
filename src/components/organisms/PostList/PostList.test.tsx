import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import { Box } from '@chakra-ui/react';
import TestWrapper from '../../atoms/TestWraper';
import PostList from '.';
import { IPost } from '../../../contexts/PostsContext';

const setup = (posts: IPost[] = []) => {
  const utils = render(
    <TestWrapper>
      <Box data-testid="wrapper">
        <PostList posts={posts} />
      </Box>
    </TestWrapper>,
  );
  return {
    ...utils,
  };
};

const posts: IPost[] = [
  {
    data: {
      author: 'author 1',
      domain: 'self.reactjs',
      thumbnail: 'test.url',
      title: 'Test Post',
      url: 'www',
      id: '1',
      created: 0,
      permalink: '',
    },
  },
  {
    data: {
      author: 'author 2',
      domain: 'self.reactjs',
      thumbnail: 'test.url',
      title: 'Test Post 2',
      url: 'www',
      id: '2',
      created: 0,
      permalink: '',
    },
  },
  {
    data: {
      author: 'author 3',
      domain: 'self.reactjs',
      thumbnail: 'test.url',
      title: 'Test Post 3',
      url: 'www',
      id: '3',
      created: 0,
      permalink: '',
    },
  },
];

describe('The PostList component', () => {
  it('displays message when no posts are passed', () => {
    const { getByText } = setup();
    const component = getByText('Não encontramos posts para mostrar');
    expect(component).toBeInTheDocument();
  });
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
