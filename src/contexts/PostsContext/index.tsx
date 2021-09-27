import { useRouter } from 'next/dist/client/router';
import {
  createContext, ReactNode, useContext, useMemo,
} from 'react';
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
    error: unknown,
    isLoading: boolean,
    hasNextPage: boolean,
}

const PostsContext = createContext<TPostsContext>({
  error: null,
  fetchNextPage: () => null,
  isLoading: false,
  posts: [],
  refetch: () => null,
  search: '',
  hasNextPage: true,
});

function PostsProvider({ children }: {children: ReactNode}) {
  const { query } = useRouter();

  const { param } = query;
  const search = param || 'hot';

  const {
    data,
    error,
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
      .then((res) => res.json()),
    {
      getNextPageParam: (lastPage) => lastPage.data.after,
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
