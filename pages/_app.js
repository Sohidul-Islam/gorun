"use client";

import Provider from "@/src/theme";
import "../app/globals.css";
import ContextProvider from "@/src/context";
import { QueryClient, QueryClientProvider } from "react-query";
import { useRouter } from "next/router";
import AuthMiddleWare from "@/src/Components/AuthMiddleWare";


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
          {route.pathname === "/login" && <Component {...pageProps} />}
          {route.pathname !== "/login" && (
            <AuthMiddleWare>
              <Component {...pageProps} />
            </AuthMiddleWare>
          )}
        </QueryClientProvider>
      </ContextProvider>
    </Provider>
  );
}
