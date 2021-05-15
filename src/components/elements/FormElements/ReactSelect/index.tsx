import React, { Component } from "react";
import { Controller, Control } from "react-hook-form";
import Select from "react-select";

// https://react-select.com/
type SelectOption = {
  value: string;
  label: string;
};

interface SelectProps {
  options: SelectOption[];
  label: string;
  name: string;
  control: any;
  defaultValue?: SelectOption;
  isSearchable?: boolean;
}

export default function ReactSelect(props: SelectProps) {
  const { control, label, name } = props;
  if (!control) {
    return null;
  }
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select instanceId={name} {...field} {...props} />
        )}
      />
    </>
  );
}
