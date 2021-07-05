import Image from "next/image";
import useViewport from "src/hooks/useViewPort";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navigation() {
  const {
    breakpointStatus: { detectIsDesktopUp },
  } = useViewport();
  return <>{detectIsDesktopUp ? <DesktopNav /> : <MobileNav />}</>;
}
