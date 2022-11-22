import styled from "styled-components";
// import { Paw } from "@styled-icons/ionicons-outline";
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
      {/* <Claw /> */}
      <h1>Lynx</h1>
    </BrandLogo>
  );
};

export default Logo;

const BrandLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  /* TO BE REMOVED */
  padding-left: 1rem;

  h1 {
    margin-left: 0.5rem;
    font-size: 1.5rem;
    text-align: center;
    color: ${(props) => props.theme.colors.text_light};
    background: linear-gradient(0.25turn, #6d3597, #e94863, #f16638);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bolder;
    padding-bottom: 0.6rem;

    /* Small Screens & Laptops */
    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }

  :hover {
    cursor: pointer;
  }
`;

// const Claw = styled(Paw)`
//   width: 3rem;
//   height: 3rem;
//   color: ${(props) => props.theme.colors.primary};

//   /* Small Screens & Laptops */
//   @media (min-width: 768px) {
//     width: 4rem;
//     height: 4rem;
//   }
// `;
