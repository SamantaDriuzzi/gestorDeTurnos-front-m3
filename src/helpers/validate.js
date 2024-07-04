function validate({ fieldName, fieldValue }, errors) {
  const newErrors = { ...errors };

  if (fieldValue) {
    delete newErrors[fieldName];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (fieldName === "email" && !emailRegex.test(fieldValue)) {
      newErrors[fieldName] = "El formato del email no es válido";
    }

    if (
      (fieldName === "name" || fieldName === "username") &&
      fieldValue.length < 3
    ) {
      newErrors[fieldName] = "Debe tener al menos 3 caracteres";
    }
  } else {
    newErrors[fieldName] = "Este campo es requerido";
  }

  return newErrors;
}

export default validate;
