// third party
import EastIcon from "@mui/icons-material/East";
import { Button, Stack, styled } from "@mui/material";
import { useRouter } from "next/router";

const StyledButton = styled(Button)(({ theme }) => ({
  justifyContent: "space-between",
  background: "#fff",
  borderRadius: "7px",
  padding: "14px 24px",
  fontWeight: "500",
  fontSize: "18px",
  lineHeight: "28px",
  color: theme.palette.text.primary,

  "& .MuiSvgIcon-root": {
    color: theme.palette.primary.main,
  },

  "&:hover": {
    boxShadow: "-1px 3px 4px 0px rgba(0, 0, 0,.05)",
    background: "#fff",
  },
}));

export default function PageList({ items }) {
  const history = useRouter();
  return (
    <Stack gap={5}>
      {items.map((item, index) => (
        <StyledButton
          key={index}
          disableRipple
          endIcon={<EastIcon />}
          onClick={() => {
            history.push(item.to);
          }}
        >
          {item.label}
        </StyledButton>
      ))}
    </Stack>
  );
}
