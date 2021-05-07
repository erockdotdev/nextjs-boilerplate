import Link from "next/link";
import LogoLink from "src/components/elements/LogoLink";

import { FOOTER_LINKS } from "./links";
import { COPYRIGHT } from "src/constants/literals";
import { LinkType } from "src/typescript/global-types";

import {
  FooterStyles,
  FooterLinksContainerStyles,
  FooterRightStyles,
  CopyrightStyles,
} from "./styles";

function renderFooterLinks(links: LinkType[]) {
  return FOOTER_LINKS.map((link: LinkType) => (
    <Link key={link.href.toString()} href={link.href}>
      {link.label}
    </Link>
  ));
}

export default function Footer() {
  return (
    <FooterStyles>
      <FooterLinksContainerStyles>
        <LogoLink />
      </FooterLinksContainerStyles>
      <FooterRightStyles>
        <FooterLinksContainerStyles>
          {renderFooterLinks(FOOTER_LINKS)}
        </FooterLinksContainerStyles>
        <CopyrightStyles>{COPYRIGHT}</CopyrightStyles>
      </FooterRightStyles>
    </FooterStyles>
  );
}
