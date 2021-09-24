import { Box, Flex, Button } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const busca = () => {
    fetch('https://www.reddit.com/r/javascript/hot.json')
      .then((res) => res.json());
  };
  return (
    <Box width="100%">
      <Flex width="100%" backgroundColor="#6324C6" height="91px" direction="row" justifyContent="center" alignItems="center">REACTJS</Flex>
      <Button onClick={busca}>Busca</Button>
    </Box>
  );
};

export default Home;
