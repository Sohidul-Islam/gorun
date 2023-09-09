/* eslint-disable no-unused-vars */
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import StyledFormInput from "./StyledFormInput";
import { credentialsInit, validateForm } from "./helper";

export default function Form({
  onSubmit,
  loginError,
  loading,
  loginFor,
  onForgetPassword,
}) {
  const theme = useTheme();
  const [credentials, setCredentials] = useState({ ...credentialsInit });
  const [errors, setErrors] = useState({
    email: undefined,
    password: undefined,
  });
  const [touched, setTouched] = useState({ email: false, password: false });
  const [modal, setModal] = useState(false);
  const [render, setRender] = useState(false);

  const checkValidSubmit = () => {
    if (
      validateForm(
        credentials,
        { email: true, password: true },
        errors,
        setErrors
      )
    ) {
      return;
    }

    onSubmit(credentials);
  };

  return (
    <Box
      sx={{
        width: { xs: "90vw", sm: "400px", md: "380px" },
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          checkValidSubmit();
        }}
      >
        <Stack gap={5}>
          {Boolean(loginError) && (
            <Box
              sx={{
                background: "#023047",
                padding: "8px 10px",
                border: `1px solid ${theme.palette.error.main}`,
              }}
            >
              <Typography
                variant="inherit"
                fontSize={12}
                lineHeight="20px"
                color="error"
              >
                {loginError}
              </Typography>
            </Box>
          )}
          <StyledFormInput
            label="Email"
            placeholder="john.dowry@example.com"
            type="email"
            value={credentials.email}
            onChange={(e) => {
              touched.email = true;
              credentials.email = e.target.value;
              validateForm(credentials, touched, errors, setErrors);
              setRender(!render);
            }}
            error={Boolean(errors.email)}
            helperText={errors.email}
            onBlur={(e) => {
              touched.email = true;
              credentials.email = e.target.value;
              validateForm(credentials, touched, errors, setErrors);
              setRender(!render);
            }}
          />
          <Box>
            <StyledFormInput
              label="Password"
              placeholder="XXXXXXXX"
              type="password"
              value={credentials.password}
              onChange={(e) => {
                touched.password = true;
                credentials.password = e.target.value;
                validateForm(credentials, touched, errors, setErrors);
                setRender(!render);
              }}
              error={Boolean(errors.password)}
              helperText={errors.password}
              onBlur={(e) => {
                touched.password = true;
                credentials.password = e.target.value;
                validateForm(credentials, touched, errors, setErrors);
                setRender(!render);
              }}
            />
            <Box textAlign="right">
              <Typography
                variant="inherit"
                color="#fff"
                fontSize={14}
                lineHeight="20px"
                fontWeight={500}
                pt={2}
                onClick={onForgetPassword}
                sx={{
                  cursor: "pointer",
                  transition: "200ms ease",
                  display: "inline-block",

                  "&:hover": {
                    color: "error.main",
                  },
                }}
              >
                Forgot Password
              </Typography>
            </Box>
          </Box>
          <Box pt={4}>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              color="primary"
              disabled={loading}
              sx={{
                padding: "10px 30px",
                borderRadius: "7px",
              }}
            >
              Log In
            </Button>
            {loginFor === "business" && (
              <Typography
                variant="inherit"
                color="#fff"
                fontSize={14}
                lineHeight="20px"
                fontWeight={500}
                pt={3}
                textAlign="center"
              >
                Join our network of restaurant partners
              </Typography>
            )}
          </Box>
        </Stack>
      </form>
    </Box>
  );
}
