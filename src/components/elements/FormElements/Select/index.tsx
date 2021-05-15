import React from "react";
import { Controller } from "react-hook-form";
import ReactSelect from "react-select";
import { SelectProps } from "../types";

export default function Select(props: SelectProps) {
  const { control, label, name, isSearchable } = props;
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
          <ReactSelect
            instanceId={name}
            isSearchable={false || isSearchable}
            {...field}
            {...props}
          />
        )}
      />
    </>
  );
}
