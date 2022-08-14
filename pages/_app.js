import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "../context/context";
import theme from '../styles/theme';
import '@fontsource/josefin-sans/500.css'
import '@fontsource/josefin-sans/700.css'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp
