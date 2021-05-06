import { NAV_LINKS } from "src/components/modules/Navigation/links";
import NavLink from "src/components/modules/Navigation/DesktopNav/NavLink";
import LogoLink from "src/components/elements/LogoLink";

import { LinkType } from "src/typescript/global-types";
import { NavStyles, NavLinkULStyles } from "./styles";

export default function Nav() {
  function renderNavLinks(NAV_LINKS: LinkType[]) {
    const links = NAV_LINKS.map((link: LinkType) => (
      <NavLink key={link.href.toString()} href={link.href}>
        {link.label}
      </NavLink>
    ));
    return <NavLinkULStyles>{links}</NavLinkULStyles>;
  }

  return (
    <NavStyles>
      <LogoLink />
      {renderNavLinks(NAV_LINKS)}
    </NavStyles>
  );
}
