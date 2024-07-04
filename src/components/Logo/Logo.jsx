import { LogoContainer } from "../../styled-components/Navbar/LogoContainer";
import logo from "../../assets/logoGral.png";
import PropTypes from "prop-types";

const Logo = ({ width }) => {
  return (
    <LogoContainer width={width}>
      <img src={logo} alt="Logo de Jardines Aurora" />
    </LogoContainer>
  );
};

Logo.propTypes = {
  width: PropTypes.string,
};
export default Logo;
