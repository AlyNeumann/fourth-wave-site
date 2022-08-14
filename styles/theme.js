import {  extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    purple: {
      50: '#f1e0ff',
     100: '#e7daf2',
     200: '#d9cae6',
     300: '#cab6db',
     400: '#a08bb3',
     500: '#7d6c8c',
     600: '#61536e',
     700: '#3f3647',
    },
    // teal:  {
    //   50: '#ebf7f7',
    //  100: '#e4f7f7',
    //  200: '#d5f5f5',
    //  300: '#c6f7f7',
    //  400: '#aae6e6',
    //  500: '#93dbdb',
    //  600: '#60c4c4',
    //  700: '#3eabab',
    //  800: '#289e9e',
    //  900: '#128282'
    // },
  },
  initialColorMode: 'light', 
  useSystemColorMode: false,
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Josefin Sans', sans-serif`,
  },
})

export default theme;