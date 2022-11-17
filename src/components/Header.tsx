import {
  HeaderContainer,
  NavMenu,
  NavMenuLink,
  NavBackground,
  MobileNavMenu,
  MobileNavList,
  MobileNavLink,
  MenuLabel,
  MenuIcon,
} from "./Header.style";
import { useScroll } from "../hooks/useScroll";
import Logo from "./Logo";
import { useContext, useState } from "react";
import { WindowSizeContext } from "../App";

const Header = () => {
  const { isScrolled } = useScroll();
  const [windowWidth] = useContext<number[]>(WindowSizeContext);
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = () => setClicked(!clicked);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Logo />
      {windowWidth < 768 ? (
        <>
          <NavBackground clicked={clicked} />
          <MenuLabel htmlFor="nav-toggle" onClick={handleClick}>
            <MenuIcon clicked={clicked} aria-controls="main-menu" />
          </MenuLabel>

          <MobileNavMenu
            clicked={clicked}
            role="navigation"
            aria-label="Main menu"
          >
            <MobileNavList id="main-menu">
              <li>
                <MobileNavLink
                  onClick={handleClick}
                  to={"about"}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-150}
                >
                  About
                </MobileNavLink>
              </li>
              <li>
                <MobileNavLink
                  onClick={handleClick}
                  to={"solutions"}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-40}
                >
                  Solutions
                </MobileNavLink>
              </li>
              <li>
                <MobileNavLink
                  onClick={handleClick}
                  to={"contact"}
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  Contact
                </MobileNavLink>
              </li>
            </MobileNavList>
          </MobileNavMenu>
        </>
      ) : (
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
      )}
    </HeaderContainer>
  );
};

export default Header;
