import Image from "next/image";
import { LinkType } from "src/typescript/global-types";
import styled from "styled-components";
import { NAV_LINKS } from "../../links";

import MobileNavLink from "../MobileNavLink";
import { MobileNavULStyles } from "../styles";

import { MobileNavOverlayStyles } from "./styles";

interface MobileMenuProps {
  toggleMobileNavMenu: () => void;
}

const MobileNavHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function MobileNavOverlay({
  toggleMobileNavMenu,
}: React.PropsWithChildren<MobileMenuProps>) {
  function renderNavLinks(NAV_LINKS: LinkType[]) {
    const links = NAV_LINKS.map((link: LinkType) => (
      <MobileNavLink key={link.href.toString()} href={link.href}>
        {link.label}
      </MobileNavLink>
    ));
    return <MobileNavULStyles>{links}</MobileNavULStyles>;
  }
  return (
    <MobileNavOverlayStyles>
      <MobileNavHeader>
        <button onClick={toggleMobileNavMenu}>
          <Image
            src="/static/svg/close_icon-white.svg"
            alt=""
            width="50"
            height="50"
          />
        </button>
      </MobileNavHeader>
      {renderNavLinks(NAV_LINKS)}
    </MobileNavOverlayStyles>
  );
}
