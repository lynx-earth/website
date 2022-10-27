import _heroData from "../data/landing_page.json";
import { _hero } from "../globals";
import {
  HeroTitle,
  HeroContainer,
  HeroLogo,
  HeroTitleContainer,
  HeroLogoContainer,
} from "./Hero.style";
import Logo from "../assets/lynx_face_transparent.png";
import Header from "./Header";

const heroData = _heroData as _hero[];

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitleContainer>
        <Header />
        <HeroTitle>
          {heroData[0].headline[0]}
          <br />
          <span>
            {heroData[0].headline[1]}
            <small>2</small>
          </span>
          <p>{heroData[0].text}</p>
        </HeroTitle>
      </HeroTitleContainer>
      <HeroLogoContainer>
        <HeroLogo src={Logo} />
      </HeroLogoContainer>
    </HeroContainer>
  );
};

export default Hero;
