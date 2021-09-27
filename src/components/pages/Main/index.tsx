import type { NextPage } from 'next';
import { Box, Flex } from '@chakra-ui/react';
import { usePosts } from 'contexts/PostsContext';
import Header from 'components/atoms/Header';
import Button from 'components/atoms/Button';
import Post from 'components/molecules/Post';
import LoadingSection from 'components/organisms/LoadingSection';
import PageNav from 'components/molecules/PageNav';

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
            key={data.id}
            image={data.thumbnail}
            postLink={data.permalink}
            date={data.created}
            {...data}
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
