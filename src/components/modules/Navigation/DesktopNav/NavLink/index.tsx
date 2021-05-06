import Link, { LinkProps } from "next/link";
import { NavLinkStyles } from "./styles";

export default function NavLink({
  href,
  children,
}: React.PropsWithChildren<LinkProps>) {
  return (
    <NavLinkStyles>
      <Link href={href}>{children}</Link>
    </NavLinkStyles>
  );
}
