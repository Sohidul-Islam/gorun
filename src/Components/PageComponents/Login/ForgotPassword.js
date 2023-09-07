import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";

import { validateEmail } from "./helper";
import CloseButton from "../../Common/CloseButton";
import * as AXIOS from "@/src/network/Axios";
import { API_URL } from "@/src/network/api";

export default function ForgotPassword({ onClose, accountType }) {
  const [email, setEmail] = useState("");
  const [submitDisabled, setSuttonDisabled] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (accountType && validateEmail(email)) setSuttonDisabled(false);
    else setSuttonDisabled(true);
  }, [email]);

  const mutation = useMutation(
    () =>
      AXIOS.post(API_URL.FORGET_PASS, {
        type: accountType,
        to_email: email,
      }),
    {
      onSuccess: (data) => {
        console.log(data);
        if (!data?.status) {
          setError(data?.message);
        } else {
          setSuccess(data?.message);
        }
      },
    }
  );

  return (
    <Box
      sx={{
        background: "#fff",
        width: "min(650px, 70vw)",
        padding: "14px 20px 20px",
        borderRadius: "8px",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        pb={5}
      >
        <Typography
          variant="inherit"
          sx={{ fontSize: "18px", fontWeight: 600, lineHeight: "24px" }}
        >
          Forgot Password
        </Typography>
        <CloseButton size="sm" onClick={onClose} />
      </Stack>

      {!success && (
        <Box>
          {error && (
            <Box
              sx={{
                background: "#e37b8233",
                padding: "12px",
                border: `1px solid`,
                borderColor: "error.main",
              }}
            >
              <Typography
                variant="inherit"
                fontSize={14}
                lineHeight="20px"
                color="error"
              >
                {error}
              </Typography>
            </Box>
          )}
          <Stack gap={5} pt={3}>
            <TextField
              variant="outlined"
              placeholder="Your Email Address"
              fullWidth
              margin="normal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                margin: "0",

                "& .MuiInputBase-input": {
                  padding: "10px",
                },

                "& .MuiInputBase-root.Mui-focused": {
                  "& fieldset": {
                    borderColor: "error.main",
                    borderWidth: "1px",
                  },
                },
              }}
            />
            <Button
              variant="contained"
              color="error"
              fullWidth
              disabled={submitDisabled || mutation.isLoading}
              onClick={mutation.mutate}
              sx={{
                fontSize: "14px",
                borderRadius: "6px",

                "&.Mui-disabled": {
                  opacity: "0.7",
                },
              }}
            >
              Submit
            </Button>
          </Stack>
        </Box>
      )}

      {success && (
        <Box
          sx={{
            background: "#417c4538",
            padding: "20px 12px",
            border: `1px solid`,
            borderColor: "success.main",
          }}
        >
          <Typography
            variant="inherit"
            fontSize={14}
            lineHeight="20px"
            color="success.main"
          >
            {success}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
