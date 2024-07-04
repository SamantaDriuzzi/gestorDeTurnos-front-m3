import styled from "styled-components";
const FormCreate = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-family: var(--font-family);
  background: var(--background-color);

  .title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 50px;
    margin-bottom: 100px;
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
    margin-top: 70px;

    .form-group {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 300px;
      gap: 5px;

      .form-imput {
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

export default FormCreate;
