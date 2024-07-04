import clipsHome from "../helpers/clipsHome";
import ClipsHome from "../components/Home/ClipsHome";
import About from "../components/Home/About";
import { ServicesSection } from "../components/Home/ServicesSection";

export const Home = () => {
  return (
    <div>
      <ClipsHome clips={clipsHome} />
      <About />
      <ServicesSection />
    </div>
  );
};
