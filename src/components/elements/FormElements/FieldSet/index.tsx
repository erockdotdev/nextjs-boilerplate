import { FieldSetProps } from "../types";

/**
 * Fieldset and legend should only be used when a higher-level label is necessary.
 * Single checkboxes or basic radio buttons that make sense from their labels alone
 * do not require fieldset and legend. Nested fieldsets can cause odd
 * screen reader behavior and should be avoided.
 */
export default function FieldSet({ children, legendLabel }: FieldSetProps) {
  return (
    <fieldset>
      <legend>{legendLabel}</legend>
      {children}
    </fieldset>
  );
}
