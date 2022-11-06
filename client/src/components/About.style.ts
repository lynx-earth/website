import styled from "styled-components";

const AboutSectionContainer = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

const AboutImageContainer = styled.div`
  width: 50%;
  background: ${(props) => props.theme.colors.background_dark};
`;

const AboutInfoContainer = styled.div`
  width: 50%;
  background: ${(props) => props.theme.colors.background_light};
  display: flex;
  flex-direction: column;
`;

export { AboutSectionContainer, AboutImageContainer, AboutInfoContainer };
