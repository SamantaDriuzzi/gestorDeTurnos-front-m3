import linkedin from "../../assets/footer/linkedin.svg";
import github from "../../assets/footer/github.svg";
import { Footer } from "../../styled-components/Footer/Footer";

const FooterSection = () => {
  return (
    <Footer>
      <div>
        Creado por <span>Samanta Driuzzi</span> Estudiante en <span>Henry</span>
      </div>
      <div className="redes-sociales">
        <a href="https://www.linkedin.com/in/samanta-driuzzi/">
          <img src={linkedin} alt="icono de Linkedin" />
        </a>
        <a href="https://github.com/SamantaDriuzzi">
          <img src={github} alt="Icono de Github" />
        </a>
      </div>
    </Footer>
  );
};

export default FooterSection;
