import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { ButtonStyles } from "./styles";

const Button = (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  const { onClick, disabled, children, type } = props;
  return (
    <ButtonStyles onClick={onClick} disabled={disabled} type={type}>
      {children}
    </ButtonStyles>
  );
};

export default Button;
