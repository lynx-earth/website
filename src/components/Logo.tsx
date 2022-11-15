import styled from "styled-components";
import { Paw } from "@styled-icons/ionicons-outline";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

const Logo = () => {
  return (
    <BrandLogo
      to="/"
      onClick={() => {
        scroll.scrollToTop();
      }}
    >
      <Claw />
      <h1>Lynx</h1>
    </BrandLogo>
  );
};

export default Logo;

const BrandLogo = styled(Link)`
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
