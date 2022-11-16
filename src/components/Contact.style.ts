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
    margin: 0;
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
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    @media (min-width: 768px) {
      width: 80%;
      height: 50vh;
    }
  }

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const GoogleMap = styled.div``;

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
  color: ${(props) => props.theme.colors.text_light};
  font-size: ${(props) => props.theme.fontSize.text};
  padding-top: 2rem;
`;

const ContactInfo = styled.div`
  width: 70%;
  line-height: 2rem;
  color: ${(props) => props.theme.colors.text_light};
  font-size: ${(props) => props.theme.fontSize.text};
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
  GoogleMap,
  ContactInfoContainer,
  Title,
  Address,
  ContactInfo,
  Socials,
};
