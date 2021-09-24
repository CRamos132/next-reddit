import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { Box, Flex } from '@chakra-ui/react';
import Button from '../components/atoms/Button';
import TopNav from '../components/atoms/Header';
import Post from '../components/molecules/Post';

const Home: NextPage = () => {
  const [search, setSearch] = useState('hot');
  const [last, setLast] = useState('');
  const [posts, setPosts] = useState<any[]>([]);
  // eslint-disable-next-line max-len
  const busca = async () => fetch(`https://www.reddit.com/r/reactjs/${search}.json`)
    .then((res) => res.json())
    .then((data) => data);
  useEffect(() => {
    busca().then((data) => {
      setLast(data.data.after);
      setPosts(data.data.children);
    });
  }, [search]);
  const loadMore = async () => {
    // eslint-disable-next-line max-len
    const newPosts = await fetch(`https://www.reddit.com/r/reactjs/${search}.json?after=${last}`)
      .then((res) => res.json())
      .then((data) => data);
    const appendedPosts = [...posts, ...newPosts.data.children];
    setPosts(appendedPosts);
  };
  return (
    <Box width="100%">
      <TopNav />
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
        width="60%"
        marginY="21px"
        marginX="auto"
      >
        <Button
          colorScheme={search === 'hot' ? 'primary' : 'gray'}
          onClick={() => { setSearch('hot'); }}
        >
          Hot
        </Button>
        <Button
          colorScheme={search === 'new' ? 'primary' : 'gray'}
          onClick={() => { setSearch('new'); }}
        >
          News
        </Button>
        <Button
          colorScheme={search === 'top' ? 'primary' : 'gray'}
          onClick={() => { setSearch('top'); }}
        >
          Rising
        </Button>
      </Flex>
      <Flex width="90%" direction="column" margin="auto">
        {posts.map(({ data }: any) => (
          <Post
            title={data.title}
            author={data.author}
            domain={data.domain}
          />
        ))}
        <Button onClick={loadMore} width="100%">
          Busca
        </Button>
      </Flex>
    </Box>
  );
};

export default Home;
