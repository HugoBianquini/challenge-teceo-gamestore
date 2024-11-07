import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

type TCustomThemeProvider = {
  children: ReactNode;
};

const CustomThemeProvider = ({ children }: TCustomThemeProvider) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
