import { useSelector } from "react-redux";
import { NavContainer } from "../../styled-components/Navbar/NavContainer";
import { UnorderedList } from "../../styled-components/Navbar/UnorderedList";
import { ListItem } from "../../styled-components/Navbar/ListItem";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

function Navbar() {
  const user = useSelector((state) => state.userActive);

  const secciones = [
    { label: "Los Jardines", path: "/", condition: true },
    { label: "Mis visitas", path: "/MisVisitas", condition: user.name },
    { label: "Contacto", path: "/Contacto", condition: true },
    { label: "Registrarse", path: "/Registro", condition: true },
    { label: "Ingreso", path: "/Ingreso", condition: true },
  ];

  return (
    <NavContainer>
      <Logo width="90px" />
      <UnorderedList>
        {secciones.map((seccion) =>
          seccion.condition ? (
            <ListItem key={seccion.label}>
              <Link to={seccion.path}>{seccion.label}</Link>
            </ListItem>
          ) : null
        )}
      </UnorderedList>
    </NavContainer>
  );
}

export default Navbar;
