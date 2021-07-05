import Link, { LinkProps } from "next/link";
import { MobileNavLinkStyles } from "./styles";

export default function MobileNavLink({
  href,
  children,
}: React.PropsWithChildren<LinkProps>) {
  return (
    <MobileNavLinkStyles>
      <Link href={href}>{children}</Link>
    </MobileNavLinkStyles>
  );
}
