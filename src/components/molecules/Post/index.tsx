import { Box, Flex } from '@chakra-ui/react';
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
function timeDiffCalc(date: number) {
  const dateFuture = new Date(date);
  const dateNow = new Date();
  let diffInMilliSeconds = Math.abs(dateFuture.getTime() - dateNow.getTime()) / 1000;

  // calculate days
  const days = Math.floor(diffInMilliSeconds / 86400);
  diffInMilliSeconds -= days * 86400;

  // calculate hours
  const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
  diffInMilliSeconds -= hours * 3600;

  // calculate minutes
  const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
  diffInMilliSeconds -= minutes * 60;
  if (days > 0) {
    return (days === 1) ? `${days} dia` : `${days} dias`;
  }
  if (hours > 0) {
    return (hours === 0 || hours === 1) ? `${hours} hora` : `${hours} horas`;
  }

  return (minutes === 0 || hours === 1) ? `${minutes} minuto` : `${minutes} minutos`;
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
          {timeDiffCalc(date * 1000)}
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
