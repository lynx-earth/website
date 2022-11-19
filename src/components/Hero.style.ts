import styled from "styled-components";
import heroBackground from "../assets/hero-background.svg";

const HeroContainer = styled.main`
  position: relative;
  height: 120vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  /* Small Screens & Laptops */
  @media (min-width: 768px) {
    height: 150vh;
    flex-direction: column;
  }

  @media (min-width: 913px) {
    height: 110vh;
    flex-direction: row;
  }

  @media (min-height: 1180px) {
    height: 120vh;
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

  @media (min-width: 913px) {
    flex-basis: 50%;
    margin-left: 5rem;
    align-items: center;
    text-align: start;
    justify-content: start;
  }

  @media (min-width: 1390px) {
    margin-left: 10rem;
  } ;
`;

const HeroTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
  font-size: 2rem;
  padding: 0 1rem;

  span {
    color: ${(props) => props.theme.colors.text_light};
  }

  small {
    font-size: 2rem;
  }

  @media (min-width: 281px) {
    padding: 0 2rem;
    font-size: ${(props) => props.theme.fontSize.h2};
  }

  @media (min-width: 768px) {
    padding: 0 10rem;
    font-size: 4rem;
  }

  @media (min-width: 913px) {
    padding: 0;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }

  @media (min-width: 1330px) {
    width: 80%;
    padding: 0;
    font-size: ${(props) => props.theme.fontSize.h1};
    flex-direction: row;
  }
`;

const HeroSubtitle = styled.p`
  padding-top: 2rem;
  line-height: 2rem;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text_mid};
  font-weight: normal;

  @media (min-width: 281px) {
    font-size: 1.3rem;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroLogoContainer = styled.div`
  flex-basis: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const HeroLogo = styled.img`
  position: absolute;
  height: 110%;
  top: -8%;

  @media (min-width: 768px) {
    height: 170%;
    top: -50%;
  }

  @media (min-width: 821px) {
    height: 170%;
    top: -40%;
  }

  @media (min-width: 913px) {
    height: 70%;
    top: 10%;
    right: -20%;
  }

  @media (min-width: 1025px) {
    height: 80%;
    top: 5%;
    right: -10%;
  }

  @media (min-width: 1240px) {
    height: 90%;
    top: 0;
    right: -10%;
  }

  @media (min-width: 1330px) {
    height: 100%;
    top: -5%;
    right: -10%;
  }

  @media (min-height: 1180px) {
    height: 160%;
  }
`;

export {
  HeroContainer,
  HeroTitleContainer,
  HeroTitle,
  HeroSubtitle,
  HeroLogoContainer,
  HeroLogo,
};
