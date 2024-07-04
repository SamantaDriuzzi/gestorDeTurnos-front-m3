import { useState } from "react";
import ViewAllAppointments from "../components/Appointments/ViewAllAppointments";
import Logo from "../components/Logo/Logo";
import CreateAppointment from "../components/Appointments/CreateAppointment";
import {
  MyAppointmentsContainer,
  TitleContainer,
} from "../styled-components/Appointments/MyAppointmentsContainer";
import { ButtonGral } from "../styled-components/Appointments/CardContainer";

const MyAppointments = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleCreateClick = () => {
    setShowCreateForm(true);
  };

  const handleClose = () => {
    setShowCreateForm(false);
  };

  return (
    <MyAppointmentsContainer>
      <TitleContainer>
        <Logo width="200px" />
        <h3>Vení a conocer el lugar soñado para tu boda</h3>
      </TitleContainer>
      <ButtonGral onClick={handleCreateClick}>Agendar turno</ButtonGral>
      {!showCreateForm && <ViewAllAppointments />}

      {showCreateForm && <CreateAppointment onClose={handleClose} />}
    </MyAppointmentsContainer>
  );
};

export default MyAppointments;
