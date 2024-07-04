import { useEffect } from "react";
import Appointment from "./Appointment";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TurnsContainer } from "../../styled-components/Appointments/TurnsContainer";
import { setUserAppointments } from "../../react-toolkit/reducer";
import { H1 } from "../../styled-components/Appointments/MyAppointmentsContainer";

const ViewAllAppointments = () => {
  const user = useSelector((state) => state.userActive);
  const Appointments = useSelector((state) => state.userAppointments);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    !user.name && navigate("/login");
  }, []);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/users/details/${user.id}`
        );
        dispatch(setUserAppointments(response.data.appointment));
      } catch (error) {
        console.log("Error al obtener los turnos", error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div>
      {Appointments.length === 0 ? <h1>No hay turnos</h1> : <H1>Tus turnos</H1>}
      <TurnsContainer>
        {Appointments.map((turno) => (
          <Appointment
            key={turno.id}
            id={turno.id}
            time={turno.time}
            date={turno.date}
            status={turno.status}
          />
        ))}
      </TurnsContainer>
    </div>
  );
};

export default ViewAllAppointments;
