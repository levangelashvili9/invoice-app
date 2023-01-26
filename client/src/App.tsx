import "./App.css";
import { lightTheme, darkTheme, GlobalStyles } from "./common/themes";
import { ThemeProvider } from "styled-components";
import { useAppSelector } from "./redux/hooks";
import { Routes, Route } from "react-router-dom";

import { MobileHeader } from "./common/components/MobileHeader";
import { HomePage } from "./pages/home";
import { CreateInvoicePage } from "./pages/create-invoice";

function App() {
  const { isDarkMode } = useAppSelector((state) => state.theme);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <MobileHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-invoice" element={<CreateInvoicePage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
