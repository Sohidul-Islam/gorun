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

function AuthMiddleWare({ children }) {
  const router = useRouter();
  const { dispatchCurrentUser, currentUser } = useGlobalContext();

  console.log("currentUser", currentUser);
  //   const { userType, adminType, shop } = currentUser;

  const goToLogin = () => {
    router.push("/login");
    setRender(true);
  };

  const [adminDataIsLoading, setAdminDataIsLoading] = useState(true);

  const [render, setRender] = useState(false);

  const validateUser = async () => {
    // no cookie found inside user browser
    if (document.cookie.length < 1) {
      setAdminDataIsLoading(false);
      goToLogin();
      return;
    }

    const { account_type, account_id, access_token } = getCookiesAsObject();

    // any cookie is missing
    if (!account_type || !account_id || !access_token) {
      removeAuthCookies();
      setAdminDataIsLoading(false);
      return;
    }

    // get user data
    const userData = await getUserData(account_type, account_id);

    console.log("userData", userData);
    // user data is not found
    if (!userData?.status && userData?.invalidUser) {
      removeAuthCookies();
      setAdminDataIsLoading(false);
      goToLogin();
      return;
    }

    dispatchCurrentUser({
      type: account_type,
      payload: { [account_type]: userData?.user, isCurrentUser: true },
    });

    setAdminDataIsLoading(false);
    // router.push("/");
  };

  useEffect(() => {
    validateUser();

    // if (router.pathname === "/login" && currentUser?.adminType === "admin") {
    //   validateUser();
    // }
  }, []);

  if (adminDataIsLoading) {
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
        children
      ) : (
        <Box>{!adminDataIsLoading && <Layout children={children} />}</Box>
      )}

      <ToastContainer />
    </Box>
  );
}

export default AuthMiddleWare;
