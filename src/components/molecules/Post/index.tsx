import { Box, Flex } from '@chakra-ui/react';
import getTimeDifference from '../../../helpers/getTimeDifference';
import Link from '../../atoms/Link';
import Title from '../../atoms/Title';
import Typography from '../../atoms/Typography';

interface IProps {
    title: string;
    author: string;
    domain: string;
    url: string;
    image?: string;
    date: number;
    postLink: string;
}

export default function Post({
  author, title, domain, url, image, date, postLink,
}: IProps) {
  return (
    <Flex direction="row" borderTop="1px solid gray" paddingY="12px">
      <Box
        borderRadius="16px"
        height="77px"
        width="77px"
        backgroundColor="gray.400"
        backgroundImage={image}
        backgroundSize="contain"
      />
      <Flex
        direction="column"
        justifyContent="space-between"
        marginLeft="13px"
      >
        <Title to={`https://www.reddit.com/${postLink}`}>
          {title}
        </Title>
        <Typography color="#4C5667">
          enviado há
          {' '}
          {getTimeDifference(date * 1000)}
          {' '}
          por
          {' '}
          <Link
            href={`https://www.reddit.com/user/${author}/`}
            target="_blank"
            fontWeight="normal"
            color="primary.500"
          >
            {author}

          </Link>
        </Typography>
        {domain === 'self.reactjs' ? (
          <Link
            href={url}
            target="_blank"
          >
            r/reactjs

          </Link>
        ) : (
          <Link
            href={url}
            target="_blank"
          >
            {domain}

          </Link>
        )}
      </Flex>
    </Flex>
  );
}
