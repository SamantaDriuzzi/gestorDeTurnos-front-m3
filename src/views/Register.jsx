import { useState } from "react";
import axios from "axios";
import validate from "../helpers/validate";
import PasswordChecklist from "react-password-checklist";
import Form from "../styled-components/Register/Form";
import logoSimple from "../assets/logoSimple.png";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
  });
  const [passwordAgain, setPasswordAgain] = useState("");
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);

    const newErrors = validate({ fieldName: name, fieldValue: value }, errors);

    setErrors(newErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;
    const newErrors = {};

    Object.keys(form).forEach((fieldName) => {
      const fieldErrors = validate(
        { fieldName, fieldValue: form[fieldName] },
        newErrors
      );
      if (Object.keys(fieldErrors).length > 0) {
        valid = false;
        newErrors[fieldName] = fieldErrors[fieldName];
      }
    });

    setErrors(newErrors);

    if (valid) {
      axios
        .post("http://localhost:3000/users/register", form)
        .then((response) => {
          alert(response.data.message || "Registro exitoso");
        })
        .catch((error) => {
          alert(error.response.data.message || "Error al registrar");
        });
    } else {
      alert("Hay errores en el formulario.");
    }
  };

  const formFields = [
    { label: "Nombre:", name: "name", type: "text", required: true },
    { label: "Email:", name: "email", type: "email", required: true },
    {
      label: "Fecha de nacimiento:",
      name: "birthdate",
      type: "date",
      required: true,
    },
    { label: "DNI:", name: "nDni", type: "text", required: true },
    { label: "Usuario:", name: "username", type: "text", required: true },
    {
      label: "Contraseña:",
      name: "password",
      type: "password",
      required: true,
    },
  ];
  const getMinDate = () => {
    const today = new Date();
    const minDate = new Date(today);
    minDate.setFullYear(today.getFullYear() - 100);
    return minDate.toISOString().split("T")[0];
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div className="title-container">
        <img src={logoSimple} alt="Logo de Jardines Aurora" width="200px" />
        <h1>Registrate en nuestra página para obtener acceso a tus visitas</h1>
      </div>

      <div className="form-container">
        {formFields.map((field) => (
          <div key={field.name} className="form-group">
            <label htmlFor={field.name}>{field.label}</label>

            {field.type === "date" ? (
              <input
                type={field.type}
                name={field.name}
                id={field.name}
                value={form[field.name]}
                onChange={handleInputChange}
                min={getMinDate()}
                max={new Date().toISOString().split("T")[0]}
                required={field.required}
                className="form-imput"
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                id={field.name}
                value={form[field.name]}
                onChange={handleInputChange}
                required={field.required}
                className="form-imput"
              />
            )}

            {errors[field.name] && (
              <p style={{ color: "red" }}>{errors[field.name]}</p>
            )}
          </div>
        ))}

        <div className="form-group">
          <label htmlFor="repeatPassword">Repetir contraseña:</label>
          <input
            type="password"
            name="repeatPassword"
            id="repeatPassword"
            onChange={(e) => setPasswordAgain(e.target.value)}
            className="form-imput"
          />
        </div>
        <div>
          <PasswordChecklist
            rules={["minLength", "specialChar", "number", "capital", "match"]}
            minLength={8}
            value={form.password}
            valueAgain={passwordAgain}
            messages={{
              minLength: "La contraseña tiene más de 8 caracteres.",
              specialChar: "La contraseña tiene caracteres especiales.",
              number: "La contraseña tiene un número.",
              capital: "La contraseña tiene una letra mayúscula.",
              match: "Las contraseñas coinciden.",
            }}
          />
        </div>
        <button
          type="submit"
          className="form-button"
          disabled={
            Object.keys(errors).length > 0 || form.password !== passwordAgain
          }
        >
          Registrarse
        </button>
      </div>
    </Form>
  );
};

export default Register;
