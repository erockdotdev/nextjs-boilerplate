import BasePage from "src/components/layouts/BasePage";
import { MOCK_SHOP_SEO_METADATA } from "src/utils/mocks/seo-metadata";

// @TODO: set up schema.org product info
const ShopPage = () => {
  return (
    <BasePage showNav showFooter metadata={MOCK_SHOP_SEO_METADATA}>
      <h1> Shop page </h1>
    </BasePage>
  );
};

export default ShopPage;
