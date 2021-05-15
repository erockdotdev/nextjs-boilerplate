import BasePage from "src/components/layouts/BasePage";
import { MOCK_ACCOUNT_SEO_METADATA } from "src/utils/mocks/seo-metadata";

// @TODO: set up schema.org product info
const AccountPage = () => {
  return (
    <BasePage showNav showFooter metadata={MOCK_ACCOUNT_SEO_METADATA}>
      <h1> Account page </h1>
    </BasePage>
  );
};

export default AccountPage;
