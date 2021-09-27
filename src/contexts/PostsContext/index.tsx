import { useRouter } from 'next/dist/client/router';
import {
  createContext, ReactNode, useContext, useMemo, useState,
} from 'react';
import { useToast } from '@chakra-ui/react';
import { useInfiniteQuery } from 'react-query';

interface Post {
    title: string;
    author: string;
    domain: string;
    url: string;
    thumbnail: string;
}

interface TPostsContext {
    search: string | string[],
    posts: Post[],
    fetchNextPage: () => void,
    refetch: () => void,
    error: boolean,
    isLoading: boolean,
    hasNextPage: boolean,
}

const PostsContext = createContext<TPostsContext>({
  error: false,
  fetchNextPage: () => null,
  isLoading: false,
  posts: [],
  refetch: () => null,
  search: '',
  hasNextPage: true,
});

function PostsProvider({ children }: {children: ReactNode}) {
  const [error, setError] = useState(false);
  const { query } = useRouter();
  const toast = useToast();

  const { param } = query;
  const search = param || 'hot';

  const {
    data,
    fetchNextPage,
    refetch,
    isLoading,
    isFetching,
    hasNextPage,
  } = useInfiniteQuery(
    search,
    async ({ pageParam = '' }) => fetch(`
        https://www.reddit.com/r/reactjs/${search}.json?after=${pageParam}
    `)
      .then((res) => {
        setError(false);
        return res.json();
      })
      .catch((err) => {
        throw new Error(err);
      }),
    {
      onError: () => {
        toast({
          title: 'Algo deu errado.',
          description: 'Por favor tente novamente mais tarde.',
          status: 'error',
          position: 'top',
          duration: 9000,
          isClosable: true,
        });
        setError(true);
      },
      getNextPageParam: (lastPage) => lastPage?.data.after,
    },
  );

  const nextPageAvailable = hasNextPage || false;

  const posts = useMemo(() => data?.pages.map((page) => page.data.children).flat() || [],
    [data]);

  const loading = isLoading || isFetching;

  return (
    <PostsContext.Provider value={{
      error,
      fetchNextPage,
      refetch,
      isLoading: loading,
      posts,
      search,
      hasNextPage: nextPageAvailable,
    }}
    >
      {children}
    </PostsContext.Provider>
  );
}

function usePosts() {
  const context = useContext(PostsContext);
  return context;
}

export { PostsProvider, usePosts };
