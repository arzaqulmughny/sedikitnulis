import { ButtonHTMLAttributes } from "react";

const variantClass = {
    primary: "bg-primary duration-300 text-white font-bold rounded-md hover:brightness-90 shadow-xl/30 shadow-primary/30 hover:shadow-xl/50",
}

const sizeClass = {
  default: "text-xs lg:text-sm px-4 py-2",
}

const baseClass = "w-fit cursor-pointer";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactElement | React.ReactNode;
    variant?: keyof typeof variantClass;
    size?: keyof typeof sizeClass;
    className?: string
}

const Button = ({children, variant = "primary", size = "default", className, ...rest}: ButtonProps) => {
  return <>
    <button className={`${baseClass} ${variantClass[variant]} ${sizeClass[size]} ${className ? className : ''}`} {...rest}>
        {children}
    </button>
  </>;
};

export default Button;
