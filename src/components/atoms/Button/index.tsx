import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export default function Button({ children, ...props }: PropsWithChildren<ButtonProps>) {
  return (
    <ChakraButton
      colorScheme="primary"
      width="202px"
      maxWidth="25vw"
      {...props}
    >
      {children}
    </ChakraButton>
  );
}
