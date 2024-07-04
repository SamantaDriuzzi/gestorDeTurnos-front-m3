import {
  Button,
  CloseButton,
  ModalBackdrop,
  ModalContent,
} from "../../styled-components/Appointments/ModalAppointment";
import PropTypes from "prop-types";

const ModalAppointment = ({ show, message, onConfirm, onCancel }) => {
  if (!show) return null;

  return (
    <ModalBackdrop show={show} onClick={onCancel}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onCancel}>&times;</CloseButton>
        <h2>Confirmación</h2>
        <p>{message}</p>
        <Button onClick={onConfirm}>Confirmar</Button>
        <Button
          onClick={onCancel}
          style={{ backgroundColor: "#aaa", marginRight: 0 }}
        >
          Cancelar
        </Button>
      </ModalContent>
    </ModalBackdrop>
  );
};

ModalAppointment.propTypes = {
  show: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ModalAppointment;
