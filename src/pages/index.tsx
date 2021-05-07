import BasePage from "src/components/layouts/BasePage";
import { useForm } from "react-hook-form";

//*** Decide what rules need to be in components and what should be set up as global styles */

// global font

// Title
// - more character spacing
// bottom margin h1/30 h2/20 h3/15
// Subtitle
// Default (body text – as well as most controls, like text boxes, dropdowns, buttons, and menus)
// - line spacing/height
// - less character spacing
// - limit width 45–90 characters
// - font size sm/12 m/16 l/20
// Secondary
// 2 pts smaller than Default across all breakpoints

// Text Input / Areas
// Body - see body above
// Labels - 14 px, lighter color
interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

const Home = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <BasePage showNav showFooter>
      <main>
        <h1>NextJS Boiler Plate</h1>
        <div>
          <h2>
            <u>Headers</u>
          </h2>
          <h1>Title H1</h1>
          <h2>Title H2</h2>
          <h3>Title H3</h3>
          <hr />
        </div>

        <div>
          <h2>
            <u>Paragraph Tag</u>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <hr />
        </div>

        <div>
          <h2>
            <u>Anchor Tag</u>
          </h2>
          <a>Link</a>
          <hr />
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="firstName">First Name</label>
            <br />
            <input
              id="firstName"
              aria-required="true"
              autoComplete="firstName"
              {...register("firstName", { required: true, maxLength: 20 })}
            />
            <br />
            <label htmlFor="lastName">Last Name</label>
            <br />
            <input
              id="lastName"
              // aria-invalid="true"
              {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
            />
            <br />
            <label htmlFor="number">Number</label>
            <br />
            <input
              id="number"
              type="number"
              {...register("age", { min: 18, max: 99 })}
            />
            <br />
            <label htmlFor="number">Email</label>
            <br />
            <input id="email" type="email" />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input id="password" type="password" />
            <br />
            <label htmlFor="address">Enter your address:</label>
            <br />
            <textarea id="address" autoComplete="street-address"></textarea>
            <br />
            {/* Fieldset and legend should only be used when a higher-level label is necessary. 
            Single checkboxes or basic radio buttons that make sense from their labels alone 
            do not require fieldset and legend. Nested fieldsets can cause odd 
            screen reader behavior and should be avoided. */}
            <fieldset>
              <legend>Select your pizza toppings:</legend>
              <input id="ham" type="checkbox" name="toppings" value="ham" />
              <label htmlFor="ham">Ham</label>
              <br />
              <input
                id="pepperoni"
                type="checkbox"
                name="toppings"
                value="pepperoni"
              />
              <label htmlFor="pepperoni">Pepperoni</label>
              <br />
              <input
                id="mushrooms"
                type="checkbox"
                name="toppings"
                value="mushrooms"
              />
              <label htmlFor="mushrooms">Mushrooms</label>
              <br />
              <input
                id="olives"
                type="checkbox"
                name="toppings"
                value="olives"
              />
              <label htmlFor="olives">Olives</label>
            </fieldset>
            <fieldset>
              <legend>Choose a shipping method:</legend>
              <input
                id="overnight"
                type="radio"
                name="shipping"
                value="overnight"
              />
              <label htmlFor="overnight">Overnight</label>
              <br />
              <input id="twoday" type="radio" name="shipping" value="twoday" />
              <label htmlFor="twoday">Two day</label>
              <br />
              <input id="ground" type="radio" name="shipping" value="ground" />
              <label htmlFor="ground">Ground</label>
            </fieldset>
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
    </BasePage>
  );
};

export default Home;
