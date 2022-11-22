import styled from "styled-components";

const ContactSectionContainer = styled.footer`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

  @media (min-width: 768px) {
    margin: 3rem 0;
    height: 75vh;
    flex-direction: row;
  }
`;

const GoogleMapContainer = styled.article`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  iframe {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

    @media (min-width: 768px) {
      width: 80%;
      height: 50vh;
    }
  }

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const ContactInfoContainer = styled.article`
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.h3`
  width: 70%;
  color: ${(props) => props.theme.colors.text_light};
  font-size: ${(props) => props.theme.fontSize.h3};
  font-weight: bold;
`;

const Address = styled.p`
  width: 70%;
  display: flex;
  line-height: 1.5rem;
  color: ${(props) => props.theme.colors.text_light};
  font-size: ${(props) => props.theme.fontSize.text};
  padding-top: 2rem;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  line-height: 2rem;
  color: ${(props) => props.theme.colors.text_light};
  font-size: ${(props) => props.theme.fontSize.text};
`;

const Email = styled.a.attrs((props) => ({
  href: "mailto:contact@lynx.earth",
}))`
  position: relative;
  color: inherit;

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

const Socials = styled.div`
  width: 70%;
  display: flex;
  gap: 0.5rem;
  color: ${(props) => props.theme.colors.text_light};
  font-size: ${(props) => props.theme.fontSize.text};
`;

export {
  ContactSectionContainer,
  GoogleMapContainer,
  ContactInfoContainer,
  Title,
  Address,
  ContactInfo,
  Email,
  Socials,
};
