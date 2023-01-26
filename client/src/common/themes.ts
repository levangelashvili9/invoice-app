import { createGlobalStyle } from "styled-components";

type GlobalThemeProps = {
  theme: { body: string };
};

export const lightTheme = {
  body: "#F4F7FD",
  header: "#373B53",
  primaryColor: "#0C0E16",
  secondaryColor: "#888EB0",
  filterMenuColor: "#fff",
  filterMenuCBoxShadow: "0px 10px 20px rgba(72, 84, 159, 0.25)",
  checkBoxColor: "#dfe3fa",
  InvoiceBgColor: "#FFF",
};

export const darkTheme = {
  body: "#20212C",
  header: "#1E2139",
  primaryColor: "#FFF",
  secondaryColor: "#DFE3FA",
  filterMenuColor: "#252945",
  filterMenuCBoxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
  checkBoxColor: "#1E2139",
  InvoiceBgColor: "#1E2139;",
};

export const GlobalStyles = createGlobalStyle`

 body {
     background: ${(props: GlobalThemeProps) => props.theme.body};
     transition: all 0.3s;
   }
  
  `;
