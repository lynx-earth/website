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
  text-decoration: none;

  h1 {
    margin-left: 0.5rem;
    font-size: 1.5rem;
    text-align: center;
    color: ${(props) => props.theme.colors.text_light};
    font-weight: bolder;

    /* Small Screens & Laptops */
    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }

  :hover {
    cursor: pointer;
  }
`;

const Claw = styled(Paw)`
  width: 3rem;
  height: 3rem;
  color: ${(props) => props.theme.colors.primary};

  /* Small Screens & Laptops */
  @media (min-width: 768px) {
    width: 4rem;
    height: 4rem;
  }
`;
