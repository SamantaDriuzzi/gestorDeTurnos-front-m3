import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: auto;
  background: var(--color-primary);
  border-radius: 10px;
  margin-left: 10px;
  padding-left: 30px;

  .title-date {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: -10px;
  }
  .active-status {
    color: green;
    font-weight: bold;
  }

  .cancelled-status {
    color: red;
    font-weight: bold;
  }

  .cancel-button {
    width: 100px;
    height: 32px;
    border-radius: 5px;
    border: none;
    padding: 5px;
    background: var(--color-tertiary);
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    margin: 10px;

    &:hover {
      scale: 1.2;
      transition: 0.2s ease-in-out;
    }
  }
`;

export const ButtonGral = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 5px;
  border: none;
  padding: 5px;
  background: var(--color-primary);
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin: 10px;
  margin-left: calc(100% - 220px);

  &:hover {
    scale: 1.5;
    transition: 0.3s ease-in-out;
  }
`;
