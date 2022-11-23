import {
  ContactSectionContainer,
  GoogleMapContainer,
  ContactInfoContainer,
  Title,
  Address,
  ContactInfo,
  Email,
  // Socials,
} from "./Contact.style";
import _contactData from "../data/contact.json";
import { _contact } from "../globals";
import { Mail as MailIcon } from "@styled-icons/entypo";
// import { Twitter, Discord } from "@styled-icons/remix-line";
import { Element } from "react-scroll";
// import Logo from "./Logo";

const contactData = _contactData as _contact[];

const Contact = () => {
  return (
    <Element name="contact">
      <ContactSectionContainer>
        <ContactInfoContainer>
          <Title>Contact Us</Title>
          <ContactInfo>
            <MailIcon size={20} />
            &nbsp;&nbsp;
            <Email>{contactData[0].email}</Email>
            {/* <br /> */}
            {/* <Phone size={20} /> */}
            &nbsp;&nbsp;{contactData[0].phone}
          </ContactInfo>
          {/* <Socials>
            <a href={contactData[0].twitter} rel="noreferrer" target="_blank">
              <Twitter size={30} color={"white"} />
            </a>
            <a href={contactData[0].discord} rel="noreferrer" target="_blank">
              <Discord size={30} color={"white"} />
            </a>
          </Socials> */}
          <Address>
            {contactData[0].address_en}
            <br />
            <br />
            {contactData[0].address_jp}
          </Address>
        </ContactInfoContainer>
        <GoogleMapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.7532209740984!2d139.7358407152467!3d35.6830779801939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c7b44042d77%3A0x9f528b602c6bd8b8!2s4-ch%C5%8Dme-3-5%20K%C5%8Djimachi%2C%20Chiyoda%20City%2C%20Tokyo%20102-0083!5e0!3m2!1sen!2sjp!4v1665724574293!5m2!1sen!2sjp"
            title="Lynx address"
            loading="lazy"
          ></iframe>
        </GoogleMapContainer>
      </ContactSectionContainer>
    </Element>
  );
};

export default Contact;
