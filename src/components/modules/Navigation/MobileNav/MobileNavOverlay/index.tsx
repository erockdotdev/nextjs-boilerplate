import Image from "next/image";

import MobileNavLink from "../MobileNavLink";

import { LinkType } from "src/typescript/global-types";
import { NAV_LINKS } from "../../links";

import {
  MobileNavULStyles,
  MobileNavOverlayStyles,
  MobileNavHeader,
} from "./styles";

interface MobileMenuProps {
  toggleMobileNavMenu: () => void;
}

const MobileNavOverlay = ({
  toggleMobileNavMenu,
}: React.PropsWithChildren<MobileMenuProps>) => {
  const renderNavLinks = (navLinks: LinkType[]) => {
    const links = navLinks.map((link: LinkType) => (
      <MobileNavLink key={link.href.toString()} href={link.href}>
        {link.label}
      </MobileNavLink>
    ));
    return <MobileNavULStyles>{links}</MobileNavULStyles>;
  };

  return (
    <MobileNavOverlayStyles>
      <MobileNavHeader>
        <button onClick={toggleMobileNavMenu}>
          <Image
            src="/static/svg/close_icon-white.svg"
            alt="home"
            width="50"
            height="50"
          />
        </button>
      </MobileNavHeader>
      {renderNavLinks(NAV_LINKS)}
    </MobileNavOverlayStyles>
  );
};
export default MobileNavOverlay;
