import styled from "styled-components";
import aboutBackground from "../assets/about-background1.svg";
import solutionsBackground from "../assets/solutions-background.svg";

const AboutSectionContainer = styled.section`
  position: relative;
  height: 70vh;
  display: flex;
  overflow: hidden;
  background-image: url(${aboutBackground});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 2rem;
  margin: 2rem 10rem 0 10rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
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
  width: 46%;
  margin: auto;
`;

const AboutImage = styled.img`
  width: 75%;
  margin-left: 3rem;
  border-radius: 1rem;
`;

const AboutInfoContainer = styled.article`
  width: 54%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 2rem;
`;

const AboutInfoTitle = styled.h2`
  width: 70%;
  color: ${(props) => props.theme.colors.text_dark};
  font-size: ${(props) => props.theme.fontSize.h2};
  font-weight: bold;
  padding-bottom: 2rem;
`;

const AboutInfoText = styled.p`
  width: 70%;
  color: ${(props) => props.theme.colors.tertiary};
  font-size: ${(props) => props.theme.fontSize.text};
  line-height: 1.5;
  padding-bottom: 1.2rem;
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
