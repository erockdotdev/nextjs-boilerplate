import Image from "next/image";

import { NAV_LINKS } from "src/components/modules/Navigation/links";
import NavLink from "src/components/modules/Navigation/DesktopNav/NavLink";
import LogoLink from "src/components/elements/LogoLink";

import { MobileNavStyles } from "./styles";
import MobileNavOverlay from "./MobileNavOverlay";
import { useState } from "react";

export default function MobileNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  function toggleMobileNavMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  return (
    <>
      <MobileNavStyles>
        <LogoLink />
        <button onClick={toggleMobileNavMenu}>
          <Image
            src="/static/svg/hamburger_menu_icon.svg"
            alt=""
            width="50"
            height="50"
          />
        </button>
      </MobileNavStyles>
      {isMobileMenuOpen && (
        <MobileNavOverlay toggleMobileNavMenu={toggleMobileNavMenu} />
      )}
    </>
  );
}
