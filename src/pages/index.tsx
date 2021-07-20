import BasePage from "src/components/layouts/BasePage";
import SignUpSample from "src/components/demo/SampleForm";
import OpenModalButton from "src/components/modules/Modals/Base/OpenModalButton";
import ExampleModal from "src/components/modules/Modals/ExampleModal";
import Button from "src/components/elements/FormElements/Button";

import Typography from "src/components/demo/Typography";

const notificationBannerData: JSX.Element = (
  <span>
    This is a banner with a <a href="google.com">link</a>
  </span>
);

const notificationToast: JSX.Element = <span>Notification Toast Example</span>;

const Home = () => {
  return (
    <>
      <BasePage
        showNav
        showFooter
        notificationBannerData={notificationBannerData}
        notificationToast={notificationToast}
      >
        <main>
          <h1>NextJS Boiler Plate</h1>
          <br />
          <br />
          <Button disabled>Disabled Button</Button>
          <br />
          <br />
          <Button>Test Button</Button>
          <br />
          <br />
          <OpenModalButton />

          <hr />
          <Typography />

          <div>
            <h2>
              {/* https://react-hook-form.com/get-started */}
              {/* https://webaim.org/techniques/forms/controls */}
              {/* https://web.dev/sign-in-form-best-practices/*/}
              {/* https://web.dev/sign-in-https://github.com/react-hook-form/react-hook-form/issues/1616-best-practices/*/}
              <u>Form Elements</u>
            </h2>
            <SignUpSample />
          </div>
        </main>
      </BasePage>
      <ExampleModal />
    </>
  );
};

export default Home;
