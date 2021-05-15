import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";

interface InputProps {
  // must use any here as param wants to resolve to
  // the form value type - but that is specific to a form and therefore
  // not flexible for a reusable component;
  register: UseFormRegister<any>;
  name: string;
  label: string;
  validations: {
    required?: string;
    maxLength?: number;
    minLength?: number;
  };
  // must use any here as first param wants to resolve to
  // the form value type - but that is specific to a form and therefore
  // not flexible for a reusable component;
  errors: DeepMap<any, FieldError>;
}
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
      {errors[name] && <p> {errors[name].message}</p>}
    </div>
  );
}
