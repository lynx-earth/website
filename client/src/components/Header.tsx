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
        <NavMenuLink to={"about"}>About</NavMenuLink>
        <NavMenuLink to={"solutions"}>Solutions</NavMenuLink>
        <NavMenuLink to={"contact"}>Contact</NavMenuLink>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;
