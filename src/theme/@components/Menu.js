export default function Menu() {
  return {
    defaultProps: {
      open: true,
    },
    styleOverrides: {
      root: {
        borderRadius: '8px',
      },
      list: {
        padding: 0,
      },
      paper: {
        borderRadius: '8px',
        // boxShadow: `${theme.shadows[3]} !important`,
      },
    },
  };
}
