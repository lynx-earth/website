import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { _theme } from "./globals";
import Home from "./pages/Home";

const theme: _theme = {
  fonts: {
    body: "system-ui, sans-serif",
    heading: "sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSize: {
    header: "5rem",
    text: "1.5rem",
  },
  colors: {
    background_light: "#efefef",
    background_dark: "#20252c",
    text_light: "#DDDDDD",
    text_mid: "#b0b0b0",
    text_dark: "#20252c",
    primary: "#f16638",
    secondary: "#6d3597",
    tertiary: "#30475E",
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
