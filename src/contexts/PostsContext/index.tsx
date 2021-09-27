import { useRouter } from 'next/dist/client/router';
import {
  useEffect, useState, createContext, ReactNode, useContext,
} from 'react';
import { useInfiniteQuery } from 'react-query';

interface Post {
    title: string;
    author: string;
    domain: string;
    url: string;
    thumbnail: string;
}

type TPostsContext = {
    search: string | string[],
    posts: Post[],
    fetchNextPage: () => void,
    refetch: () => void,
    error: unknown,
    isLoading: boolean,
}

const PostsContext = createContext<TPostsContext>({
  error: null,
  fetchNextPage: () => null,
  isLoading: false,
  posts: [],
  refetch: () => null,
  search: '',
});

function PostsProvider({ children }: {children: ReactNode}) {
  const { query } = useRouter();
  const [posts, setPosts] = useState<any[]>([]);

  const { param } = query;
  const search = param || 'hot';

  const {
    data,
    error,
    fetchNextPage,
    refetch,
    isLoading,
    isFetching,
  } = useInfiniteQuery(
    search,
    // eslint-disable-next-line max-len
    async ({ pageParam = '' }) => fetch(`https://www.reddit.com/r/reactjs/${search}.json?after=${pageParam}`)
      .then((res) => res.json()),
    {
      getNextPageParam: (lastPage) => lastPage.data.after ?? '',
    },
  );

  useEffect(() => {
    const array = data?.pages.map((page) => page.data.children).flat();
    setPosts(array as any[]);
  }, [data]);

  const loading = isLoading || isFetching;

  return (
    <PostsContext.Provider value={{
      error,
      fetchNextPage,
      refetch,
      isLoading: loading,
      posts,
      search,
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
