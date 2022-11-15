import { HeaderContainer, NavMenu, NavMenuLink } from "./Header.style";
import { useScroll } from "../hooks/useScroll";
import Logo from "./Logo";

const Header = () => {
  const { isScrolled } = useScroll();

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Logo />

      <NavMenu>
        <NavMenuLink
          to={"about"}
          spy={true}
          smooth={true}
          duration={500}
          offset={-150}
        >
          About
        </NavMenuLink>
        <NavMenuLink
          to={"solutions"}
          spy={true}
          smooth={true}
          duration={500}
          offset={-40}
        >
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
