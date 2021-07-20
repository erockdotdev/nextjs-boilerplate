import { DetailedHTMLProps, LiHTMLAttributes } from "react";
import styled from "styled-components";
interface NavLinkProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  active: boolean;
}

export const NavLinkStyles = styled.li<NavLinkProps>`
  list-style-type: none;
  padding: 1em;
  &:last-of-type {
    padding-right: 0;
  }
  a {
    color: var(--black);
    opacity: ${(props) => (props.active ? 0.5 : 1)};
    text-decoration: ${(props) => (props.active ? "underline" : "none")};
    &:hover {
      opacity: 0.5;
      text-decoration: underline;
    }
  }
`;
