import styled from "styled-components";

export const ButtonStyles = styled.button`
  border: 1px solid var(--black);
  padding: 10px;
  &:hover {
    opacity: 0.5;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
