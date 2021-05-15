import BasePage from "src/components/layouts/BasePage";
import SignUpSample from "src/components/modules/Forms/SampleForm/SignUpSample";

//*** Decide what rules need to be in components and what should be set up as global styles */

// Subtitle
// Default (body text – as well as most controls, like text boxes, dropdowns, buttons, and menus)
// - line spacing/height
// - less character spacing
// - limit width 45–90 characters
// - font size sm/12 m/16 l/20

// Text Input / Areas
// Body - see body above
// Labels - 14 px, lighter color

const Home = () => {
  return (
    <BasePage showNav showFooter>
      <main>
        <h1>NextJS Boiler Plate</h1>
        <br />
        <br />
        <hr />
        <h2>Font Families</h2>
        <ul>
          <li>
            <u>h1-5 font</u>: RobotoMedium
          </li>
          <li>
            <u>captions</u>: Roboto
          </li>
          <li>
            <u>primary text </u>: Helvetica font-weight: 300
          </li>
          <li>
            <u>everything else</u>: Helvetica
          </li>
        </ul>

        <hr />
        <div>
          <h2>
            <u>Headers</u>
          </h2>
          <h1>Title H1</h1>
          <h2>Title H2</h2>
          <h3>Title H3</h3>
          <h4>Title H4</h4>
          <h5>Title H5</h5>
          <hr />
        </div>
        <div>
          <h2>
            <u>Subtitle</u>
          </h2>
          <strong>Regular: </strong>
          <span className="subtitle">
            Architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur.
          </span>
          <br />
          <strong>Italic: </strong>
          <span className="subtitle subtitle--italic">
            Architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur.
          </span>
        </div>
        <div>
          <h2>
            <u>Paragraph Tag</u>
          </h2>
          <p className="primary-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
            <span className="body body--italic">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </span>{" "}
            <span className="body body--bold">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </span>
          </p>
          <hr />
        </div>
        <div>
          <h2>
            <u>Anchor Tag</u>
          </h2>
          <a className="link">Link</a>
          <hr />
        </div>

        <div>
          <h2>
            <u>Captions</u>
          </h2>
          <strong>Caption: </strong>
          <span className="caption">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur
          </span>
          <br />
          <strong>Caption-xs: </strong>
          <span className="caption caption--xs">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </span>
        </div>
        <div>
          <h2>
            <u>Unordered List </u>
          </h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
          <hr />
        </div>

        <div>
          <h2>
            <u>Ordered List</u>
          </h2>
          <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ol>
        </div>

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
  );
};

export default Home;
