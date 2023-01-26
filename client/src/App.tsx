import "./App.css";
import { lightTheme, darkTheme, GlobalStyles } from "./common/themes";
import { ThemeProvider } from "styled-components";
import { useAppSelector } from "./redux/hooks";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home";
import { MobileHeader } from "./common/components/MobileHeader";

function App() {
  const { isDarkMode } = useAppSelector((state) => state.theme);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <MobileHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
