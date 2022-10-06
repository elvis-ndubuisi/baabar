import "../scss/globals.scss";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Liner from "../components/Liner";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
      <Liner />
    </>
  );
}

export default MyApp;
