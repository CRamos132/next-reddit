import React, { PropsWithChildren } from 'react';
import { Text, TextProps } from '@chakra-ui/react';

export default function Typography({ children, ...props }: PropsWithChildren<TextProps>) {
  return (
    <Text color="gray.400" {...props}>
      {children}
    </Text>
  );
}
