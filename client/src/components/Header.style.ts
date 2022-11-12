import styled from "styled-components";
import { Paw } from "@styled-icons/ionicons-outline";
// import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

interface HeaderContainerProps {
  isScrolled: boolean;
}

const HeaderContainer = styled.header<HeaderContainerProps>`
  position: fixed;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.body};
  gap: 7rem;
  padding: 1rem 0 1rem 7rem;
  background-color: ${(props) => (props.isScrolled ? "#111111EA" : "")};
  transition: background-color 0.2s;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;

  h1 {
    font-size: 2.5rem;
    text-align: center;
    color: ${(props) => props.theme.colors.text_light};
    font-weight: bolder;
  }

  :hover {
    cursor: pointer;
  }
`;

const Claw = styled(Paw)`
  width: 4rem;
  height: 4rem;
  color: ${(props) => props.theme.colors.primary};
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavMenuLink = styled(Link)`
  position: relative;
  color: ${(props) => props.theme.colors.text_light};
  font-size: 1.2rem;
  padding: 0.5rem 0;
  text-decoration: none;

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

export { HeaderContainer, Logo, Claw, NavMenu, NavMenuLink };
