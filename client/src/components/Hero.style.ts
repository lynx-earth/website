import styled from "styled-components";
import heroBackground from "../assets/hero-background.svg";

const HeroContainer = styled.main`
  position: relative;
  background-attachment: fixed;
  position: relative;
  height: 100vh;
  display: flex;
  overflow: hidden;

  &::before {
    position: fixed;
    height: 100%;
    width: 100%;
    background-image: url(${heroBackground});
    background-repeat: no-repeat;
    background-size: cover;
    content: "";
    will-change: transform;
    z-index: -1;
  }
`;

const HeroTitleContainer = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
`;

const HeroTitle = styled.h1`
  width: 75%;
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSize.header};
  font-weight: bold;
  margin: auto;
  padding-right: 2rem;

  span {
    color: ${(props) => props.theme.colors.text_light};
  }

  small {
    font-size: 3rem;
  }

  p {
    font-size: ${(props) => props.theme.fontSize.text};
    color: ${(props) => props.theme.colors.text_mid};
  }
`;

const HeroLogoContainer = styled.div`
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroLogo = styled.img`
  height: 90%;
`;

export {
  HeroContainer,
  HeroTitleContainer,
  HeroTitle,
  HeroLogoContainer,
  HeroLogo,
};
