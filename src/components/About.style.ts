import styled from "styled-components";
import aboutBackground from "../assets/about-background2.svg";
import mobileAboutBackground from "../assets/about-background3.svg";
import solutionsBackground from "../assets/solutions-background.svg";

const AboutSectionContainer = styled.section`
  position: relative;
  height: 90vh;
  display: flex;
  flex-direction: column-reverse;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin: 1rem;

  ::before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    background-image: url(${mobileAboutBackground});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }

  @media (min-width: 768px) {
    height: 70vh;
    flex-direction: row;
    margin: 2rem 10rem 0 10rem;
    border-radius: 2rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    ::before {
      position: absolute;
      width: 100%;
      height: 100%;
      content: "";
      background-image: url(${aboutBackground});
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
`;

const Underlay = styled.div`
  position: absolute;
  top: 150%;
  width: 100%;
  height: 135%;
  z-index: -1;
  background-color: ${(props) => props.theme.colors.background_light};
  background-image: url(${solutionsBackground});
  background-repeat: no-repeat;
  background-size: cover;
`;

const AboutImageContainer = styled.article`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-basis: 46%;
    margin: auto;
  }
`;

const AboutImage = styled.img`
  width: 75%;
  border-radius: 1rem;

  @media (min-width: 768px) {
    margin-left: 3rem;
  }
`;

const AboutInfoContainer = styled.article`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  @media (min-width: 768px) {
    width: 48%;
    padding-left: 4rem;
  }
`;

const AboutInfoTitle = styled.h2`
  width: 70%;
  color: ${(props) => props.theme.colors.text_dark};
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    width: 80%;
    font-size: ${(props) => props.theme.fontSize.h2};
    text-align: start;
  }
`;

const AboutInfoText = styled.p`
  width: 100%;
  color: ${(props) => props.theme.colors.tertiary};
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    width: 80%;
    font-size: ${(props) => props.theme.fontSize.text};
    margin-bottom: 1.2rem;
  }
`;

export {
  AboutSectionContainer,
  AboutImageContainer,
  AboutImage,
  AboutInfoContainer,
  AboutInfoTitle,
  AboutInfoText,
  Underlay,
};
