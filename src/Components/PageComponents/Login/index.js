import { Box, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useMutation } from "react-query";

// import { ReactComponent as LyxaIcon } from "../../assets/icons/lyxa-logo-lg.svg";
// import { ReactComponent as LyxaText } from "../../assets/icons/lyxa-text-lg.svg";

import logo from "../../../assets/logo_with_label.png";

import AccountSelect from "./AccountSelect";
import ForgotPassword from "./ForgotPassword";
import Form from "./Form";
import { adminAccountTypes, businessAccountTypes } from "./helper";
import { useRouter } from "next/router";
import Image from "next/image";
import { useGlobalContext } from "@/src/context";

import * as API_URL from "@/src/network/api";
import AXIOS from "@/src/network/Axios";
import { setCookiesAsObj } from "@/src/helpers/cookies/getCookiesAsObject";
import { successMsg } from "../../Shared/successMsg";

export default function Login({ loginFor, onSuccessLoggin }) {
  const history = useRouter();
  const { dispatchCurrentUser } = useGlobalContext();
  const [accountType, setAccountType] = useState("");
  const [hilightAccountType, setHilightAccountType] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [modal, setModal] = useState(false);

  const onLoginSuccess = async (data) => {
    // socketConnect();

    if (!data?.status) {
      setLoginError(data?.message);
      onSuccessLoggin(false);
      return;
    }

    let currentUser = data?.data?.admin;

    // success message
    successMsg(data?.message, "success");

    // save information inside cookies
    setCookiesAsObj(
      {
        access_token: currentUser.token,
        account_type: currentUser.account_type,
        account_id: currentUser._id,
      },
      15
    );

    localStorage.setItem(
      "lastLoginType",
      JSON.stringify(currentUser.account_type)
    );

    // save user information in global store
    dispatchCurrentUser({
      type: currentUser?.account_type,
      payload: {
        [currentUser?.account_type]: currentUser,
        isCurrentUser: true,
      },
    });
    onSuccessLoggin(true);

    history.push("/");
  };

  const loginMutation = useMutation((data) => AXIOS.post(API_URL.LOGIN, data), {
    onSuccess: onLoginSuccess,
    onError: (error) => {
      setLoginError(error?.message);
    },
  });

  const onSubmit = (credentials) => {
    if (!accountType) {
      setHilightAccountType(true);
      setLoginError("Please select account type");
      return;
    }

    setLoginError(null);

    loginMutation.mutate({
      ...credentials,
      adminType: accountType,
    });
  };

  const onForgetPassword = () => {
    if (!accountType) {
      setHilightAccountType(true);
      setLoginError("Please select account type");
      return;
    }

    setModal(true);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#023047",
        height: "100vh",
      }}
    >
      <Stack pt={6} pl={9}>
        <AccountSelect
          options={
            loginFor === "team" ? adminAccountTypes : businessAccountTypes
          }
          value={accountType}
          onChange={(event) => {
            setAccountType(event.target.value);
            setHilightAccountType(false);
            setLoginError(null);
          }}
          placeholder={loginFor === "business" ? "For Business" : "For Team"}
          hilightAccountType={hilightAccountType}
        />
      </Stack>
      {/* logo */}
      <Stack
        alignItems="center"
        height="calc(100vh - 47px)"
        justifyContent="center"
      >
        <Stack alignItems="center" justifyContent="center" gap={2} pb={7.5}>
          <Image
            src={logo}
            alt="logo"
            style={{ width: "100px", height: "100px" }}
          />
        </Stack>
        <Form
          onSubmit={onSubmit}
          loginError={loginError}
          loading={loginMutation.isLoading}
          loginFor={loginFor}
          onForgetPassword={onForgetPassword}
        />
      </Stack>
      <Modal open={modal} onClose={() => setModal(false)}>
        <Box>
          <ForgotPassword
            onClose={() => setModal(false)}
            loginFor={loginFor}
            accountType={accountType}
          />
        </Box>
      </Modal>
    </Box>
  );
}
