import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Landing from "./components/Hero";
import { _theme } from "./globals";

const theme: _theme = {
  fonts: {
    body: "system-ui, sans-serif",
    heading: "sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSize: {
    header: "5rem",
    text: "1.5rem"
  },
  colors: {
    background_light: "#f1e6c3",
    background_dark: "#20252c",
    text_light: "#DDDDDD",
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
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
