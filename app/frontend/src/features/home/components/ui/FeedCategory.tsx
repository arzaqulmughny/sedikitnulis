import { ButtonHTMLAttributes } from "react";

const classString = {
  activeClass: "text-primary border-b-primary",
  unactiveClass: "text-paragraph border-b-transparent hover:text-primary",
};

interface FeedCategoryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  active?: boolean;
}

const FeedCategory = ({
  title,
  active = false,
  ...rest
}: FeedCategoryProps) => {
  return (
    <>
      <button
        type="button"
        className={`text-nowrap font-semibold text-sm border-b-2 w-fit pb-3 px-1 cursor-pointer duration-300 ${active ? classString.activeClass : classString.unactiveClass}`}
        {...rest}
      >
        {title}
      </button>
    </>
  );
};

export default FeedCategory;
