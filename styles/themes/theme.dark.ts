import { createTheme } from "@mui/material/styles";

export const ThemeDark = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "#222831",
          padding: "24px",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        },
      },
    },
  },
});
