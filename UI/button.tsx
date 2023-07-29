import Link from "next/link";
import { LinkProps } from "next/link";
import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;
type Name = {name: string}

export const ButtonForm = ({ children }: ButtonProps) => {
  return <button>{children}</button>;
};

const Button = ({href, name }: LinkProps & Name) => {
  return <Link href={href}>{name}</Link>
}

export default Button;
