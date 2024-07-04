import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-primary);
  color: var(--family-color);
  height: 80px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
`;
