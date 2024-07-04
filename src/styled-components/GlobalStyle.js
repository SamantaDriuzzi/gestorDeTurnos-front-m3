import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #C09784;
    --color-secondary: #FADADD;
    --color-tertiary:  #D9D2C3;
    --font-size-normal: 20px;
    --font-size-large: 34px;
    --family-color: #000000;
    --font-family: "Sedan", serif;
    --background-color: linear-gradient(248deg, rgba(217,210,195,1) 0%, rgba(250,218,221,1) 65%, rgba(192,151,132,1) 100%);;
  }
  .title {
    font-family: var(--font-family);
    margin: 50px;
    font-size: var(--font-size-large);
  }
`;
