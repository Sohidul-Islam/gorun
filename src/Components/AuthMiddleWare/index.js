"use client";
import { useGlobalContext } from "@/src/context";
import {
  getCookiesAsObject,
  removeAuthCookies,
} from "@/src/helpers/cookies/getCookiesAsObject";
import { getUserData } from "@/src/helpers/cookies/getUser";
import { Box, CircularProgress, Stack } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../Layouts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { successMsg } from "../Shared/successMsg";
import Login from "../PageComponents/Login";
import LoginPage from "@/pages/login";

function AuthMiddleWare({ children }) {
  const router = useRouter();
  const { dispatchCurrentUser, currentUser } = useGlobalContext();

  const goToLogin = () => {
    router.push("/login");
    setIsValid(false);
    setAdminDataIsLoading(false);
  };

  const [adminDataIsLoading, setAdminDataIsLoading] = useState(true);

  const [isValid, setIsValid] = useState(false);

  const validateUser = async () => {
    // no cookie found inside user browser
    if (document.cookie.length < 1) {
      goToLogin();
      return;
    }

    const { account_type, account_id, access_token } = getCookiesAsObject();

    // any cookie is missing
    if (!account_type || !account_id || !access_token) {
      removeAuthCookies();
      return;
    }

    // get user data
    const userData = await getUserData(account_type, account_id);

    // user data is not found
    if (!userData?.status && userData?.invalidUser) {
      removeAuthCookies();
      goToLogin();
      return;
    }

    dispatchCurrentUser({
      type: account_type,
      payload: { [account_type]: userData?.user, isCurrentUser: true },
    });

    setIsValid(true);

    setAdminDataIsLoading(false);
  };

  useEffect(() => {
    validateUser();
  }, []);

  if (adminDataIsLoading && !isValid) {
    return (
      <Box>
        <Stack
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          height={"100vh"}
        >
          <CircularProgress size={60} color="primary" />
        </Stack>
      </Box>
    );
  }

  return (
    <Box>
      {router.pathname === "/login" ? (
        <LoginPage
          onSuccessLoggin={(isValid) => {
            setIsValid(isValid);
          }}
        />
      ) : (
        <Box>{isValid && <Layout children={children} />}</Box>
      )}

      <ToastContainer />
    </Box>
  );
}

export default AuthMiddleWare;
