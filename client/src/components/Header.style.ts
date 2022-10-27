import styled from "styled-components";
import { Paw } from "@styled-icons/ionicons-outline";
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: ${(props) => props.theme.fonts.body};
`;

const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;

  h1 {
    font-size: 2.5rem;
    text-align: center;
    color: ${(props) => props.theme.colors.text_dark};
    font-weight: bolder;
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

const NavMenuLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.text_dark};
  font-size: 1.2rem;
  padding: 0.5rem 0;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  }
`;

export { HeaderContainer, Logo, Claw, NavMenu, NavMenuLink };
