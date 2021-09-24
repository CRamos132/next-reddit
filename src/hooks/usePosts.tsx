/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useInfiniteQuery } from 'react-query';

export default function usePosts() {
  const [search, setSearch] = useState('hot');
  const [posts, setPosts] = useState<any[]>([]);
  const {
    data,
    error,
    fetchNextPage,
    refetch,
    isLoading,
  } = useInfiniteQuery(
    search,
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

  return {
    setSearch,
    posts,
    search,
    fetchNextPage,
    refetch,
    error,
    isLoading,
  };
}
