import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary:
        {
          50: '#f2e7ff',
          100: '#d4bdf7',
          200: '#b592ed',
          300: '#9868e5',
          400: '#7b3ddc',
          500: '#6123c2',
          600: '#4c1a98',
          700: '#36136e',
          800: '#200a44',
          900: '#0d021c',
        },
    brandGray:
        {
          200: '#e9f3fd',
          300: '#d0d8e3',
          400: '#b5bdca',
          500: '#98a3b3',
          600: '#7c899d',
          700: '#636f83',
          800: '#4c5667',
          900: '#353e4a',
        },
  },
  fonts: {
    body: 'Mulish, sans-serif',
    text: 'Mulish, sans-serif',
    heading: 'Mulish, sans-serif',
  },
});

export default theme;
