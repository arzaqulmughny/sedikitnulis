import { Check } from "@mui/icons-material";
import { InputHTMLAttributes } from "react";

interface InputCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputCheckbox = ({ label, ...restProps }: InputCheckboxProps) => {
  return (
    <>
      <label className="flex justify-between">
        {label && label.length > 0 && <p className="text-xs text-paragraph/70">{label}</p>}

        <input type="checkbox" className="sr-only peer" {...restProps} />

        <div className="cursor-pointer hover:brightness-90 border border-paragraph/20 w-5 h-5 min-w-5 flex items-center justify-center rounded-sm text-transparent peer-checked:text-white peer-checked:bg-green-700 duration-300">
          <Check fontSize="small" />
        </div>
      </label>
    </>
  );
};

export default InputCheckbox;
