import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";

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

const Container = styled.main`
  background: ${(props) => props.theme.colors.background};
  height: 100vh;
`;

export const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Navbar />
      </Container>
    </ThemeProvider>
  );
};

export default Root;
