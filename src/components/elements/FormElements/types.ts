import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";

type validationDetail = {
  value: number;
  message: string;
};

type SelectOption = {
  value: string;
  label: string;
};

export interface InputProps {
  // must use any here as param wants to resolve to
  // the form value type - but that is specific to a form and therefore
  // not flexible for a reusable component;
  register: UseFormRegister<any>;
  name: string;
  label: string;
  validations?: {
    required?: string;
    maxLength?: number | validationDetail;
    minLength?: number | validationDetail;
    valueAsNumber?: boolean;
  };
  // must use any here as first param wants to resolve to
  // the form value type - but that is specific to a form and therefore
  // not flexible for a reusable component;
  errors?: DeepMap<any, FieldError>;
}

export interface SelectProps {
  options: SelectOption[];
  label: string;
  name: string;
  control: any;
  defaultValue?: SelectOption;
  isSearchable?: boolean;
}
