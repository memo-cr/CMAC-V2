import { createContext } from "react";

export const themes = {
  dark: "bg-dark",
  light: "",
};

export const ThemeContext = createContext({
  theme: themes.dark,
  changeTheme: () => {},
});
