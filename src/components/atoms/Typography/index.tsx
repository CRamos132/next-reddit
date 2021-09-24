import React from 'react';
import { Text, TextProps } from '@chakra-ui/react';

interface IProps extends TextProps {
    children: React.ReactNode
}

export default function Typography({ children, ...props }: IProps) {
  return (
    <Text color="gray.400" {...props}>
      {children}
    </Text>
  );
}
