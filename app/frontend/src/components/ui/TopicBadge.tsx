import { CloseOutlined } from "@mui/icons-material";
import { ButtonHTMLAttributes } from "react";

const variantClass = {
  "primary-muted":
    "bg-primary-muted text-paragraph flex items-center cursor-pointer font-bold shadow-primary/20 hover:brightness-95 hover:shadow-xl/50",
  primary:
    "bg-primary text-paragraph flex items-center cursor-pointer text-white font-bold shadow-primary/20 hover:brightness-95 hover:shadow-xl/50",
  secondary:
    "bg-primary/15 border border-primary/20 text-paragraph flex items-center cursor-pointer font-semibold shadow-primary/10 hover:brightness-70 hover:shadow-xl/50",
};

const sizeClass = {
  default: "px-4 py-1.5 rounded-2xl text-sm gap-x-2",
  small: "px-2 py-0.5 rounded-2xl text-xs gap-x-1",
};

interface TopicBadgeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantClass;
  showCloseIcon?: boolean;
  className?: string;
  size?: "default" | "small";
}

const TopicBadge = ({
  children,
  showCloseIcon = false,
  variant = "primary",
  size = "default",
  className,
  ...rest
}: TopicBadgeProps) => {
  return (
    <>
      <button
        type="button"
        className={`duration-300 h-fit ${variantClass[variant]} ${sizeClass[size]} ${className ? className : ""}`}
        {...rest}
      >
        {children}

        {showCloseIcon && variant === "primary" && (
          <CloseOutlined fontSize="inherit" />
        )}
      </button>
    </>
  );
};

export default TopicBadge;
