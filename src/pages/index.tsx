import type { NextPage } from 'next';
import { Box, Flex } from '@chakra-ui/react';
import Button from '../components/atoms/Button';
import TopNav from '../components/atoms/Header';
import Post from '../components/molecules/Post';
import usePosts from '../hooks/usePosts';
import LoadingSection from '../components/organisms/LoadingSection';

const Home: NextPage = () => {
  const {
    posts, fetchNextPage, refetch, setSearch, search, isLoading,
  } = usePosts();

  return (
    <Box width="100%">
      <TopNav />
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
        width={['80%', '60%']}
        marginY="21px"
        marginX="auto"
      >
        <Button
          colorScheme={search === 'hot' ? 'primary' : 'gray'}
          onClick={() => {
            setSearch('hot');
            refetch();
          }}
        >
          Hot
        </Button>
        <Button
          colorScheme={search === 'new' ? 'primary' : 'gray'}
          onClick={() => {
            setSearch('new');
            refetch();
          }}
        >
          News
        </Button>
        <Button
          colorScheme={search === 'top' ? 'primary' : 'gray'}
          onClick={() => {
            setSearch('top');
            refetch();
          }}
        >
          Rising
        </Button>
      </Flex>
      <Flex width="90%" direction="column" margin="auto">
        {isLoading && <LoadingSection />}
        {posts?.map(({ data }: any) => (
          <Post
            title={data.title}
            author={data.author}
            domain={data.domain}
          />
        ))}
        <Button
          onClick={() => {
            fetchNextPage();
          }}
          width="100%"
        >
          Busca
        </Button>
      </Flex>
    </Box>
  );
};

export default Home;
