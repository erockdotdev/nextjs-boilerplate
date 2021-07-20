import { HTMLAttributes } from "react";

import { NotificationBannerStyles } from "./styles";

// add ability to close
export default function NotificationBanner({
  children,
}: React.DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
  return <NotificationBannerStyles>{children}</NotificationBannerStyles>;
}
