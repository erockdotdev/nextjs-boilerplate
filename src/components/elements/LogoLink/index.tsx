import Link from "next/link";
import Logo from "../Logo";
import { HOME_LINK } from "./links";

function LogoLink() {
  return (
    <Link href={HOME_LINK.href}>
      <a>
        <Logo alt="home" />
      </a>
    </Link>
  );
}

export default LogoLink;
