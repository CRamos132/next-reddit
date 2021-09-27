import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export default function Link({
  children,
  ...props
}: PropsWithChildren<ChakraLinkProps>) {
  return (
    <ChakraLink
      color="black"
      fontWeight="700"
      fontSize="16px"
      {...props}
    >
      {children}
    </ChakraLink>

  );
}
