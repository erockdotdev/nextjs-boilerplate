import { useState } from "react";
import Image from "next/image";

import LogoLink from "src/components/elements/LogoLink";
import MobileNavOverlay from "./MobileNavOverlay";

import { MobileNavStyles } from "./styles";

const MobileNav = () => {
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
            alt="home"
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
};

export default MobileNav;
