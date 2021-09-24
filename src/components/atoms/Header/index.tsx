import { Flex, Box } from '@chakra-ui/react';

export default function Header() {
  return (
    <Flex
      as="header"
      width="100%"
      backgroundColor="#6324C6"
      height="91px"
      direction="row"
      justifyContent="center"
      alignItems="center"
      fontWeight="700"
      fontSize="36px"
      color="white"
    >
      REACT
      <Box color="orange.400">JS</Box>
    </Flex>
  );
}
