import {
  AboutSectionContainer,
  AboutImageContainer,
  AboutImage,
  AboutInfoContainer,
  AboutInfoTitle,
  AboutInfoText,
} from "./About.style";
import _aboutData from "../data/about.json";
import { _about } from "../globals";
import space from "../assets/space.jpg";
import { Element } from "react-scroll";

const aboutData = _aboutData as _about[];

const About = () => {
  return (
    <Element name="about">
      <AboutSectionContainer>
        <AboutImageContainer>
          <AboutImage src={space} />
        </AboutImageContainer>
        <AboutInfoContainer>
          <AboutInfoTitle>{aboutData[0].title}</AboutInfoTitle>
          <AboutInfoText>{aboutData[0].text1}</AboutInfoText>
          <AboutInfoText>{aboutData[0].text2}</AboutInfoText>
        </AboutInfoContainer>
      </AboutSectionContainer>
    </Element>
  );
};

export default About;
