import styled from "styled-components";

const Container = styled.main`
  background: ${(props) => props.theme.colors.background};
  height: 100vh;
`;

const Landing = () => {
  return <Container>Landing</Container>;
};

export default Landing;
