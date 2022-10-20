import styled from "styled-components";

const HeaderContainer = styled.header`
  position: relative;
  background: ${(props) => props.theme.colors.background};
  height: 90vh;
  display: flex;
  overflow: hidden;
`;

const Header = styled.h1`
  width: 45%;
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSize.header};
  font-weight: bold;
  margin: 10rem 0 0 8rem;

  span {
    color: ${(props) => props.theme.colors.text};
  }

  small {
    font-size: 3rem;
  }

  p {
    font-size: ${(props) => props.theme.fontSize.text};
  }
`;

const HeaderLogo = styled.img`
  position: absolute;
  height: 145%;
  top: -9rem;
  right: -17rem;
`;

export { HeaderContainer, Header, HeaderLogo };
