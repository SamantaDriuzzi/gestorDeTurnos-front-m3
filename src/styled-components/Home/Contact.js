import styled from "styled-components";

export const ContactSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: var(--color-tertiary);
  color: var(--family-color);
  font-family: var(--font-family);

  .title {
    font-family: var(--font-family);
    margin: 50px;
    font-size: var(--font-size-large);
  }
  .title-contact {
    font-family: var(--font-family);
    margin: 50px;
    font-size: var(--font-size-normal);
    text-align: center;
  }
`;

export const PhotosContact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 20px;

  img {
    width: 290px;
    height: auto;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 50px;
  gap: 60px;

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid var(--color-primary);
    padding: 10px;
    width: 200px;
    height: 200px;

    img {
      width: 50px;
    }
  }
`;
