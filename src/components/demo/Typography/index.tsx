const Typography = () => {
  return (
    <section>
      <h2 className="h2">Typography</h2>
      <h3 className="h3">
        <u>Font Families</u>
      </h3>
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
        <h3 className="h3">
          <u>Headers</u>
        </h3>
        <h1 className="h1">Title H1</h1>
        <h2 className="h2">Title H2</h2>
        <h3 className="h3">Title H3</h3>
        <h4 className="h4">Title H4</h4>
        <h5 className="h5">Title H5</h5>
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
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
        <a classNam=" link">Link</a>
        <hr />
      </div>

      <div>
        <h2>
          <u>Captions</u>
        </h2>
        <strong>Caption: </strong>
        <span className="caption">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur
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
    </section>
  );
};

export default Typography;
