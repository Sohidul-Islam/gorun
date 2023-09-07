import pxToRem from "@/src/helpers/pxToRem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Box,
  Checkbox,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Tooltip,
  styled,
  useTheme,
} from "@mui/material";

export const StyledSelect = styled(Select)(({ theme }) => ({
  minHeight: "auto",
  fontSize: `${pxToRem(12)}rem!important`,
  fontWeight: 400,
  background: theme.palette.background.secondary,
  borderRadius: "50px",
  minWidth: "190px",

  [theme.breakpoints.up("xl")]: {
    fontSize: `${pxToRem(14)}rem!important`,
  },

  "&:hover": {
    background: theme.palette.background.secondaryHover,
  },

  "& .MuiOutlinedInput-input": {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 500,
    color: theme.palette.text.primary,
  },

  "& .MuiSelect-select": {
    paddingTop: "12px",
    paddingBottom: "12px",
    paddingLeft: "15",
    paddingRight: "38px",
    borderColor: "transparent !important",
    outline: "none !important",
  },

  "& .MuiSvgIcon-root": {
    color: theme.palette.text.primary,
  },

  "& fieldset": {
    border: "0",
    outline: "0",
  },

  "&.Mui-readOnly, &.MuiInputBase-readOnly": {
    pointerEvents: "none",
    "& .MuiSvgIcon-root": {
      visibility: "hidden!important",
    },
  },
}));

function Wrapper({ tooltip, children }) {
  if (tooltip) {
    return (
      <Tooltip title={tooltip}>
        <Box>{children}</Box>
      </Tooltip>
    );
  }

  return children;
}

const sizes = {
  sm: {
    root: {
      "& .MuiSelect-select": {
        paddingTop: "8px",
        paddingBottom: "8px",
      },

      "& .MuiOutlinedInput-input": {
        fontWeight: "500",
        fontSize: "12px",
        lineHeight: "20px",
      },
    },
    menuSx: {
      "& .MuiMenuItem-root": {
        fontSize: "12px",
        lineHeight: "20px",
      },
    },
  },
  sm2: {
    root: {
      minWidth: "84px",
      "& .MuiSelect-select": {
        paddingTop: "7.5px",
        paddingBottom: "7.5px",
        // maxWidth: '84px',
      },

      "& .MuiOutlinedInput-input": {
        fontWeight: "500",
        fontSize: "12px",
        lineHeight: "20px",
      },
    },
    menuSx: {
      "& .MuiMenuItem-root": {
        fontSize: "12px",
        lineHeight: "20px",
      },
    },
  },
  lg1: {
    root: {
      minWidth: 0,

      "& .MuiSelect-select": {
        paddingLeft: "22px",
        paddingRight: "43px!important",
        paddingTop: "11px",
        paddingBottom: "11px",
        fontSize: "14px",
        lineHeight: "20px",
      },

      "& .MuiSvgIcon-root": {
        right: "16px",
        left: "auto",
      },
    },
    menuSx: {
      "& .MuiMenuItem-root": {
        background: "#F6F8FA",
        fontSize: "13px",
        lineHeight: "20px",
      },
    },
  },
};

export default function FilterSelect({
  items,
  plainList,
  filterName,
  placeholder,
  getValue,
  getLabel,
  getKey,
  getDisplayValue,
  getDisabled,
  size,
  sx,
  tooltip,
  ...props
}) {
  const theme = useTheme();

  return (
    <Wrapper tooltip={tooltip}>
      <StyledSelect
        IconComponent={KeyboardArrowDownIcon}
        MenuProps={{
          sx: {
            marginTop: "4px",

            "& .MuiPaper-root": {
              background: "#F6F8FA",
              boxShadow: "initial!important",
              borderRadius: "7px",
              border: "1px solid #EEEEEE",
              maxHeight: "300px",
            },
            ...(sizes[size]?.menuSx || {}),
          },
        }}
        displayEmpty
        input={<OutlinedInput />}
        renderValue={(value) => {
          if (!value) {
            return <span>{placeholder}</span>;
          }
          return (
            `${filterName || ""} ${
              getDisplayValue
                ? getDisplayValue(value)
                : items.find((item) => item.value === value)?.label
            }` || <span>{placeholder}</span>
          );
        }}
        sx={{
          border: `1px solid ${theme.palette.primary.main}`,
          ...(sizes[size]?.root || {}),
          ...(sx || {}),
        }}
        {...props}
      >
        {items.map((item) => (
          <MenuItem
            key={getKey ? getKey(item) : item.value}
            value={getValue ? getValue(item) : item.value}
            disabled={
              item.disabled || (getDisabled ? getDisabled(item) : false)
            }
            sx={{
              "&:hover": {
                background: "#ecf0f5",
              },

              "&.Mui-selected": {
                background: "#ecf0f5!important",
              },

              [theme.breakpoints.up("lg")]: {
                fontSize: "12px",
              },
              [theme.breakpoints.up("xl")]: {
                fontSize: "14px",
              },
            }}
          >
            {props.multiple && (
              <Checkbox
                sx={{
                  paddingTop: 0,
                  paddingBottom: 0,
                  paddingLeft: 0,
                }}
                checked={props.value.includes(item.value)}
              />
            )}
            <ListItemText disableTypography>
              {getLabel ? getLabel(item) : item.label}
            </ListItemText>
          </MenuItem>
        ))}
      </StyledSelect>
    </Wrapper>
  );
}
