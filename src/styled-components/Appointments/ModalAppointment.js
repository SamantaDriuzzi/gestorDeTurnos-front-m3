import styled from "styled-components";

const ModalBackdrop = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
`;

const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  border: none;
  background-color: #f44336;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #da190b;
  }
`;

export { ModalBackdrop, ModalContent, CloseButton, Button };
