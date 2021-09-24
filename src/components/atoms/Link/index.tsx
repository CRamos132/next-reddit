import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

  type IProps = NextLinkProps & Omit<ChakraLinkProps, 'as'>

export default function Link({
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  children,
  ...props
}: IProps) {
  return (
    <NextLink
      as={as}
      href={href}
      passHref
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
    >
      <ChakraLink color="black" fontWeight="700" fontSize="16px" {...props}>
        {children}
      </ChakraLink>
    </NextLink>
  );
}
