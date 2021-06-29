import { HTMLAttributes } from "react";
import styled from "styled-components";

const NotificationBannerStyles = styled.header`
  padding: 15px;
  text-align: center;
  background: ghostwhite;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);
`;

export default function NotificationBanner({
  children,
}: React.DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
  return <NotificationBannerStyles>{children}</NotificationBannerStyles>;
}
