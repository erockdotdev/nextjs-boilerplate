import BasePage from "src/components/layouts/BasePage";
import { MOCK_CONTACT_SEO_METADATA } from "src/utils/mocks/SEOMetadata";

const ContactPage = () => {
  // @TODO: set up schema.org Contact info
  return (
    <BasePage showNav showFooter metadata={MOCK_CONTACT_SEO_METADATA}>
      <h1> Contact page </h1>
    </BasePage>
  );
};

export default ContactPage;
