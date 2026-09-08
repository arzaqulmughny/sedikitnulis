import { useRef } from "react";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";

const Select = () => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleArrowClick = () => {
    selectRef.current?.showPicker();
  };

  return (
    <div className="relative w-full">
      <select
        ref={selectRef}
        className="appearance-none bg-primary/5 border border-primary/5 rounded-md text-sm w-full px-4 py-2 pr-8 focus:outline-0 cursor-pointer hover:brightness-80 text-paragraph"
      >
        <option value="1">test</option>
        <option value="2">test 2</option>
      </select>

      <button
        type="button"
        onClick={handleArrowClick}
        className="absolute right-0 top-0 h-full w-8 flex items-center justify-center"
      >
        <KeyboardArrowDownOutlined fontSize="small" className="text-green-800"/>
      </button>
    </div>
  );
};

export default Select;