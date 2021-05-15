import React from "react";
import { InputProps } from "../types";

export default function Checkbox({
  register,
  name,
  label,
  defaultChecked,
}: InputProps) {
  return (
    <>
      <input
        id={name}
        type="checkbox"
        {...register("toppings")}
        value={name}
        defaultChecked={defaultChecked}
      />
      <label htmlFor={name}>{label}</label>
      <br />
    </>
  );
}
