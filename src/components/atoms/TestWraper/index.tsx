import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode } from 'react';

import theme from '../../../theme/index';

export default function TestWrapper({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  );
}
