import { AboutContainer } from "../../styled-components/Home/AboutContainer";
import weddingPng from "../../assets/wedding.jpg";
import logoSimple from "../../assets/logoSimple.png";

const About = () => {
  return (
    <AboutContainer>
      <img
        src={weddingPng}
        alt="Imagen de jardines aurora"
        className="img-jardines"
      />
      <div>
        <img
          src={logoSimple}
          alt="Logo simple de jardines aurora"
          className="logo-simple"
        />
        <h3>
          Ubicado entre las majestuosas montañas de Mendoza, Jardines Aurora
          representa la fusión entre la elegancia y la belleza natural,
          brindando a tu boda un recuerdo inolvidable.
        </h3>
      </div>
    </AboutContainer>
  );
};

export default About;
