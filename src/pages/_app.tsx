import type { AppProps as Props } from "next/app";
import { GlobalStyles } from "../globalStyles/base/base";

const MyApp: React.FC<Props> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
