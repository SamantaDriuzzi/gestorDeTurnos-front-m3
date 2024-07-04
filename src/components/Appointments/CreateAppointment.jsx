import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import PropTypes from "prop-types";
import { setUserAppointments } from "../../react-toolkit/reducer";
import validateCreateAppointment from "../../helpers/validateCreateAppointment";
import FormCreate from "../../styled-components/Appointments/FormCreateAppoin";

const CreateAppointment = ({ onClose }) => {
  const user = useSelector((state) => state.userActive);
  const appointmentList = useSelector((state) => state.userAppointments);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateCreateAppointment(formData)) {
      console.log("Debería mostrarse una Alert");
      return alert("La fecha u hora seleccionada no son válidas.");
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/appointments/schedule",
        {
          ...formData,
          userId: user.id,
        }
      );
      const newAppointment = {
        id: response.data.id,
        date: response.data.date,
        time: response.data.time,
        userId: response.data.userId,
        status: response.data.status,
      };
      dispatch(setUserAppointments([...appointmentList, newAppointment]));
      return onClose();
    } catch (error) {
      console.error("Error al crear el turno:", error);
    }
  };

  return (
    <FormCreate onSubmit={handleSubmit}>
      <div className="form-container">
        <h3>
          Nuestros horarios de recepcion son de lunes a viernes de 08:00hs a
          20:00hs.
        </h3>

        <div className="form-group">
          <label htmlFor="date">Fecha</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Hora</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <button type="submit">Agendar Turno</button>
        <button type="button" onClick={onClose}>
          Cancelar
        </button>
      </div>
    </FormCreate>
  );
};

CreateAppointment.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default CreateAppointment;
