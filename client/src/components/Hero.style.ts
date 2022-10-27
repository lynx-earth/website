import styled from "styled-components";

const HeroContainer = styled.main`
  position: relative;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

const HeroTitleContainer = styled.div`
  width: 50vw;
  background: ${(props) => props.theme.colors.background_light};
  display: flex;
  flex-direction: column;
`;

const HeroTitle = styled.h1`
  width: 65%;
  color: ${(props) => props.theme.colors.text_dark};
  font-size: ${(props) => props.theme.fontSize.header};
  font-weight: bold;
  margin: auto;
  padding-right: 2rem;

  span {
    color: ${(props) => props.theme.colors.primary};
  }

  small {
    font-size: 3rem;
  }

  p {
    font-size: ${(props) => props.theme.fontSize.text};
  }
`;

const HeroLogoContainer = styled.div`
  width: 50vw;
  background: ${(props) => props.theme.colors.background_dark};
`;

const HeroLogo = styled.img`
  height: 100%;
`;

export {
  HeroContainer,
  HeroTitleContainer,
  HeroTitle,
  HeroLogoContainer,
  HeroLogo,
};
