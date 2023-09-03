import Layout from "@/src/Components/Layouts";
import Topbar from "@/src/Components/Layouts/Topbar";
import Provider from "@/src/theme";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import "../app/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <Layout children={<Component {...pageProps} />} />
    </Provider>
  );
}
