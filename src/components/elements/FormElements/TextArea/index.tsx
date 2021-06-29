import React from "react";
import { InputProps } from "../types";

export default function TextArea({
  register,
  name,
  label,
  errors,
  validations,
}: InputProps) {
  return (
    <div>
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <br />
      <textarea {...register(name, { ...validations })}></textarea>
      {errors && errors[name] && <p> {errors[name].message}</p>}
    </div>
  );
}
