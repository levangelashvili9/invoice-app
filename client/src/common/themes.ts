import { createGlobalStyle } from "styled-components";

type GlobalThemeProps = {
  theme: { body: string };
};

export const lightTheme = {
  body: "#F4F7FD",
};

export const darkTheme = {
  body: "#20212C",
};

export const GlobalStyles = createGlobalStyle`

 body {
     background: ${(props: GlobalThemeProps) => props.theme.body};
     transition: all 0.3s;
   }
  
  `;
