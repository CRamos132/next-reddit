import { Box } from '@chakra-ui/react';

interface IProps {
    text?: string;
}

export default function ErrorText({ text }: IProps) {
  return (
    <Box
      minHeight="100px"
      width="200px"
      backgroundColor="red.300"
      borderRadius="12px"
      padding="8px"
      textAlign="center"
      margin="12px auto"
    >
      {text}
    </Box>
  );
}
