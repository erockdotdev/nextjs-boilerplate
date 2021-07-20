import Link, { LinkProps } from "next/link";

import { MobileNavLinkStyles } from "./styles";

const MobileNavLink = ({
  href,
  children,
}: React.PropsWithChildren<LinkProps>) => {
  return (
    <MobileNavLinkStyles>
      <Link href={href}>{children}</Link>
    </MobileNavLinkStyles>
  );
};

export default MobileNavLink;
