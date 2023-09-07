import { Box, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import errorImage from "../src/assets/images/404.jpg";

function ErrorPage() {
  return (
    <Box>
      <Stack
        justifyContent={"center"}
        // alignContent={"center"}
        alignItems="center"
        height="80vh"
        maxHeight={"700px"}
        width="100%"
      >
        <Image
          src={errorImage}
          alt={"404_page"}
          style={{ width: "50%", height: "auto" }}
        />
      </Stack>
    </Box>
  );
}

export default ErrorPage;
