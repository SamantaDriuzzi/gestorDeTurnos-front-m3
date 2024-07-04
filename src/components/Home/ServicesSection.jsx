import imgService from "../../assets/servicesSection/service.jpg";
import imgService1 from "../../assets/servicesSection/service1.jpg";
import imgService2 from "../../assets/servicesSection/service2.jpg";
import { ServiceSection } from "../../styled-components/Home/ServiceSection";
import cake from "../../assets/servicesSection/Cake.svg";
import mozo from "../../assets/servicesSection/mozo.svg";
import Projector from "../../assets/servicesSection/Projector.svg";
import rug from "../../assets/servicesSection/rug.svg";
import { IconsContainer } from "../../styled-components/Home/IconsContainer";

export const ServicesSection = () => {
  const photosService = [imgService, imgService1, imgService2];
  const icons = [
    { image: cake, title: "Mesa Dulce" },
    { image: mozo, title: "Servicio de Catering" },
    { image: Projector, title: "Sonido e Iluminacion" },
    { image: rug, title: "Ambientación Personalizada" },
  ];
  return (
    <>
      <ServiceSection>
        {photosService.map((img, index) => (
          <img key={index} src={img} className="img-service" />
        ))}
      </ServiceSection>
      <h2 className="title">Servicios</h2>
      <IconsContainer>
        {icons.map((icon, index) => (
          <div key={index} className="icon-text">
            <img src={icon.image} alt={icon.title} />
            <h4>{icon.title}</h4>
          </div>
        ))}
      </IconsContainer>
    </>
  );
};
