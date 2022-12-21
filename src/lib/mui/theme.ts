import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      paper: "#1d1d1d",
      default: "#f0f0f0",
    },
    primary: {
      main: "#000",
      contrastText: "#000",
    },
    secondary: {
      main: "#619bff",
      contrastText: "#fff",
    },
    error: {
      main: "#f44336",
      contrastText: "#fff",
    },
    text: {
      primary: "#000",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.38)",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: [
      "Inter",
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "Noto Sans",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji",
    ].join(","),
    h1: {
      fontSize: "4rem",
      fontWeight: 700,
      lineHeight: 1.5,
      color: "#fff",
    },
    h2: {
      letterSpacing: "-.025em",
      fontWeight: 700,
      fontSize: "3rem",
      color: "#000",
    },
    h3: {
      color: "#000",
      fontWeight: 600,
      fontSize: "2rem",
      lineHeight: 1.75,
    },
    h4: {
      color: "rgba(255, 255, 255, 0.7)",
      fontWeight: 300,
      fontSize: 20,
      lineHeight: 1.6,
    },
    body1: {
      fontSize: "1.125rem",
      lineHeight: 1.75,
      color: "#000",
    },
    body2: {
      fontSize: "1rem",
      lineHeight: 1.75,
      color: "#000",
    },
  },

  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          marginTop: 0,
          marginBottom: 0,
        },
      },
    },
    // Override border color of TextField when it is not focused
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "1px solid hsla(0, 0%, 100%, 0.15)",
          borderRadius: 16,
        },
      },
    },
  },
});

// https://material-ui.com/customization/theming/#responsivefontsizes-theme-options-theme
export default responsiveFontSizes(theme);
