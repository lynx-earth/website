import styled from "styled-components";

const ContactSectionContainer = styled.footer`
  position: relative;
  height: 70vh;
  display: flex;
  overflow: hidden;
  justify-content: center;
`;

const GoogleMapContainer = styled.article`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  iframe {
    width: 80%;
    height: 80%;
  }
`;

const GoogleMap = styled.div``;

const ContactInfoContainer = styled.article`
  width: 40%;
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
