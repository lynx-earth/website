import styled from "styled-components";
import { Mail, Phone } from "@styled-icons/entypo";

const ContactSectionContainer = styled.footer`
  position: relative;
  height: 60vh;
  display: flex;
  overflow: hidden;
`;

const GoogleMapContainer = styled.article`
  width: 50%;
  background-color: green;
`;

const GoogleMap = styled.div``;

const ContactInfoContainer = styled.article`
  width: 50%;
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
`;

const Address = styled.p`
  display: flex;
  color: ${(props) => props.theme.colors.text_light};
  font-size: ${(props) => props.theme.fontSize.text};
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
