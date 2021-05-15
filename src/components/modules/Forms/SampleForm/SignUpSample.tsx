import React from "react";
import { useForm } from "react-hook-form";
import Input from "src/components/elements/FormElements/Input";
import Select from "src/components/elements/FormElements/Select";
import TextArea from "src/components/elements/FormElements/TextArea";
import {
  selectOptions,
  defaultValue,
  genderOptions,
} from "src/utils/mocks/form-data";
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
        <Input
          register={register}
          name="lastName"
          label="Last Name"
          errors={errors}
          validations={{
            required: "Last Name is Required",
            maxLength: { value: 4, message: "You exceeded max length!!" },
          }}
        />
        <Input
          register={register}
          name="age"
          label="Age"
          errors={errors}
          validations={{ valueAsNumber: true }}
        />
        <Select
          label="Gender"
          control={control}
          name="gender"
          options={genderOptions}
        />
        <TextArea register={register} name="comments" label="Comments" />

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

        <Select
          label="React Select Dropdown Example"
          control={control}
          name="flavors"
          options={selectOptions}
          defaultValue={defaultValue}
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
