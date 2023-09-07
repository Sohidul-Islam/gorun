// third pary
import SearchIcon from '@mui/icons-material/Search';
import { OutlinedInput, styled } from '@mui/material';

const SearchBar = styled(OutlinedInput)(({ theme }) => ({
  width: 'auto',
  background: theme.palette.grey[200],
  fontSize: '14px',
  padding: '0',
  position: 'relative',
  borderRadius: '30px',
  zIndex: '9',
  '&:hover': {
    background: theme.palette.grey[300],
  },

  '& .MuiSvgIcon-root': {
    position: 'absolute',
    top: '6px',
    left: '6px',
    color: 'rgb(104 104 104)',
    zIndex: '-1',
    transition: 'all 150ms ease-in-out !important',
    borderRadius: '50%',
    width: '28px',
    height: '28px',
    padding: '4px',
    cursor: 'pointer',

    '&:hover': {
      background: theme.palette.grey[400],
    },
  },

  '& .MuiInputBase-input': {
    padding: '0px',
    width: '40px',
    height: '40px',
    transition: 'all 150ms ease-in-out',

    '&:focus': {
      width: '200px',
      padding: '0px 14px',

      '& ~ .MuiSvgIcon-root': {
        left: 'auto',
        right: '6px',
        zIndex: 99,
      },
    },

    '&:not([value=""])': {
      width: '200px',
      padding: '0px 14px',

      '& ~ .MuiSvgIcon-root': {
        left: 'auto',
        right: '6px',
        zIndex: 99,
      },
    },
  },

  fieldset: {
    border: 'none',
  },
}));

export default function FilterSearch({ value, onChange, onSearch, ...props }) {
  return (
    <SearchBar
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      onKeyUp={(e) => {
        if (e.key === 'Enter') {
          onSearch(value);
        }
      }}
      endAdornment={
        <SearchIcon
          onClick={(event) => {
            if (onSearch) {
              onSearch(event);
            }
          }}
        />
      }
      {...props}
    />
  );
}
