import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IProps extends ButtonProps {
    children?: ReactNode
}

export default function Button({ children, ...props }: IProps) {
  return (
    <ChakraButton
      colorScheme="primary"
      width="202px"
      {...props}
    >
      {children}
    </ChakraButton>
  );
}
