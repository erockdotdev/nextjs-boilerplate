import styled from "styled-components";

export const FooterStyles = styled.footer`
  border-top: solid var(--lightGray) 1px;
  padding: 1rem var(--gutter);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const FooterLinksContainerStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    padding: 0 10px;
    &:last-of-type {
      padding-right: 0;
    }
  }
`;
