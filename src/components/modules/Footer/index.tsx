import LogoLink from "src/components/elements/LogoLink";
import { FooterStyles, FooterLinksContainerStyles } from "./styles";
import { FOOTER_LINKS } from "./links";
import { LinkType } from "src/typescript/global-types";
import Link from "next/link";

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
      <LogoLink />
      <FooterLinksContainerStyles>
        {renderFooterLinks(FOOTER_LINKS)}
      </FooterLinksContainerStyles>
    </FooterStyles>
  );
}
