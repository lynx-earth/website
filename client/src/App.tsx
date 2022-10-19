import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import "./App.css";

const theme = {
  fonts: {
    body: "system-ui, sans-serif",
    heading: "sans-serif",
    monospace: "Menlo, monospace",
  },
  colors: {
    background: "#333333",
    text: "#f1f1f1",
    primary: "#f16638",
    secondary: "#6d3597",
  },
};

const Background = styled.main`
  background: ${(props) => props.theme.colors.background};
  height: 100vh;
  display: flex;
`;

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Background>
      </Background>
    </ThemeProvider>
  );
};

export default App;
