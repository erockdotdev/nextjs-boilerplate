import GlobalStyles from "src/styles/global-styles";
import SEOMetadata, {
  MetadataProps,
} from "src/components/layouts/LayoutRoot/Metadata";
import styled from "styled-components";

interface LayoutRootProps {
  children: React.ReactNode;
  metadata?: MetadataProps;
}

export default function LayoutRoot({ children, metadata }: LayoutRootProps) {
  return (
    <>
      <GlobalStyles />
      {metadata && <SEOMetadata {...metadata} />}
      {children}
    </>
  );
}
