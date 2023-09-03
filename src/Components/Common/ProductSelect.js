// import { Autocomplete, styled } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputAdornment, Paper, TextField, useTheme } from '@mui/material';
import StyledAutocomplete from '../Styled/StyledAutocomplete';

export default function ProductSelect({ ...props }) {
  const theme = useTheme();
  return (
    <StyledAutocomplete
      fullWidth
      blurOnSelect
      openOnFocus
      disableClearable
      disablePortal
      popupIcon={<KeyboardArrowDownIcon />}
      PaperComponent={({ children }) => (
        <Paper
          sx={{
            background: theme.palette.background.secondary,
            '& .MuiAutocomplete-listbox': {
              padding: 0,
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
          }}
        >
          {children}
        </Paper>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
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
                {!params.inputProps.value && (
                  <IconButton
                    size="small"
                    // eslint-disable-next-line max-len
                    className="custom-clear-button MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium MuiAutocomplete-clearIndicator"
                    onClick={() => {
                      console.log('clicked');
                    }}
                    edge="end"
                  >
                    <ClearIcon />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
        />
      )}
      {...props}
    />
  );
}
