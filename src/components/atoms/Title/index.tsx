import React from 'react';
import Link from '../Link';

interface IProps {
    children: React.ReactNode;
    to: string;
}

export default function Title({ children, to }: IProps) {
  return (
    <Link
      href={to}
      color="black"
      fontSize="20px"
      target="_blank"
      textOverflow="ellipsis"
      overflow="hidden"
      whiteSpace="nowrap"
      maxW={['60vw', '60vw', '80vw']}
    >
      {children}

    </Link>
  );
}
