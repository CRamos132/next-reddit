import { ReactNode } from 'react';
import Link from 'components/atoms/Link';

interface IProps {
    children: ReactNode;
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
