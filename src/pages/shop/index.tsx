import { useContext, useEffect } from "react";
import BasePage from "src/components/layouts/BasePage";
import Modal from "src/components/modules/Modals/Base";
import { ModalContext } from "src/components/modules/Modals/Base/modalContext";
import OpenModalButton from "src/components/modules/Modals/Base/OpenModalButton";
import ExampleModal from "src/components/modules/Modals/ExampleModal";

import { MOCK_SHOP_SEO_METADATA } from "src/utils/mocks/seo-metadata";

import useViewport from "src/hooks/useViewPort";

// @TODO: set up schema.org product info
const ShopPage = () => {
  // const { width, height } = useViewport();
  return (
    <BasePage showNav showFooter metadata={MOCK_SHOP_SEO_METADATA}>
      <h1> Shop page </h1>
    </BasePage>
  );
};

export default ShopPage;
