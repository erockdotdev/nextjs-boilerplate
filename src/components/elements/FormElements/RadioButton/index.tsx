import { CheckboxProps } from "../types";
import {
  RadioButtonContainerStyles,
  RadioButtonInputStyles,
  RadioButtonStyles,
} from "./styles";

const RadioInput = ({ register, name, group }: CheckboxProps): JSX.Element => (
  <RadioButtonStyles className="radio__input">
    <input id={name} type="radio" {...register(group)} value={name} />
    <span className="radio__control">
      <span className="radio__control__inner"></span>
    </span>
  </RadioButtonStyles>
);

const RadioLabel = ({ label }: CheckboxProps): JSX.Element => (
  <RadioButtonInputStyles>{label}</RadioButtonInputStyles>
);

export default function RadioButton(props: CheckboxProps) {
  return (
    <RadioButtonContainerStyles>
      <RadioInput {...props} />
      <RadioLabel {...props} />
    </RadioButtonContainerStyles>
  );
}
