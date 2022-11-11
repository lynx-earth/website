import styled from "styled-components";
import aboutBackground from "../assets/about-background.svg";

const AboutSectionContainer = styled.section`
  position: relative;
  height: 70vh;
  display: flex;
  overflow: hidden;
  background-image: url(${aboutBackground});
  background-repeat: no-repeat;
  background-size: cover;
`;

const AboutImageContainer = styled.article`
  width: 46%;
  margin: auto;
`;

const AboutImage = styled.img`
  width: 70%;
  border-radius: 1rem;
  margin-left: 4rem;
`;

const AboutInfoContainer = styled.article`
  width: 54%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
`;

const AboutInfoTitle = styled.h2`
  width: 70%;
  color: ${(props) => props.theme.colors.tertiary};
  font-size: ${(props) => props.theme.fontSize.h2};
`;

const AboutInfoText = styled.p`
  width: 70%;
  color: ${(props) => props.theme.colors.text_dark};
  font-size: ${(props) => props.theme.fontSize.text};
  line-height: 1.5;
`;

export {
  AboutSectionContainer,
  AboutImageContainer,
  AboutImage,
  AboutInfoContainer,
  AboutInfoTitle,
  AboutInfoText,
};
