import { DetailedHTMLProps, FieldsetHTMLAttributes } from "react";
import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";

type validationDetail = {
  value: number;
  message: string;
};

type SelectOption = {
  value: string;
  label: string;
};

export interface InputProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  register: UseFormRegister<any>;
  name: string;
  label: string;
  validations?: {
    required?: string;
    maxLength?: number | validationDetail;
    minLength?: number | validationDetail;
    valueAsNumber?: boolean;
  };
  errors?: DeepMap<any, FieldError>;
}
export interface CheckboxProps extends InputProps {
  group: string;
}

export interface SelectProps {
  options: SelectOption[];
  label: string;
  name: string;
  control: any;
  defaultValue?: SelectOption;
  isSearchable?: boolean;
}

export interface FieldSetProps
  extends DetailedHTMLProps<
    FieldsetHTMLAttributes<HTMLFieldSetElement>,
    HTMLFieldSetElement
  > {
  legendLabel: string;
}
