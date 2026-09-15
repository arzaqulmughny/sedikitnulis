import { cloneElement } from "react";

const variantClass = {
  default: {
    container: "border border-paragraph/5",
    title: "text-paragraph/70",
    counter: "text-paragraph font-semibold",
  },
  emphasize: {
    container: "border border-primary/30",
    title: "text-green-700 font-medium",
    counter: "text-green-700 font-bold",
  },
};

interface CounterPillProps {
  count?: string;
  title: string;
  variant?: keyof typeof variantClass;
  icon?: React.ReactElement;
  className?: string;
}

const CounterPill = ({
  count,
  title,
  variant = "default",
  icon,
  className
}: CounterPillProps) => {
  const CloneIcon = cloneElement(icon ?? <></>, {
    className: variantClass[variant].title,
    fontSize: "inherit",
  });

  return (
    <>
      <div
        className={`flex items-center gap-x-1.5 bg-primary/5 w-fit px-3 py-1 rounded-xl ${variantClass[variant].container} ${className ? className : ''}`}
      >
        {icon && CloneIcon}
        {count && <p className={`text-xs text-nowrap ${variantClass[variant].counter}`}>{count}</p>}
        <p className={`text-xs text-nowrap ${variantClass[variant].title}`}>{title}</p>
      </div>
    </>
  );
};

export default CounterPill;
