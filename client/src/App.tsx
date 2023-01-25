import "./App.css";
import { lightTheme, darkTheme, GlobalStyles } from "./common/themes";
import { ThemeProvider } from "styled-components";
import { useAppSelector } from "./redux/hooks";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home";

function App() {
  const { isDarkMode } = useAppSelector((state) => state.theme);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
