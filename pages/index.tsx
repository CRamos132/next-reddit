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
      <Flex direction="row" alignItems="center" justifyContent="space-evenly" width="60%" marginY="21px" marginX="auto">
        <Button onClick={busca}>Busca</Button>
        <Button onClick={busca}>Busca</Button>
        <Button onClick={busca}>Busca</Button>
      </Flex>
      <Flex width="90%" direction="column" margin="auto">
        <Flex direction="row" borderTop="1px solid gray" paddingY="12px">
          <Box borderRadius="16px" height="77px" width="77px" backgroundColor="gray.400" />
          <Flex direction="column" justifyContent="space-between" marginLeft="13px">
            <Box>Titulo</Box>
            <Box>Data</Box>
            <Box>Dominio</Box>
          </Flex>
        </Flex>
        <Button onClick={busca}>Busca</Button>
      </Flex>
    </Box>
  );
};

export default Home;
