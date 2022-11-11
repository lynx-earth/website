import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Header from "./components/Header";
import { _theme } from "./globals";
import Home from "./pages/Home";

const GlobalStyle = createGlobalStyle`
  ${reset};
  html {
    box-sizing: border-box;
  }
  body {
    font-family: system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    margin: 0;
    padding: 0;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  a {
    text-decoration: none;
  }
`;

const theme: _theme = {
  fonts: {
    body: "system-ui, sans-serif",
    heading: "sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSize: {
    h1: "5rem",
    h2: "3rem",
    h3: "1.5rem",
    header_caption: "1.5rem",
    text: "1rem",
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
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
