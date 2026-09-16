import { ButtonHTMLAttributes } from "react";

const variantClass = {
  default: "text-paragraph/50",
  active: "bg-green-800 text-white font-semibold",
};

interface PostSortButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  active?: boolean;
}

const PostSortButton = ({
  label,
  active = false,
  ...restProps
}: PostSortButtonProps) => {
  return (
    <>
      <button
        className={`text-xs rounded-xl cursor-pointer hover:brightness-90 duration-300 px-3 py-1.5 font-semibold ${variantClass[active ? "active" : "default"]}`}
      >
        {label}
      </button>
    </>
  );
};

export default PostSortButton;
