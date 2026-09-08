import { InputHTMLAttributes } from "react";

interface VisibilityOptionProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  description: string;
  value: string;
}

const VisibilityOption = ({
  title,
  description,
  value,
  ...restProps
}: VisibilityOptionProps) => {
  return (
    <>
      <label className="flex items-start duration-300 hover:bg-primary/5 gap-x-5 bg-white border border-paragraph/5 p-5 rounded-xl cursor-pointer has-checked:border-green-700 has-checked:bg-primary/5">
        <input
          type="radio"
          value={value}
          className="peer sr-only"
          {...restProps}
        />
        <span className="w-5 min-w-5 h-5 bg-white border border-paragraph/10 rounded-full peer-checked:border-green-700 peer-checked:border-5 duration-300" />

        <div className="flex flex-col gap-y-3">
          <p className="text-xs font-semibold text-paragraph leading-0">
            {title}
          </p>
          <p className="text-paragraph/60 text-xs">{description}</p>
        </div>
      </label>
    </>
  );
};

export default VisibilityOption;
