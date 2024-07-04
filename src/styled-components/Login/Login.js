import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-family: var(--font-family);
  background: var(--background-color);

  .title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: var(--font-size-large);
    width: 400px;
    text-align: center;
  }
  .form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
    gap: 15px;
    background-color: var(--color-primary);
    width: 400px;
    padding: 20px;
    border-radius: 20px;

    .form-group {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 300px;
      gap: 5px;

      .form-input {
        width: 300px;
        height: 18px;
        border-radius: 5px;
        border: none;
        padding: 5px;
        background-color: var(--color-tertiary);
        font-size: 16px;
      }
    }
    .form-button {
      width: 300px;
      height: 40px;
      border-radius: 5px;
      border: none;
      padding: 5px;
      background-color: var(--color-tertiary);
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

export default Form;
