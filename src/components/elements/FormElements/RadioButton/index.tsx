import { CheckboxProps } from "../types";

export default function RadioButton({
  register,
  name,
  label,
  group,
}: CheckboxProps) {
  return (
    <>
      <input id={name} type="radio" {...register(group)} value={name} />
      <label htmlFor={name}>{label}</label>
      <br />
    </>
  );
}
