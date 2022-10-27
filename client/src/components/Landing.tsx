import _landingData from "../data/landing_page.json";
import { _landing } from "../globals";
import {
  HeroTitle,
  HeroContainer,
  HeroLogo,
  HeroTitleContainer,
  HeroLogoContainer,
} from "./Landing.style";
import Logo from "../assets/lynx_face_transparent.png";
import Header from "./Header";

const landingData = _landingData as _landing[];

const Landing = () => {
  return (
    <HeroContainer>
      <HeroTitleContainer>
        <Header />
        <HeroTitle>
          {landingData[0].headline[0]}
          <br />
          <span>
            {landingData[0].headline[1]}
            <small>2</small>
          </span>
          <p>{landingData[0].text}</p>
        </HeroTitle>
      </HeroTitleContainer>
      <HeroLogoContainer>
        <HeroLogo src={Logo} />
      </HeroLogoContainer>
    </HeroContainer>
  );
};

export default Landing;
