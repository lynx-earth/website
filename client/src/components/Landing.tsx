import _landingData from "../data/landing_page.json";
import { _landing } from "../globals";
import { Header, HeaderContainer, HeaderLogo } from "./Landing.style";
import Logo from "../assets/lynx_face_transparent.png";

const landingData = _landingData as _landing[];

const Landing = () => {
  return (
    <HeaderContainer>
      <Header>
        {landingData[0].headline[0]}
        <br />
        <span>
          {landingData[0].headline[1]}
          <small>2</small>
        </span>
        <p>{landingData[0].text}</p>
      </Header>
      <HeaderLogo src={Logo} />
    </HeaderContainer>
  );
};

export default Landing;
