import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import Image from "next/image";

import logo from "../../../assets/logo.png";

const getConsoleName = (userType, adminType) => {
  if (userType === "admin" && adminType === "admin") {
    return "Admin Console";
  }

  // if (userType === 'admin' && adminType === 'customerService') {
  //   return 'Customer Service Console';
  // }
  // if (userType === 'admin' && adminType === 'accountManager') {
  //   return 'Account Manager';
  // }
  // if (userType === 'admin' && adminType === 'sales') {
  //   return 'Sales Manager';
  // }

  // if (userType === 'shop') {
  //   return 'Shop Manager';
  // }

  // if (userType === 'seller') {
  //   return 'Seller Manager';
  // }

  return "";
};

export default function Topbar({ setSidebar, sidebar }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      pt="15px"
      pb="15px"
      pl="30px"
      pr="30px"
      sx={{
        background: "#fff",
        borderBottom: `1px solid ${
          sidebar ? "rgba(177, 177, 177, 0.2)" : "transparent"
        }`,
      }}
    >
      <Stack direction="row" alignItems="center" gap={2}>
        <Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => {
              setSidebar((prev) => !prev);
            }}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Stack direction="row" alignItems="center" gap={2}>
          <Image alt="logo" src={logo} height={40} />
          <Typography
            variant="inherit"
            fontSize={22}
            lineHeight="26px"
            fontWeight={500}
          >
            Admin Console
            {/* {getConsoleName(currentUser.userType, currentUser.adminType)} */}
          </Typography>
        </Stack>
        {/* <Box
          sx={{
            marginBottom: "-43px",
            paddingLeft: "40px",
          }}
        >
          <Tabs />
        </Box> */}
      </Stack>
      <Stack direction="row" alignItems="center" gap="25px">
        {/* <Typography variant="body2">
          <SupportIcon /> Get Support
        </Typography>
        <Button variant="text" disableRipple sx={{ minWidth: 0 }}>
          <NotificationIcon />
        </Button> */}
        <IconButton
          onClick={() => {
            console.log("Get Support");
          }}
          disableRipple
        >
          <Avatar
            // src={und}
            alt="photo"
            sx={{ width: 36, height: 36, textTransform: "uppercase" }}
          >
            {/* {altName} */}A
          </Avatar>
        </IconButton>
      </Stack>
      {/* <AccountMenu anchorEl={anchorEl} handleClose={handleClose} /> */}
    </Stack>
  );
}
