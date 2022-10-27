import {HeaderContainer, Logo, Claw, NavMenu, NavMenuLink} from "./Header.style";

const Header = () => {

  return (
    <HeaderContainer>
      <Logo to={"/"}>
        <Claw />
        <h1>Lynx</h1>
      </Logo>
      <NavMenu>
        <NavMenuLink to={"#about"}>About</NavMenuLink>
        <NavMenuLink to={"#solutions"}>Solutions</NavMenuLink>
        <NavMenuLink to={"#contact"}>Contact</NavMenuLink>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;
