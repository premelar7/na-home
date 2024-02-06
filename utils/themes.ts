import { ThemeDefinition } from "vuetify";

// String that represents the name of the theme I am using
export const LIGHT_THEME = "light";
// Light mode theme
export const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#f7f439",
    surface: "#FFFFFF",
    primary: "#FFFFFF",
    secondary: "#FFFFFF",
    error: "#FFFFFF",
    info: "#FFFFFF",
    success: "#FFFFFF",
    warning: "#FFFFFF",
  },
};

// String that represents the name of the dark theme I am using
export const DARK_THEME = "dark";
// Dark mode theme
export const dark: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#f7f439",
    surface: "#FFFFFF",
    primary: "#FFFFFF",
    secondary: "#FFFFFF",
    error: "#FFFFFF",
    info: "#FFFFFF",
    success: "#FFFFFF",
    warning: "#FFFFFF",
  },
};
