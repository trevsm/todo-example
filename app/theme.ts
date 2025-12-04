"use client";

import { createTheme, Theme } from "@mui/material/styles";

export const createAppTheme = (mode: "light" | "dark"): Theme => {
  const isDark = mode === "dark";

  return createTheme({
    palette: {
      mode,
      primary: {
        main: "#385ffb",
        dark: "#1e3be0",
        contrastText: "#ffffff",
      },
      error: {
        main: "#ff3737",
        dark: "#ff0000",
        contrastText: "#ffffff",
      },
      text: {
        primary: isDark ? "#e0e0e0" : "#2e2e2e",
        secondary: isDark ? "#b0b0b0" : "#666666",
      },
      background: {
        default: isDark ? "#121212" : "#f5f5f5",
        paper: isDark ? "#1e1e1e" : "#ffffff",
      },
      divider: isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.12)",
    },
    typography: {
      fontFamily: "inherit",
      fontSize: 16,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: "8px",
          },
        },
      },
    },
  });
};

// Default export for backward compatibility (light mode)
export const theme = createAppTheme("light");
