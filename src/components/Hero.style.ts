import styled from "styled-components";
import heroBackground from "../assets/hero-background.svg";

const HeroContainer = styled.main`
  position: relative;
  height: 120vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  /* Small Screens & Laptops */
  @media (min-width: 1330px) {
    height: 110vh;
    flex-direction: column;
  }

  /* Desktops & Large Screen */
  @media (min-width: 1330px) {
    height: 110vh;
    flex-direction: row;
  }

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
  display: flex;
  flex-basis: 35%;
  margin-top: 5rem;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-basis: 50%;
    justify-content: start;
    align-items: center;
    margin-left: 10rem;
    text-align: start;
  } ;
`;

const HeroTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSize.h2};
  padding: 0 1rem;

  span {
    color: ${(props) => props.theme.colors.text_light};
  }

  small {
    font-size: 2rem;
  }

  p {
    padding-top: 2rem;
    line-height: 2rem;
    font-size: 1.3rem;
    color: ${(props) => props.theme.colors.text_mid};
    font-weight: normal;
  }

  @media (min-width: 768px) {
    width: 80%;
    padding: 0;
    font-size: ${(props) => props.theme.fontSize.h1};
    flex-direction: row;

    small {
      font-size: 3rem;
    }

    p {
      font-size: ${(props) => props.theme.fontSize.header_caption};
    }
  }
`;

const HeroLogoContainer = styled.div`
  flex-basis: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-basis: 50%;
  }
`;

const HeroLogo = styled.img`
  position: absolute;
  height: 110%;
  top: -8%;

  @media (min-width: 768px) {
    top: -5%;
    right: -10%;
    height: 100%;
  }
`;

export {
  HeroContainer,
  HeroTitleContainer,
  HeroTitle,
  HeroLogoContainer,
  HeroLogo,
};
