import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { MenuItem, OutlinedInput, Select, styled, useTheme } from '@mui/material';
import pxToRem from '../../helpers/pxToRem';

const StyledSelectComoponent = styled(Select)(({ theme }) => ({
  minHeight: 'auto',
  fontSize: `${pxToRem(12)}rem!important`,
  fontWeight: 400,
  minWidth: '110px',

  [theme.breakpoints.up('xl')]: {
    fontSize: `${pxToRem(14)}rem!important`,
  },

  '& .MuiOutlinedInput-input': {
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '15px',
    color: theme.palette.secondary.main,
  },

  '& .MuiSelect-select': {
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '15px',
    paddingRight: '34px',
    borderColor: 'transparent !important',
    outline: 'none !important',
  },

  '& .MuiSvgIcon-root': {
    color: theme.palette.secondary.main,
  },

  '& fieldset': {
    border: '0.5px solid #D8D7DC',
    outline: '0!important',

    '&.Mui-focused': {
      borderColor: `${theme.palette.secondary.main} !important`,
    },
  },

  '&:hover ': {
    '& fieldset': {
      borderColor: `${theme.palette.secondary.main} !important`,
    },
  },
}));

export default function StyledSelect2({
  items,
  plainList,
  filterName,
  placeholder,
  getValue,
  getLabel,
  getKey,
  getDisplayValue,
  ...props
}) {
  const theme = useTheme();

  return (
    <StyledSelectComoponent
      IconComponent={KeyboardArrowDownIcon}
      MenuProps={{
        sx: {
          '& li': {
            fontWeight: '500',
            fontSize: '12px',
            lineHeight: '15px',

            '&.Mui-selected': {
              background: theme.palette.background.secondary,
            },
          },
        },
      }}
      displayEmpty
      input={<OutlinedInput />}
      renderValue={(value) => {
        if (!value) {
          return <span>{placeholder}</span>;
        }
        return (
          `${filterName || ''} ${
            getDisplayValue ? getDisplayValue(value) : items.find((item) => item.value === value)?.label
          }` || <span>{placeholder}</span>
        );
      }}
      {...props}
    >
      {items.map((item) => (
        <MenuItem
          key={getKey ? getKey(item) : item.value}
          value={getValue ? getValue(item) : item.value}
          sx={{
            [theme.breakpoints.up('lg')]: {
              fontSize: '12px',
            },
            [theme.breakpoints.up('xl')]: {
              fontSize: '14px',
            },
          }}
        >
          {getLabel ? getLabel(item) : item.label}
        </MenuItem>
      ))}
    </StyledSelectComoponent>
  );
}
