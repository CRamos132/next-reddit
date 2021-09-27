import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Head from 'next/head';
import theme from '../theme';
import { PostsProvider } from '../contexts/PostsContext';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <PostsProvider>
          <Head>
            <title>Next Reddit</title>
          </Head>
          <Component {...pageProps} />
        </PostsProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
export default MyApp;
