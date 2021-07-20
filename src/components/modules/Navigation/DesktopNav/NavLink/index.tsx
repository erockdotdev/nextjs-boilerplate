import Link, { LinkProps } from "next/link";
import { useRouter } from "next/dist/client/router";

import { NavLinkStyles } from "./styles";

const NavLink = ({ href, children }: React.PropsWithChildren<LinkProps>) => {
  const { pathname } = useRouter();
  const active = pathname === href;
  return (
    <NavLinkStyles active={active}>
      <Link href={href}>{children}</Link>
    </NavLinkStyles>
  );
};

export default NavLink;
