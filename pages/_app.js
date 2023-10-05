"use client";

import Provider from "@/src/theme";
import "../app/globals.css";
import ContextProvider from "@/src/context";
import { QueryClient, QueryClientProvider } from "react-query";
import { useRouter } from "next/router";
import AuthMiddleWare from "@/src/Components/AuthMiddleWare";
import Head from "next/head";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }) {
  console.log("pageProps", { ...pageProps });
  const route = useRouter();

  console.log(route.pathname);
  return (
    <Provider>
      <ContextProvider>
        <QueryClientProvider client={queryClient}>
          <Head>
            <meta name="viewport" content="width=768" />
          </Head>
          <AuthMiddleWare>
            <Component {...pageProps} />
          </AuthMiddleWare>
        </QueryClientProvider>
      </ContextProvider>
    </Provider>
  );
}
