import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { GlobalStyle } from "./styled-components/GlobalStyle";
import Login from "./views/Login";
import Register from "./views/Register";
import MyAppointments from "./views/MyAppointments";
import { Home } from "./views/home";
import { Routes, Route } from "react-router-dom";
import FooterSection from "./components/Footer/Footer";
import { Contact } from "./views/Contact";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MisVisitas" element={<MyAppointments />} />
        <Route path="/Registro" element={<Register />} />
        <Route path="/Ingreso" element={<Login />} />
        <Route path="/Contacto" element={<Contact />} />
      </Routes>
      <FooterSection />
    </div>
  );
}

export default App;
