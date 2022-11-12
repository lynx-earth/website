import {
  HeaderContainer,
  Logo,
  Claw,
  NavMenu,
  NavMenuLink,
} from "./Header.style";
import { useScroll } from "../hooks/useScroll";
import { animateScroll as scroll } from "react-scroll";

const Header = () => {
  const { isScrolled } = useScroll();

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Logo
        to="/"
        onClick={() => {
          scroll.scrollToTop();
        }}
      >
        <Claw />
        <h1>Lynx</h1>
      </Logo>
      <NavMenu>
        <NavMenuLink
          to={"about"}
          spy={true}
          smooth={true}
          duration={500}
          offset={-98}
        >
          About
        </NavMenuLink>
        <NavMenuLink to={"solutions"} spy={true} smooth={true} duration={500}>
          Solutions
        </NavMenuLink>
        <NavMenuLink to={"contact"} spy={true} smooth={true} duration={1000}>
          Contact
        </NavMenuLink>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;
