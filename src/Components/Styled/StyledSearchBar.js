// import SearchIcon from '@mui/icons-material/Search';
import { Search } from "@mui/icons-material";
import { Input, InputAdornment, styled } from "@mui/material";

const StyledInput = styled(Input)(({ theme }) => ({
  background: "#FFFFFF",
  border: `0.5px solid ${theme.palette.primary.main}`,
  borderRadius: "7px",
  padding: "7px 12px",
  gap: "3px",

  "& .MuiInput-sizeSmall": {
    fontSize: "12px",
    marginTop: "2px",
    color: theme.palette.primary.main,
  },

  "&::before": {
    display: "none",
  },

  "&::after": {
    display: "none",
  },

  "& .MuiInputBase-input": {
    color: "#828282",
    padding: "0",
    fontWeight: "500",
    fontSize: "13px",
    lineHeight: "16px",

    "&::placeholder": {
      color: "#828282!important",
      fontWeight: "500",
      fontSize: "13px",
      lineHeight: "16px",
      opacity: 1,
    },

    "&::-webkit-input-placeholder": {
      color: "#828282!important",
      fontWeight: "500",
      fontSize: "13px",
      lineHeight: "16px",
      opacity: 1,
    },
  },

  "& .MuiSvgIcon-root": {
    fontSize: "20px",
    marginTop: "2px",
    color: theme.palette.primary.main,
  },
}));

export default function StyledSearchBar({ ...props }) {
  return (
    <StyledInput
      startAdornment={
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
      }
      {...props}
    />
  );
}
