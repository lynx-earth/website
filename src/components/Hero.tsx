import _heroData from "../data/landing_page.json";
import { _hero } from "../globals";
import {
  HeroTitle,
  HeroSubtitle,
  HeroContainer,
  HeroLogo,
  HeroTitleContainer,
  HeroLogoContainer,
} from "./Hero.style";
import Logo from "../assets/lynx-face-transparent.png";

const heroData = _heroData as _hero[];

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitleContainer>
        <HeroTitle>
          {heroData[0].headline[0]}
          <br />
          <span>
            {heroData[0].headline[1]}
            <small>2</small>
          </span>
          <HeroSubtitle>{heroData[0].text}</HeroSubtitle>
        </HeroTitle>
      </HeroTitleContainer>
      <HeroLogoContainer>
        <HeroLogo src={Logo} />
      </HeroLogoContainer>
    </HeroContainer>
  );
};

export default Hero;
