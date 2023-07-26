import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

const Button = ({ children }: ButtonProps) => {
  return <button>{children}</button>;
};

export default Button;
