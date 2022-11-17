import styled from "styled-components";
import aboutBackground from "../assets/about-background2.svg";
import mobileAboutBackground from "../assets/about-background3.svg";
import solutionsBackground from "../assets/solutions-background.svg";

const AboutSectionContainer = styled.section`
  position: relative;
  height: 110vh;
  display: flex;
  flex-direction: column-reverse;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin: 1rem;
  background-color: #f5f5f5;

  @media (min-width: 768px) {
    height: 110vh;
    margin: 4rem;
  }

  @media (min-width: 921px) {
    height: 70vh;
    flex-direction: row;
    margin: 2rem 4rem 0 4rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    margin: 2rem 10rem 0 10rem;
  }
`;

const Underlay = styled.div`
  position: absolute;
  top: 150%;
  width: 100%;
  height: 260%;
  z-index: -1;
  background-color: ${(props) => props.theme.colors.background_light};
  background-image: url(${solutionsBackground});
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 321px) and (min-height: 736px) {
    height: 285%;
  }

  @media (min-width: 321px) and (min-height: 844px) {
    height: 255%;
  }

  /* Surface Duo */
  @media (min-width: 540px) and (min-height: 720px) {
    height: 320%;
  }

  @media (min-width: 768px) {
    height: 135%;
  }

  /* iPad Air */
  @media (min-height: 1180px) {
    height: 270%;
  }

  /* Surface Pro 7 */
  @media (min-height: 912px) {
    height: 260%;
  }
`;

const AboutImageContainer = styled.article`
  position: relative;
  flex-basis: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ::before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    background-image: url(${mobileAboutBackground});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
  }

  @media (min-width: 921px) {
    ::before {
      background-image: url(${aboutBackground});
    }
  }
`;

const AboutImage = styled.img`
  width: 75%;
  border-radius: 1rem;
  z-index: 2;

  @media (min-width: 821px) {
    margin-left: 0;
  }
`;

const AboutInfoContainer = styled.article`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  @media (min-width: 821px) {
    flex-basis: 50%;
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
  font-size: 0.7rem;
  line-height: 1.5;
  margin-bottom: 1rem;

  @media (min-width: 281px) {
    width: 90%;
    font-size: 0.8rem;
    margin-bottom: 1.2rem;
  }

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
