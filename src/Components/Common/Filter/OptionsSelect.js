import { Box, Chip, styled, useTheme } from '@mui/material';
// import {  } from 'styled-components';

const StyledChip = styled(Chip)(({ theme }) => ({
  padding: '12px 21px',
  height: 'auto',
  width: 'auto',
  borderRadius: '35px',
  background: theme.palette.background.secondary,
  border: `1.25px solid transparent`,
  transition: 'border 200ms ease',
  boxShadow: 'none!important',

  '& .MuiChip-label': {
    color: theme.palette.text.primary,
    fontFamily: "'Inter', sans-serif",
    fontWeight: '500',
    fontSize: '15px',
    lineHeight: '24px',
  },

  '&.active': {
    boxShadow: 'none!important',
    border: `1.25px solid ${theme.palette.primary.main}`,
    background: theme.palette.background.secondary,
  },

  // '&:hover, &.active': {
  //   border: `1.25px solid ${theme.palette.primary.main}`,
  //   background: theme.palette.background.secondary,
  // },
}));

export default function OptionsSelect({
  items,
  value,
  multiple,
  onChange,
  sx,
  gapSx = {
    xl: 3,
    lg: 2,
  },
  disabled,
  hideOnDisabled,
  disableMultiple,
  readOnly,
}) {
  const theme = useTheme();

  const disabledSx = {
    opacity: '.7',
  };

  const readOnlySx = {
    '&:hover': {
      border: `1.25px solid transparent`,
    },
    '&.active:hover': {
      border: `1.25px solid ${theme.palette.primary.main}`,
    },
  };

  let defaultSx = {};

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: gapSx,
      }}
    >
      {items.map((item) => {
        const hide = !(hideOnDisabled && (disabled || item?.isDisabled))
          ? false
          : multiple
          ? !value?.includes(item.value)
          : item?.value !== value;
        const active = multiple ? value?.includes(item?.value) : item?.value === value;
        const isDisabled =
          disabled || item?.isDisabled ? true : disableMultiple ? disableMultiple?.includes(item.value) : undefined;

        defaultSx = disabled ? { ...defaultSx, ...disabledSx } : defaultSx;
        defaultSx = readOnly ? { ...defaultSx, ...readOnlySx } : defaultSx;

        return (
          <StyledChip
            disableRipple
            disabled={isDisabled}
            key={item.value}
            label={item.label}
            variant="contained"
            className={`${active ? 'active' : ''} ${hide ? 'd-none' : ''}`}
            sx={{ ...(sx || defaultSx) }}
            onClick={() => {
              if (readOnly) {
                return;
              }
              onChange(item.value);
            }}
          />
        );
      })}
    </Box>
  );
}
