import { createTheme } from "@mui/material/styles";

const getCSSVariable = (variableName, fallback = "") => {
  if (typeof window === "undefined") {
    return fallback; // Use fallback during SSR
  }
  const value = getComputedStyle(document.documentElement)
      .getPropertyValue(variableName)
      .trim();
  return value || fallback; // Use fallback if the variable is empty
};

export function loadTheme() {
  return createTheme({
    palette: {
      primary: {
        main: getCSSVariable("--primaryColor", "#2d8d55"),
        dark: getCSSVariable("--primaryDarkColor", "#29523A"),
        light: getCSSVariable("--primaryLightColor", "#B4D2C0"),
      },
      background: {
        default: getCSSVariable("--backgroundLightColor", "#f8f8f8"),
        paper: getCSSVariable("--whiteColor", "#FFFFFF"),
      },
      text: {
        primary: getCSSVariable("--darkGrayColor", "#333333"),
        secondary: getCSSVariable("--blackColor", "#000000"),
      },
      error: {
        main: getCSSVariable("--accentRedColor", "#FF5A5F"),
      },
      warning: {
        main: getCSSVariable("--warningColor", "#FFC107"),
      },
    },
    typography: {
      fontSize: parseFloat(getCSSVariable("--fontSizeBase", "1rem")) * 16,
      h1: {
        fontSize: getCSSVariable("--fontSizeH1", "2rem"),
      },
      h2: {
        fontSize: getCSSVariable("--fontSizeH2", "1.75rem"),
      },
      h3: {
        fontSize: getCSSVariable("--fontSizeH3", "1.5rem"),
      },
      body1: {
        fontSize: getCSSVariable("--fontSizeBase", "1rem"),
      },
      body2: {
        fontSize: getCSSVariable("--fontSizeSmall", "0.875rem"),
      },
    },
    components: {
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: getCSSVariable("--primaryColor", "#2d8d55"),
            "&.Mui-checked": {
              color: getCSSVariable("--primaryColor", "#2d8d55"),
            },
          },
        },
      },
    },
    spacing: parseInt(getCSSVariable("--spacingMedium", "16px").replace("px", "")),
    shape: {
      borderRadius: parseInt(getCSSVariable("--borderRadiusMedium", "8px").replace("px", "")),
    },
    shadows: [
      getCSSVariable("--boxShadowLight", "0 2px 5px rgba(0, 0, 0, 0.1)"),
      getCSSVariable("--boxShadowMedium", "0 4px 10px rgba(0, 0, 0, 0.15)"),
    ],
    transitions: {
      duration: {
        standard: parseFloat(getCSSVariable("--transitionDuration", "0.2s").replace("s", "")) * 1000,
      },
      easing: {
        easeInOut: getCSSVariable("--transitionEase", "ease-in-out"),
      },
    },
  });
}
