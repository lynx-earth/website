import styled from "styled-components";
import aboutBackground from "../assets/about-background4.svg";
import mobileAboutBackground from "../assets/about-background3.svg";

const AboutSectionContainer = styled.section`
  position: relative;
  height: 80vh;
  z-index: -1;
`;

const AboutSection = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  margin: 1rem;
  background-color: ${(props) => props.theme.colors.background_light};

  @media (min-width: 768px) {
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

  @media (min-width: 1920px) {
    margin: 2rem 15rem 0 15rem;
  }
`;

const Underlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  background-color: ${(props) => props.theme.colors.background_light};
  z-index: -1;
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
    background-attachment: fixed;
    z-index: 1;
  }

  @media (min-width: 921px) {
    ::before {
      background-image: url(${aboutBackground});
    }
  }
`;

const AboutImage = styled.img.attrs({
  loading: "lazy",
})`
  width: 75%;
  border-radius: 1rem;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

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

  @media (min-width: 1920px) {
    padding: 2rem;
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
  AboutSection,
  AboutImageContainer,
  AboutImage,
  AboutInfoContainer,
  AboutInfoTitle,
  AboutInfoText,
  Underlay,
};
