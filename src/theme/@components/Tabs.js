export default function Tabs(theme) {
  return {
    defaultProps: {
      textColor: "inherit",
    },
    styleOverrides: {
      indicator: {
        backgroundColor: theme.palette.text.primary,
      },
    },
  };
}
