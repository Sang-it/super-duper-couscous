import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import Head from "next/head";
import theme from "../utils/theme";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>NAME OF THE APP</title>
      </Head>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
