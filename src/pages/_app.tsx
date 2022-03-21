import "../globalStyles/base/base.css";
import type { AppProps as Props } from "next/app";

const MyApp: React.FC<Props> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
