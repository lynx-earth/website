import styled from "styled-components";
// import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

interface HeaderProps {
  isScrolled: boolean;
}

interface MobileNavProps {
  clicked: boolean;
}

const HeaderContainer = styled.header<HeaderProps>`
  position: fixed;
  z-index: 100;
  width: 100%;
  display: flex;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.body};
  background-color: ${(props) => (props.isScrolled ? "#111111EA" : "")};
  transition: background-color 0.2s;
  padding: 1rem 0 1rem 1rem;

  @media (min-width: 768px) {
    padding: 1rem 0 1rem 5rem;
  }

  @media (min-width: 1390px) {
    padding: 1rem 0 1rem 9rem;
  }
`;

const NavMenu = styled.nav`
  display: flex;
  margin-left: 7rem;
`;

const NavMenuLink = styled(Link)`
  position: relative;
  color: ${(props) => props.theme.colors.text_light};
  font-size: 1.2rem;
  padding: 0.5rem 0;
  text-decoration: none;
  margin-right: 2rem;

  :hover {
    cursor: pointer;
  }

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.primary};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const NavBackground = styled.div<MobileNavProps>`
  position: fixed;
  top: 0.9rem;
  right: 0.9rem;
  background-image: radial-gradient(
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.background_dark}
  );
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;
`;

const MobileNavMenu = styled.nav<MobileNavProps>`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};
  transition: width 0.8s, opacity 0.8s;
`;

const MobileNavList = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;

const MobileNavLink = styled(Link)`
  display: inline-block;
  font-size: 3rem;
  font-weight: 300;
  text-decoration: none;
  color: ${(props) => props.theme.colors.text_light};
  padding: 1rem 2rem;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240%;
  transition: all 0.4s;
  &:hover,
  &:active {
    background-position: 100%;
    color: ${(props) => props.theme.colors.text_dark};
    transform: translateX(1rem);
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
    cursor: pointer;
  }
`;

const MenuLabel = styled.label`
  position: fixed;
  top: 0.9rem;
  right: 0.9rem;
  border-radius: 50%;
  height: 3.5rem;
  width: 3.5rem;
  z-index: 1000;
  background-color: ${(props) => props.theme.colors.primary};
  text-align: center;
  cursor: pointer;
`;

const MenuIcon = styled.span<MobileNavProps>`
  position: relative;
  display: inline-block;
  background-color: ${(props) =>
    props.clicked ? "transparent" : props.theme.colors.text_light};
  width: 2rem;
  height: 3px;
  margin-top: 1.6rem;
  transition: all 0.3s;

  &::before,
  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    left: 0;
    background-color: ${(props) => props.theme.colors.text_light};
    width: 2rem;
    height: 3px;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

export {
  HeaderContainer,
  NavMenu,
  NavMenuLink,
  NavBackground,
  MobileNavMenu,
  MobileNavList,
  MobileNavLink,
  MenuLabel,
  MenuIcon,
};
