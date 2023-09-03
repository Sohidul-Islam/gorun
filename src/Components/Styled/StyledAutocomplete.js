/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, InputAdornment, Paper, TextField, styled, useTheme } from '@mui/material';
import React, { useState } from 'react';

const StyledSelect = styled(Autocomplete)(({ theme }) => ({
  /* normal styles */

  '& .MuiAutocomplete-listbox': {
    maxHeight: '300px',
    background: theme.palette.background.secondary,
  },

  '& .MuiInputBase-root': {
    background: theme.palette.background.secondary,
    borderRadius: '40px',
    padding: '12px 60px 12px 8px !important',
    cursor: 'pointer',

    '& .MuiInputAdornment-positionStart': {
      width: '0px',
      height: '0px',
      visibility: 'hidden',
      opacity: '0',
    },

    '& .MuiAutocomplete-clearIndicator': {
      color: theme.palette.secondary.main,
    },
  },

  '& .MuiInputBase-input': {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '500',
    color: theme.palette.text.primary,
    padding: '0!important',
  },

  '& .MuiAutocomplete-popupIndicator:hover': {
    background: 'transparent',
  },

  '& .MuiAutocomplete-clearIndicator:hover': {
    background: 'none',
  },

  '& fieldset': {
    border: 'none',
  },

  '& .custom-clear-button': {
    visibility: 'hidden',
    opacity: '0',
    pointerEvents: 'none',

    '& .MuiSvgIcon-root': {
      width: '19px',
      height: '19px',
    },
  },

  '& .MuiFormControl-root': {
    '& .MuiFormLabel-root': {
      bottom: '-1px',
      top: 'auto',
      fontWeight: '500',
      fontSize: '21px',
      lineHeight: '24px',
      margin: '0',
      color: `${theme.palette.text.primary}!important`,
      paddingLeft: '12px',
      pointerEvents: 'none',
    },
  },

  // disalbed styles
  '&:has(.MuiInputBase-root.Mui-disabled)': {
    opacity: '0.85',
  },

  /* focus styles */
  '&:has(.MuiInputBase-input:focus)': {
    borderRadius: '25px',
    width: '475px',
    position: 'absolute',
    zIndex: '99',
    top: '8px',

    '& .MuiFormControl-root': {
      '& .MuiFormLabel-root': {
        display: 'none',
      },
    },
  },

  '& .MuiInputBase-root:has(.MuiInputBase-input:focus)': {
    padding: '13px 16px!important',
    paddingRight: '70px!important',
    position: 'relative',
    borderRadius: '40px 40px 0 0',

    '& .MuiInputAdornment-positionStart': {
      visibility: 'visible',
      opacity: '1',
      margin: '0',
      height: 'auto',
      width: 'auto',
      position: 'absolute',
      left: '26px',
      top: '22px',
    },

    '& .MuiAutocomplete-popupIndicator': {
      display: 'none!important',
    },

    '& .MuiAutocomplete-clearIndicator': {
      position: 'absolute',
      right: '15px',
      top: '0px',
      color: theme.palette.secondary.main,
      visibility: 'visible!important',
      pointerEvents: 'all',
    },

    '& .custom-clear-button': {
      visibility: 'visible',
      opacity: '1',
      pointerEvents: 'all',
      top: '18.5px',
      right: '24.5px',
    },
  },

  '& .MuiInputBase-input:focus': {
    background: '#fff',
    height: '40px',
    borderRadius: '40px',
    paddingLeft: '42px!important',
  },
}));

export default function StyledAutocomplete({ label, placeholder, maxHeight, ...props }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <StyledSelect
      blurOnSelect
      openOnFocus
      disableClearable
      popupIcon={<KeyboardArrowDownIcon />}
      PaperComponent={({ children, ...props }) => (
        <Paper
          sx={{
            '& .MuiAutocomplete-listbox': {
              background: theme.palette.background.secondary,
              borderRadius: '0px 0px 25px 25px',
              padding: 0,
              maxHeight,

              '& .MuiAutocomplete-option[aria-selected="true"]': {
                background: 'rgb(94, 151, 169, .05)',
              },
            },

            '& .MuiAutocomplete-option': {
              color: theme.palette.text.primary,
              fontWeight: 600,
              lineHeight: '31px',
              fontSize: '15px',
              alignItems: 'center',
              justifyContent: 'space-between!important',
              flexDirection: 'row',
              padding: '0px 45px 0px 16px',
            },

            '& .MuiAutocomplete-noOptions': {
              background: theme.palette.background.secondary,
              textAlign: 'center',
              fontWeight: '500',
              borderRadius: '0 0 40px 40px',
            },
          }}
          {...props}
        >
          {children}
        </Paper>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{
            '.MuiInputBase-input': {
              pointerEvents: props.readOnly ? 'none' : 'initial',
            },
          }}
          variant="outlined"
          placeholder={placeholder}
          label={label}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {params.InputProps.endAdornment}
                {/* {!params.inputProps.value && (
                  <IconButton
                    size="small"
                    // eslint-disable-next-line max-len
                    className="custom-clear-button MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium MuiAutocomplete-clearIndicator"
                    // onClick={() => {
                    //   console.log('clicked');
                    // }}
                    edge="end"
                  >
                    <ClearIcon />
                  </IconButton>
                )} */}
              </InputAdornment>
            ),
          }}
        />
      )}
      {...props}
    />
  );
}
