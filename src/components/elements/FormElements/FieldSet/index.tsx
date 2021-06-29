import styled from "styled-components";
import { FieldSetProps } from "../types";

const FieldSetStyles = styled.fieldset`
  margin: 20px 0;
`;
const LegendStyles = styled.legend`
  margin-bottom: 10px;
`;

/**
 * Fieldset and legend should only be used when a higher-level label is necessary.
 * Single checkboxes or basic radio buttons that make sense from their labels alone
 * do not require fieldset and legend. Nested fieldsets can cause odd
 * screen reader behavior and should be avoided.
 */
export default function FieldSet({ children, legendLabel }: FieldSetProps) {
  return (
    <FieldSetStyles>
      <LegendStyles>{legendLabel}</LegendStyles>
      {children}
    </FieldSetStyles>
  );
}
