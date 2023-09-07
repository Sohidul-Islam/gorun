// import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button, Menu, MenuItem, styled } from "@mui/material";
import React from "react";

function ThreeDotsMenu({ menuItems = [], handleMenuClick, ButtonComponent }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (e) => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* button */}
      {ButtonComponent ? (
        <ButtonComponent onClick={handleClick} />
      ) : (
        <StyledButton
          color="primary"
          disableRipple
          onClick={handleClick}
          sx={{
            background: anchorEl ? "#F6F8FA" : "transparent",
          }}
        >
          <MoreHorizIcon />
        </StyledButton>
      )}
      {/* dropdown */}
      <DropDown
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {menuItems?.map((item) => (
          <MenuItem
            key={item?.value}
            value={item?.value}
            sx={{
              ...(item?.sx || {}),
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleMenuClick(item?.value);
              handleClose();
            }}
            disabled={item?.disabled}
          >
            <span>{item?.label}</span>
          </MenuItem>
        ))}
      </DropDown>
    </>
  );
}

// styled dropdown
const DropDown = styled(Menu)(() => ({
  "& .MuiPopover-paper": {
    boxShadow: "none!important",
    border: "1px solid #EEEEEE",
    borderRadius: "10px",
    padding: "8px 0px",
    marginTop: "4px",
  },
  "& .MuiMenu-list": {
    padding: "0px",
  },
  "& .MuiMenuItem-root": {
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "24px",
    padding: "3px 20px",
  },
}));

// styled button
const StyledButton = styled(Button)(() => ({
  alignItems: "center",
  justifyContent: "center",
  padding: "0",
  minWidth: "0",
  width: "41px",
  height: "35px",

  "&:hover": {
    background: "#F6F8FA",
  },
}));

export default ThreeDotsMenu;
