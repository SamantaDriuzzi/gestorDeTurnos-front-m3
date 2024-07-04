import styled from "styled-components";

export const ListItem = styled.li`
  margin: 0 10px;
  color: var(--family-color);
  font-size: 1rem;
  font-family: "Inter", sans-serif;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
