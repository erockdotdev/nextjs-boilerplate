import styled from "styled-components";
/**
 * This pattern is based off of this article:
 * https://moderncss.dev/pure-css-custom-checkbox-style/
 */
export const CheckboxStyles = styled.label`
  display: grid;
  grid-template-columns: min-content auto;
  grid-gap: 0.5em;
  font-size: 1.2rem;
  color: var(--color);
  .checkbox__input {
    input {
      opacity: 0;
      width: 1em;
      height: 1em;
    }
  }
  .checkbox__control {
    display: inline-grid;
    width: 1em;
    height: 1em;
    border-radius: 0.25em;
    border: 0.1em solid currentColor;
  }
  .checkbox__input {
    display: grid;
    grid-template-areas: "checkbox";
    > * {
      grid-area: checkbox;
    }
  }
  .checkbox__control svg {
    transition: transform 0.1s ease-in 25ms;
    transform: scale(0);
    transform-origin: bottom left;
  }
  .checkbox__input input:checked + .checkbox__control svg {
    transform: scale(1);
  }
  .checkbox__input input:focus + .checkbox__control {
    border: solid currentColor 2px;
  }
  .checkbox__input input:checkbox:disabled + .checkbox__control {
    color: var(--disabled);
  }
  .checkbox--disabled {
    color: var(--disabled);
  }
`;
