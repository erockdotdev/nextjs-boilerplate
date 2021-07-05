import LayoutRoot from "src/components/layouts/LayoutRoot";
import NotificationBanner from "src/components/modules/Notifications/NotificationBanner";
import Nav from "src/components/modules/Navigation";
import Footer from "src/components/modules/Footer";

import { MainStyles } from "src/components/layouts/BasePage/styles";
import { MetadataProps } from "src/components/layouts/LayoutRoot/Metadata";
import styled from "styled-components";
import NotificationToast from "src/components/modules/Notifications/NotificationToast";

interface BasePageProps {
  children: React.ReactNode;
  showNav?: boolean;
  showFooter?: boolean;
  metadata?: MetadataProps;
  notificationBannerData?: JSX.Element;
  notificationToast?: JSX.Element;
}

const BasePageStyles = styled.div`
  max-width: 1280px;
  padding: 0 15px 0 15px;
  margin: 0 auto;
`;

const renderNotificationBanner = (notificationBannerData?: JSX.Element) =>
  notificationBannerData && (
    <NotificationBanner>{notificationBannerData}</NotificationBanner>
  );
const renderNotificationToast = (notificationToast?: JSX.Element) =>
  notificationToast && (
    <NotificationToast>{notificationToast}</NotificationToast>
  );

export default function BasePage({
  children,
  showNav,
  showFooter,
  metadata,
  notificationBannerData,
  notificationToast,
}: BasePageProps) {
  return (
    <>
      {renderNotificationBanner(notificationBannerData)}
      {/* {renderNotificationToast(notificationToast)} */}
      <BasePageStyles>
        <LayoutRoot metadata={metadata}>
          {showNav && <Nav />}
          <MainStyles>{children}</MainStyles>
          {showFooter && <Footer />}
        </LayoutRoot>
      </BasePageStyles>
    </>
  );
}
