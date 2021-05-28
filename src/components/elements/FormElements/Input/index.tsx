import styled from "styled-components";
import { InputProps } from "../types";

const InputStyles = styled.div`
  margin: 10px 0 15px 0;
  display: flex;
  flex-direction: column;
  input {
    width: 100%;
    height: 34px;
    border: none;
    border-bottom: solid black 1px;
    padding: 2px 0;
    font-size: 1.2rem;
    &:focus {
      border-bottom: solid rgba(0, 0, 0, 0.3) 1px;
    }
  }
`;

const ErrorStyles = styled.span`
  color: var(--red);
  font-size: 16px;
`;

export default function Input({
  register,
  name,
  label,
  errors,
  validations,
}: InputProps) {
  return (
    <InputStyles>
      <label htmlFor={name}>{label}</label>
      <input {...register(name, { ...validations })} />
      {errors && errors[name] && (
        <ErrorStyles>{errors[name].message}</ErrorStyles>
      )}
    </InputStyles>
  );
}
