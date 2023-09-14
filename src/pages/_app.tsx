import type { AppProps as Props } from "next/app";
import { GlobalStyles } from "../globalStyles/base/base";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";

const MyApp: React.FC<Props> = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;
