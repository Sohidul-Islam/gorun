import {
  getCookiesAsObject,
  setCookiesAsObj,
} from "@/src/helpers/cookies/getCookiesAsObject";
import {
  Menu,
  MenuItem,
  Modal,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { useState } from "react";

const StyledMenuItem = styled(MenuItem)(() => ({
  fontSize: "13px!important",
  lineHeight: "21px!important",
  fontWeight: "500",
  padding: "3px 16px",
  gap: "8px",

  " &:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
}));

export default function AccountMenu({ anchorEl, handleClose }) {
  const [changePassword, setChangePassword] = useState(false);

  const _logout = () => {
    const authCookies = getCookiesAsObject();
    setCookiesAsObj(authCookies, 0);
    window.location.reload(true);
  };

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            boxShadow: "none",
            minWidth: "160px",
            border: "1px solid #EEEEEE",
            padding: "5px 0px",
            borderRadius: "8px",
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* <StyledMenuItem
          onClick={() => {
            setChangePassword(true);
            handleClose();
          }}
        >
          Password
        </StyledMenuItem> */}
        <StyledMenuItem
          onClick={() => {
            _logout();
            handleClose();
          }}
        >
          Logout
        </StyledMenuItem>
      </Menu>
      <Modal
        open={changePassword}
        onClose={() => {
          setChangePassword(false);
        }}
      >
        <Paper
          sx={{
            padding: "10px 16px 0px 16px",
          }}
        >
          <Typography variant="h5" pb={2}>
            Change Password
          </Typography>
        </Paper>
      </Modal>
    </>
  );
}
