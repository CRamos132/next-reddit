import { Box } from '@chakra-ui/react';
import { IPost } from '../../../contexts/PostsContext';
import Post from '../../molecules/Post';

interface IProps {
    posts: IPost[]
}

export default function PostList({ posts }: IProps) {
  if (!posts.length) {
    return (
      <>
        <Box
          width="200px"
          height="100px"
          borderRadius="12px"
          padding="24px"
          backgroundColor="gray.300"
          textAlign="center"
          margin="21px auto"
        >
          Não encontramos posts para mostrar
        </Box>
      </>
    );
  }
  return (
    <>
      {posts?.map(({ data }) => (
        <Post
          key={data.id}
          image={data.thumbnail}
          postLink={data.permalink}
          date={data.created}
          {...data}
        />
      ))}
    </>
  );
}
