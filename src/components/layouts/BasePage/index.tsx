import Footer from "src/components/modules/Footer";
import Nav from "src/components/modules/Navigation";
import { MainStyles } from "src/components/layouts/BasePage/styles";
import LayoutRoot from "src/components/layouts/LayoutRoot";
import { MetadataProps } from "src/components/layouts/LayoutRoot/Metadata";

interface BasePageProps {
  children: React.ReactNode;
  showNav?: boolean;
  showFooter?: boolean;
  metadata?: MetadataProps;
}

export default function BasePage({
  children,
  showNav,
  showFooter,
  metadata,
}: BasePageProps) {
  return (
    <LayoutRoot metadata={metadata}>
      {showNav && <Nav />}
      <MainStyles>{children}</MainStyles>
      {showFooter && <Footer />}
    </LayoutRoot>
  );
}
