import styled from "styled-components";
import { Paw } from "@styled-icons/ionicons-outline";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  height: 7rem;
  display: flex;
  align-items: center;
  padding-left: 2rem;
  background: ${(props) => props.theme.colors.background};
`;

const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;

  h1 {
    font-size: 2.5rem;
    text-align: center;
    color: ${(props) => props.theme.colors.text};
    font-weight: bolder;
  }
`;

const Claw = styled(Paw)`
  width: 4rem;
  height: 4rem;
  color: ${(props) => props.theme.colors.primary};
`;

const Menu = styled.div`
  display: flex;
  gap: 4rem;
  margin: auto;
`;

const MenuLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.8rem;
  text-decoration: none;
`;

export { Nav, Logo, Claw, Menu, MenuLink };
