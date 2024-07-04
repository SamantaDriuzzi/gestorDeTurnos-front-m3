import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--color-tertiary);
  width: 100%;
  height: 95vh;
  justify-content: center;
  align-items: center;
  color: var(--family-color);
  font-family: var(--font-family);

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 100px;
  }
  .logo-simple {
    width: 150px;
    height: auto;
  }
  h3 {
    font-size: 20px;
    text-align: center;
    width: 40%;
    line-height: 1.5;
  }

  .img-jardines {
    border-top-right-radius: 155px;
    border-top-left-radius: 155px;
    margin-left: 200px;
    height: 450px;
    width: auto;
  }
`;
