import React from "react";
import cx from "classnames";
import { CheckboxStyles } from "./styles";
import { InputProps } from "../types";
import { checkboxCheck } from "./checkbox-check";

/**
 * This pattern is based off of this article:
 * https://moderncss.dev/pure-css-custom-checkbox-style/
 */

export default function Checkbox({
  register,
  name,
  label,
  defaultChecked,
  disabled,
}: InputProps) {
  return (
    <CheckboxStyles className="checkbox">
      <span
        className={cx("checkbox__input", { "checkbox--disabled": disabled })}
      >
        <input
          id={name}
          {...register("toppings")}
          type="checkbox"
          value={name}
          defaultChecked={defaultChecked}
          disabled={disabled}
        />
        <span className="checkbox__control">{checkboxCheck}</span>
      </span>
      <span className="radio__label">{label}</span>
    </CheckboxStyles>
  );
}
