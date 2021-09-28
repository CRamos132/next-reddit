import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import Button from '../../atoms/Button';

interface IProps {
    refetch: () => void;
    search: string | string[]
}

export default function NavControl({ search, refetch }: IProps) {
  const router = useRouter();
  const pushAndRefetch = (url: string) => {
    refetch();
    // eslint-disable-next-line no-unused-expressions
    router?.push(url);
  };
  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="space-evenly"
      width={['90%', '60%']}
      marginY="21px"
      marginX="auto"
    >
      <Button
        colorScheme={search === 'hot' ? 'primary' : 'brandGray'}
        onClick={() => {
          pushAndRefetch('/hot');
        }}
      >
        Hot
      </Button>
      <Button
        colorScheme={search === 'new' ? 'primary' : 'brandGray'}
        onClick={() => {
          pushAndRefetch('/new');
        }}
      >
        News
      </Button>
      <Button
        colorScheme={search === 'rising' ? 'primary' : 'brandGray'}
        onClick={() => {
          pushAndRefetch('/rising');
        }}
      >
        Rising
      </Button>
    </Flex>
  );
}
