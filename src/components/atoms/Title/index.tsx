import React from 'react';
import { Heading, HeadingProps } from '@chakra-ui/react';

interface IProps extends HeadingProps {
    children: React.ReactNode;
}

export default function Title({ children, ...props }: IProps) {
  return (
    <Heading
      color="black"
      as="h1"
      fontSize="20px"
      {...props}
    >
      {children}
    </Heading>
  );
}
