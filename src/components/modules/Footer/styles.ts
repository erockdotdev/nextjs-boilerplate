import styled from "styled-components";

export const CopyrightStyles = styled.span`
  font-size: 0.85rem;
`;

export const FooterStyles = styled.footer`
  border-top: solid var(--lightGray) 1px;
  padding: 1rem var(--gutter);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const FooterRightStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  a {
    padding: 0 10px;
    &:last-of-type {
      padding-right: 0;
    }
  }
`;

export const FooterLinksContainerStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
