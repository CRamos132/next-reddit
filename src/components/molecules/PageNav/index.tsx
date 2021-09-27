import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import Button from '../../atoms/Button';

interface IProps {
    refetch: () => void;
    search: string | string[]
}

// hot, new, rising

export default function PageNav({ search, refetch }: IProps) {
  const { push } = useRouter();
  return (
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
          push('/hot');
          refetch();
        }}
      >
        Hot
      </Button>
      <Button
        colorScheme={search === 'new' ? 'primary' : 'gray'}
        onClick={() => {
          push('/new');
          refetch();
        }}
      >
        News
      </Button>
      <Button
        colorScheme={search === 'rising' ? 'primary' : 'gray'}
        onClick={() => {
          push('/rising');
          refetch();
        }}
      >
        Rising
      </Button>
    </Flex>
  );
}
