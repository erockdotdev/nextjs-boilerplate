import React from "react";
import { useForm } from "react-hook-form";
import Checkbox from "src/components/elements/FormElements/Checkbox";
import FieldSet from "src/components/elements/FormElements/FieldSet";
import Input from "src/components/elements/FormElements/Input";
import RadioButton from "src/components/elements/FormElements/RadioButton";
import Select from "src/components/elements/FormElements/Select";
import TextArea from "src/components/elements/FormElements/TextArea";
import Button from "src/components/elements/FormElements/Button";

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
          control={control}
          label="Gender"
          name="gender"
          options={genderOptions}
          isSearchable={false}
        />
        <TextArea register={register} name="comments" label="Comments" />

        <FieldSet legendLabel="Select your topping!!">
          <Checkbox
            register={register}
            name="pepperoni"
            label="Pepperoni"
            defaultChecked={true}
          />
          <Checkbox
            register={register}
            name="ham"
            label="Ham"
            disabled={true}
          />
          <Checkbox register={register} name="mushrooms" label="Mushrooms" />
          <Checkbox register={register} name="olives" label="Olives" />
        </FieldSet>

        <FieldSet legendLabel="Choose a shipping method:">
          <RadioButton
            register={register}
            group="shipping"
            name="overnight"
            label="Overnight"
          />
          <RadioButton
            register={register}
            group="shipping"
            name="two-day"
            label="Two Day"
          />
          <RadioButton
            register={register}
            group="shipping"
            name="ground"
            label="Ground"
          />
        </FieldSet>

        <Select
          label="Choose your flavor"
          control={control}
          name="flavors"
          options={selectOptions}
          defaultValue={defaultValue}
          isSearchable
        />

        <Button type="submit">Sign Up</Button>
        <div style={{ height: "200px" }} />
      </form>
    </div>
  );
}
