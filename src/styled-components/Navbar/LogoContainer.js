import styled from "styled-components";

export const LogoContainer = styled.div`
  width: ${(props) => props.width || "90px"};
  height: auto;

  img {
    width: 100%;
  }
`;
