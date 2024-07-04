import boda from "../../assets/imgContact/boda.jpg";
import boda1 from "../../assets/imgContact/boda1.jpg";
import boda2 from "../../assets/imgContact/boda2.jpg";
import {
  ContactContainer,
  ContactSectionContainer,
  PhotosContact,
} from "../../styled-components/Home/Contact";
import ubicacIcon from "../../assets/imgContact/ubicacIcon.svg";
import emailIcon from "../../assets/imgContact/emailIcon.svg";
import whatsappIcon from "../../assets/imgContact/whatsappIcon.svg";
import phoneIcon from "../../assets/imgContact/phoneIcon.svg";

const ContactSection = () => {
  const imgContact = [boda, boda1, boda2];

  return (
    <ContactSectionContainer>
      <PhotosContact>
        {imgContact.map((img, index) => (
          <img key={index} src={img} className="img-contact" />
        ))}
      </PhotosContact>

      <h3 className="title-contact">
        Si deseas agendar una boda o necesitas más información, no dudes en
        contactarnos.
      </h3>
      <ContactContainer>
        <div className="icon-container">
          <img src={whatsappIcon} alt="Whatsapp icono" />
          <p>WhatsApp:</p>
          <p> 0351 15 15 15</p>
        </div>
        <div className="icon-container">
          <img src={phoneIcon} alt="Phone icono" />
          <p>Teléfono: </p>

          <p>0351 15 15 15</p>
        </div>

        <div className="icon-container">
          <img src={emailIcon} alt="Email icono" />
          <p>Email: </p>

          <p> jardin@aurora.com</p>
        </div>

        <div className="icon-container">
          <img src={ubicacIcon} alt="Ubicación icono" />
          <p>Dirección: </p>
          <p>
            {" "}
            Alta Montaña, <br></br> Mendoza
          </p>
        </div>
      </ContactContainer>
    </ContactSectionContainer>
  );
};

export default ContactSection;
