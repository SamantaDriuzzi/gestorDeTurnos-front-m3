const validateCreateAppointment = (formData) => {
  const { date, time } = formData;

  // Convertir la fecha a un objeto Date
  const selectedDate = new Date(date);

  // Verificar si el día seleccionado es de lunes a viernes (días 1 a 5 en JavaScript, donde 0 es domingo)
  const isWeekday = selectedDate.getDay() >= 1 && selectedDate.getDay() <= 5;

  // Verificar si la hora seleccionada está entre las 8 am y las 8 pm
  const selectedHour = parseInt(time.split(":")[0], 10);
  const isWorkingHour = selectedHour >= 8 && selectedHour < 20;

  // Si la fecha y la hora cumplen con las condiciones, retornar true, de lo contrario, retornar false
  return isWeekday && isWorkingHour;
};

export default validateCreateAppointment;
