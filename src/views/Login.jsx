import axios from "axios";
import { useState } from "react";
import Form from "../styled-components/Login/Login";
import logoSimple from "../assets/logoSimple.png";
import { useDispatch } from "react-redux";
import { setUserActive } from "../react-toolkit/reducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const formFields = [
    {
      name: "username",
      type: "username",
      placeholder: "username",
      label: "Usuario:",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Contraseña:",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/users/login", form)
      .then((response) => {
        if (response.data.login) {
          alert("Login exitoso");
          dispatch(setUserActive(response.data.user));
          setForm({ username: "", password: "" });
        } else {
          alert("Login exitoso pero sin datos de usuario");
        }
      })
      .catch((error) => {
        alert(error.response.data.message || "Error al iniciar sesión");
      });
    setTimeout(() => navigate("/"), 1000);
  };

  return (
    <Form>
      <div className="form-container">
        <div className="title-container">
          <img src={logoSimple} alt="" width={"90px"} />
          <h1>Jardines Aurora</h1>
        </div>

        {formFields.map((field) => (
          <div key={field.name} className="form-group">
            <label htmlFor={field.name}>{field.label}</label>
            <input
              key={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={form[field.name]}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
        ))}

        <button
          type="submit"
          onClick={handleSubmit}
          disabled={!form.username || !form.password}
          className="form-button"
        >
          Ingresar
        </button>
      </div>
    </Form>
  );
};

export default Login;
