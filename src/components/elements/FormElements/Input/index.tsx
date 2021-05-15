import { InputProps } from "../types";

export default function Input({
  register,
  name,
  label,
  errors,
  validations,
}: InputProps) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <br />
      <input {...register(name, { ...validations })} />
      {errors && errors[name] && <p> {errors[name].message}</p>}
    </div>
  );
}
