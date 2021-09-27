import { ButtonProps, Box } from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';
import Button from '../Button';

export default function RefetchButton({ ...props }: ButtonProps) {
  return (
    <Box margin="22px auto">
      <Button colorScheme="gray" {...props} leftIcon={<RepeatIcon />}>
        Tentar novamente
      </Button>
    </Box>
  );
}
