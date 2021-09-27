import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import theme from '../theme';
import { PostsProvider } from '../contexts/PostsContext';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <PostsProvider>
          <Component {...pageProps} />
        </PostsProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
export default MyApp;
