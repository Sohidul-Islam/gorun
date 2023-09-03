import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

// eslint-disable-next-line no-unused-vars
const variantToItemStylesMap = {
  dark: {
    color: "#363636",
  },
  light: {
    color: "#fff",
  },
};

const MenuListstyle = (isActive) => {
  const baseSx = {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    gap: "8px",
    padding: "8px 16px",
    fontSize: "14px",
  };

  const activeSx = {
    ...baseSx,
    backgroundColor: "#31b44c",
    color: "#fff",
  };

  const normalSx = {
    ...baseSx,
    backgroundColor: "transparent",
    color: "#000",
    transition: "all 0.3s linear",
  };

  return isActive ? { ...activeSx } : { ...normalSx };
};

export default function MenuList({ menuList, variant, onLinkClick }) {
  const route = useRouter();

  return (
    <Box>
      <Typography
        variant="inherit"
        sx={{
          fontWeight: "500",
          fontSize: "12px",
          lineHeight: "18px",
          paddingLeft: "16px",
          paddingTop: "12px",
          paddingBottom: "8px",
          color: variant === "parent" ? "#363636" : "white",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          display: "block",
        }}
      >
        {menuList.title}
      </Typography>
      <Stack>
        {menuList?.menu?.map(({ to, icon: Icon, label }, index) => (
          <Link
            href={to}
            exact
            key={index}
            className="sidebar-menu-item"
            style={{
              ...MenuListstyle(route?.pathname === to),
            }}
            onClick={onLinkClick}
          >
            {Icon && <Icon />}
            <span>{label}</span>
          </Link>
        ))}
      </Stack>
    </Box>
  );
}
