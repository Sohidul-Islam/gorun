import { createTheme, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import Components from "./@components";
import GetPallete from "./palllete";
import Typography from "./typography";

export default function Provider({ children }) {
  const customTheme = useMemo(() => {
    const theme = createTheme({
      palette: GetPallete(),
      spacing: 4,
    });

    // components
    theme.components = Components(theme);

    // typography
    theme.typography = { ...theme.typography, ...Typography(theme) };

    return theme;
  }, []);

  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
}
