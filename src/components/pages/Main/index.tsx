import type { NextPage } from 'next';
import { Box, Flex } from '@chakra-ui/react';
import { usePosts } from '../../../contexts/PostsContext';
import Header from '../../atoms/Header';
import Button from '../../atoms/Button';
import Post from '../../molecules/Post';
import LoadingSection from '../../organisms/LoadingSection';
import PageNav from '../../molecules/PageNav';

const Home: NextPage = () => {
  const {
    posts, fetchNextPage, refetch, search, isLoading,
  } = usePosts();

  return (
    <Box width="100%" paddingBottom="32px">
      <Header />
      <PageNav search={search} refetch={refetch} />
      <Flex width="90%" direction="column" margin="auto">
        {posts?.map(({ data }: any) => (
          <Post
            title={data.title}
            author={data.author}
            domain={data.domain}
            url={data.url}
            image={data.thumbnail}
            date={data.created}
            postLink={data.permalink}
          />
        ))}
        {isLoading && <LoadingSection />}
        <Button
          onClick={() => {
            fetchNextPage();
          }}
          width="100%"
          isLoading={isLoading}
        >
          Busca
        </Button>
      </Flex>
    </Box>
  );
};

export default Home;
