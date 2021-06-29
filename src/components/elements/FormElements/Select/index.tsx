import React from "react";
import ReactSelect from "react-select";
import { Controller } from "react-hook-form";
import { SelectProps } from "../types";
import styled from "styled-components";

export const CustomSelectStyles = styled(ReactSelect)`
  // @TODO:
  // 1. unify styles with input styles
  // 2. use variable colors
  .Select__control {
    width: 100%;
    height: 34px;
    border: none;
    border-bottom: solid black 1px;
    padding: 2px 0;
    font-size: 1.2rem;
    border-radius: 0;
    margin: 10px 0 15px 0;

    &--is-focused {
      outline: none !important;
      border-color: initial !important;
      border-bottom: solid rgba(0, 0, 0, 0.2) 1px !important;
      box-shadow: none !important;
    }
    &:focus {
      border-bottom: solid rgba(0, 0, 0, 0.2) 1px !important;
    }
  }
  .Select__value-container {
    padding: 0;
  }
  .Select__placeholder {
    margin: 0;
  }
`;

export default function Select(props: SelectProps) {
  const { control, label, name, isSearchable } = props;
  if (!control) {
    return null;
  }
  return (
    <>
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <CustomSelectStyles
            classNamePrefix={"Select"}
            instanceId={name}
            isSearchable={isSearchable}
            {...field}
            {...props}
          />
        )}
      />
    </>
  );
}
