import styled from "styled-components";

export const MobileNavOverlayStyles = styled.div`
  background: var(--black);
  color: var(--white);
  position: absolute;
  inset: 0;
`;

export const MobileNavULStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const MobileNavHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;
