import PropTypes from "prop-types";
import logosimple from "../../assets/logoSimple.png";
import { CardContainer } from "../../styled-components/Appointments/CardContainer";
import { useDispatch } from "react-redux";
import axios from "axios";
import { cancelAppointmentAction } from "../../react-toolkit/reducer";
import ModalAppointment from "./ModalAppointment";
import { useState } from "react";

const Appointment = ({ time, date, status, id }) => {
  const dispatch = useDispatch();
  const [isCancelled, setIsCancelled] = useState(status !== "active");
  const cancelAppointment = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/appointments/cancel/${id}`
      );
      console.log(response);
      dispatch(cancelAppointmentAction(id));
      setIsCancelled(true);
    } catch (error) {
      console.log(error);
    }
  };

  const [modalShow, setModalShow] = useState(false);

  const handleCancel = () => {
    const appointmentDate = new Date(date);
    const today = new Date();
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

    if (appointmentDate < today) {
      alert("No se puede cancelar una cita que ya ha pasado.");
      return;
    }

    const lastCancelDate = new Date(today.getTime() - oneDayInMilliseconds);
    console.log(lastCancelDate);
    if (appointmentDate <= lastCancelDate) {
      alert(
        "No puedes cancelar este turno. Debes hacerlo al menos un día antes de la fecha."
      );
      return;
    }
    cancelAppointment();
    setModalShow(false);
  };

  return (
    <CardContainer>
      <img src={logosimple} alt="" width={"90px"} />
      <p className="title-date">Día: </p>
      <p> {new Date(date).toLocaleDateString()}</p>
      <p className="title-date">Horario: </p>
      <p> {time}</p>
      <p className="title-date">Estado del turno:</p>
      <p className={status === "active" ? "active-status" : "cancelled-status"}>
        {status === "active" ? "Activo" : "Cancelado"}
      </p>
      {!isCancelled && (
        <button onClick={() => setModalShow(true)} className="cancel-button">
          Eliminar Turno
        </button>
      )}
      <ModalAppointment
        show={modalShow}
        message="¿Estás seguro de que deseas eliminar este turno?"
        onConfirm={handleCancel}
        onCancel={() => setModalShow(false)}
      />
    </CardContainer>
  );
};
Appointment.propTypes = {
  id: PropTypes.number,
  time: PropTypes.string,
  date: PropTypes.string,
  status: PropTypes.string,
};
export default Appointment;
