import { Box, Flex } from '@chakra-ui/react';
import Link from '../../atoms/Link';
import Title from '../../atoms/Title';
import Typography from '../../atoms/Typography';

interface IProps {
    title: string;
    author: string;
    domain: string;
}

export default function Post({ author, title, domain }: IProps) {
  return (
    <Flex direction="row" borderTop="1px solid gray" paddingY="12px">
      <Box
        borderRadius="16px"
        height="77px"
        width="77px"
        backgroundColor="gray.400"
      />
      <Flex
        direction="column"
        justifyContent="space-between"
        marginLeft="13px"
      >
        <Title
          textOverflow="ellipsis"
          overflow="hidden"
          whiteSpace="nowrap"
          maxW={['60vw', '60vw', '80vw']}
          title={title}
        >
          {title}

        </Title>
        <Typography color="#4C5667">
          Criado por
          {' '}
          {author}
        </Typography>
        <Link href="/">{domain}</Link>
      </Flex>
    </Flex>
  );
}
