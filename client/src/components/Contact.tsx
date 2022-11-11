import {
  ContactSectionContainer,
  GoogleMapContainer,
  GoogleMap,
  ContactInfoContainer,
  Title,
  Address,
  ContactInfo,
  Socials,
} from "./Contact.style";
import _contactData from "../data/contact.json";
import { _contact } from "../globals";
import { Mail, Phone } from "@styled-icons/entypo";
import { Twitter, Discord } from "@styled-icons/remix-line";

const contactData = _contactData as _contact[];

const Contact = () => {
  return (
    <ContactSectionContainer>
      <ContactInfoContainer>
        <Title>Contact Us</Title>
        <ContactInfo>
          <Mail size={20} />
          &nbsp;&nbsp;{contactData[0].email}
          <br />
          <Phone size={20} />
          &nbsp;&nbsp;{contactData[0].phone}
        </ContactInfo>
        <Socials>
          <a href={contactData[0].twitter} rel="noreferrer" target="_blank">
            <Twitter size={30} color={"white"} />
          </a>
          <a href={contactData[0].discord} rel="noreferrer" target="_blank">
            <Discord size={30} color={"white"} />
          </a>
        </Socials>
        <Address>
          {contactData[0].address_en}
          <br />
          <br />
          {contactData[0].address_jp}
        </Address>
      </ContactInfoContainer>
      <GoogleMapContainer></GoogleMapContainer>
    </ContactSectionContainer>
  );
};

export default Contact;
