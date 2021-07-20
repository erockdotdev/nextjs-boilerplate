import NavLink from "src/components/modules/Navigation/DesktopNav/NavLink";
import LogoLink from "src/components/elements/LogoLink";
import { NAV_LINKS } from "src/components/modules/Navigation/links";

import { LinkType } from "src/typescript/global-types";

import { NavStyles, NavLinkULStyles } from "./styles";

const Nav = () => {
  const renderNavLinks = (navLinks: LinkType[]) => {
    const links = navLinks.map((link: LinkType) => (
      <NavLink key={link.href.toString()} href={link.href}>
        {link.label}
      </NavLink>
    ));
    return <NavLinkULStyles>{links}</NavLinkULStyles>;
  };

  return (
    <NavStyles>
      <LogoLink />
      {renderNavLinks(NAV_LINKS)}
    </NavStyles>
  );
};

export default Nav;
