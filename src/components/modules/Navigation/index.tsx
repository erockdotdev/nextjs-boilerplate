import useViewport from "src/hooks/useViewport";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navigation() {
  const {
    breakpointStatus: { detectIsDesktopUp },
  } = useViewport();
  return <>{detectIsDesktopUp ? <DesktopNav /> : <MobileNav />}</>;
}
