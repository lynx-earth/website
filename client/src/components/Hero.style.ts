import styled from "styled-components";
import heroBackground from "../assets/hero-background.svg";

const HeroContainer = styled.main`
  position: relative;
  height: 110vh;
  display: flex;
  overflow: hidden;

  &::before {
    position: fixed;
    height: 100%;
    width: 100%;
    background-image: url(${heroBackground});
    background-repeat: no-repeat;
    background-size: cover;
    will-change: transform;
    z-index: -1;
    content: "";
  }
`;

const HeroTitleContainer = styled.div`
  width: 50vw;
  margin: auto;
`;

const HeroTitle = styled.h1`
  width: 75%;
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSize.h1};
  font-weight: bold;
  margin-left: 10rem;

  span {
    color: ${(props) => props.theme.colors.text_light};
  }

  small {
    font-size: 3rem;
  }

  p {
    padding-top: 2rem;
    line-height: 2rem;
    font-size: ${(props) => props.theme.fontSize.header_caption};
    color: ${(props) => props.theme.colors.text_mid};
    font-weight: normal;
  }
`;

const HeroLogoContainer = styled.div`
  position: relative;
  width: 50vw;
`;

const HeroLogo = styled.img`
  position: absolute;
  top: -10%;
  right: 5%;
  height: 100%;
`;

export {
  HeroContainer,
  HeroTitleContainer,
  HeroTitle,
  HeroLogoContainer,
  HeroLogo,
};
