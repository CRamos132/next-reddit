import { Flex, Skeleton } from '@chakra-ui/react';

export default function LoadingPost() {
  return (
    <Flex direction="row" borderTop="1px solid gray" paddingY="12px">
      <Skeleton
        borderRadius="16px"
        height="77px"
        width="77px"
        backgroundColor="gray.400"
      />
      <Flex
        direction="column"
        justifyContent="space-between"
        marginLeft="13px"
      >
        <Skeleton height="18px" width="500px" />
        <Skeleton height="18px" width="155px" />
        <Skeleton height="18px" width="85px" />
      </Flex>
    </Flex>
  );
}
