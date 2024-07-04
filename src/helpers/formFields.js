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

export default formFields;