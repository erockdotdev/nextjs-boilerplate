import styled from "styled-components";

export const RadioButtonContainerStyles = styled.label`
  font-size: 1.2rem;
  color: var(--color);
  display: grid;
  grid-template-columns: min-content auto;
  grid-gap: 0.5em;
  font-size: 1.2rem;

  .radio__control {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 0.1em solid currentColor;
    transform: translateY(-0.05em);
  }
`;

export const RadioButtonStyles = styled.span`
  display: inline-block;
  .radio__control {
    display: flex;
  }
  .radio__control__inner {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: solid white 2px;
  }
  input {
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + .radio__control {
      background: radial-gradient(currentcolor 50%, currentColor 50%);
    }
    &:focus + .radio__control {
      border: solid currentColor 2px;
    }
  }
`;

export const RadioButtonInputStyles = styled.span`
  line-height: 1;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;
