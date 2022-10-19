import {Nav, Logo, Claw, Menu, MenuLink} from "./Navbar.style";

const Navbar = () => {
  return (
    <Nav>
      <Logo to={"/"}>
        <Claw />
        <h1>Lynx</h1>
      </Logo>
      <Menu>
        <MenuLink to={"#about"}>About</MenuLink>
        <MenuLink to={"#solutions"}>Solutions</MenuLink>
        <MenuLink to={"#contact"}>Contact</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
