import type { NextPage } from 'next';
import { Box, Flex } from '@chakra-ui/react';
import { usePosts } from 'contexts/PostsContext';
import Header from 'components/atoms/Header';
import Button from 'components/atoms/Button';
import Post from 'components/molecules/Post';
import LoadingSection from 'components/organisms/LoadingSection';
import NavControl from 'components/molecules/NavControl';
import RefetchButton from 'components/atoms/RefetchButton';

const Home: NextPage = () => {
  const {
    posts, fetchNextPage, refetch, search, isLoading, hasNextPage, error,
  } = usePosts();

  return (
    <Box width="100%" paddingBottom="32px">
      <Header />
      <NavControl search={search} refetch={refetch} />
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
        {error && !isLoading && <RefetchButton onClick={refetch} />}
        <Button
          onClick={fetchNextPage}
          isDisabled={!hasNextPage}
          width="100%"
          isLoading={isLoading}
        >
          + Ver mais
        </Button>
      </Flex>
    </Box>
  );
};

export default Home;
