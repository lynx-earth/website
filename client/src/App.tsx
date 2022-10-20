import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
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
    background: "#333333",
    text: "#f1f1f1",
    primary: "#f16638",
    secondary: "#6d3597",
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
