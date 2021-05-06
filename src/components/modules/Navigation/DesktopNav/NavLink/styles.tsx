import styled from "styled-components";

export const NavLinkStyles = styled.li`
  list-style-type: none;
  padding: 1em;
  color: var(--black);
  &:last-of-type {
    padding-right: 0;
  }
  a {
    color: var(--black);
    &:hover {
      opacity: 0.8;
    }
  }
`;
