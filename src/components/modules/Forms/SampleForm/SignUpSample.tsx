import React from "react";
import { useForm } from "react-hook-form";
import Input from "src/components/elements/FormElements/Input";
import ReactSelect from "src/components/elements/FormElements/ReactSelect";
import { selectOptions, defaultValue } from "src/utils/mocks/form-data";
export interface FormValues {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  developer: string;
  comments: string;
  toppings: string[];
  shipping: string;
  flavors: string;
}

export default function SignUpSample() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>();

  // create select with downshift
  // custom checkboxes
  // custom radio buttons
  // style rest of inputs and validation errors
  // make components of each

  return (
    <div>
      <h3>Sign Up Sample</h3>
      <form
        onSubmit={handleSubmit((data) => {
          console.log("data", JSON.stringify(data, null, 2));
        })}
      >
        <Input
          register={register}
          name="firstName"
          label="First Name"
          errors={errors}
          validations={{
            required: "First Name is Required!!!",
            maxLength: 20,
          }}
        />
        <div>
          <label htmlFor="lastName">Last Name</label>
          <br />
          <input
            {...register("lastName", {
              required: "Last Name is Required",
              maxLength: { value: 4, message: "You exceeded max length" },
            })}
          />
          {errors.lastName && <p> {errors.lastName.message}</p>}
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <br />
          <input
            type="number"
            {...register("age", {
              valueAsNumber: true,
            })}
          />
        </div>

        <div>
          <label htmlFor="gender">Gender</label>
          <select {...register("gender")} id="gender">
            <option value="">Select</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>

        <div>
          <label htmlFor="comments">Comments</label> <br />
          <textarea {...register("comments")}></textarea>
        </div>

        {/* Fieldset and legend should only be used when a higher-level label is necessary. 
            Single checkboxes or basic radio buttons that make sense from their labels alone 
            do not require fieldset and legend. Nested fieldsets can cause odd 
            screen reader behavior and should be avoided. */}
        <fieldset>
          <legend>Select your pizza toppings:</legend>
          <input
            id="ham"
            type="checkbox"
            {...register("toppings")}
            value="ham"
          />
          <label htmlFor="ham">Ham</label>
          <br />
          <input
            id="pepperoni"
            type="checkbox"
            {...register("toppings")}
            value="pepperoni"
          />
          <label htmlFor="pepperoni">Pepperoni</label>
          <br />
          <input
            id="mushrooms"
            type="checkbox"
            {...register("toppings")}
            value="mushrooms"
          />
          <label htmlFor="mushrooms">Mushrooms</label>
          <br />
          <input
            id="olives"
            type="checkbox"
            {...register("toppings")}
            value="olives"
          />
          <label htmlFor="olives">Olives</label>
        </fieldset>
        <fieldset>
          <legend>Choose a shipping method:</legend>
          <input
            id="overnight"
            type="radio"
            {...register("shipping")}
            value="overnight"
          />
          <label htmlFor="overnight">Overnight</label>
          <br />
          <input
            id="twoday"
            type="radio"
            {...register("shipping")}
            value="twoday"
          />
          <label htmlFor="twoday">Two day</label>
          <br />
          <input
            id="ground"
            type="radio"
            {...register("shipping")}
            value="ground"
          />
          <label htmlFor="ground">Ground</label>
        </fieldset>

        <ReactSelect
          label="React Select Dropdown Example"
          control={control}
          name="flavors"
          options={selectOptions}
          defaultValue={defaultValue}
          isSearchable={false}
        />

        <button
          type="submit"
          style={{ border: "solid black 1px", padding: ".5rem" }}
        >
          Sign Up
        </button>
        <div style={{ height: "200px" }} />
      </form>
    </div>
  );
}
