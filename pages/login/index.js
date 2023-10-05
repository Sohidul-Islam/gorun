"use client";
import Login from "@/src/Components/PageComponents/Login";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

function LoginPage({ onSuccessLoggin }) {
  const route = useRouter();
  return (
    <Box>
      <Login loginFor={route?.pathname === "/login" ? "team" : "business"} onSuccessLoggin={onSuccessLoggin}/>
    </Box>
  );
}

export default LoginPage;
