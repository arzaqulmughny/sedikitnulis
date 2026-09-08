export enum menuEnum {
  "write" = "Tulis",
  "settings" = "Pengaturan",
}

interface MenuNavProps {
  onChangeMenu: (menu: menuEnum) => void;
  active: menuEnum;
}

const MenuNav = ({ onChangeMenu, active }: MenuNavProps) => {
  return (
    <ul className="flex justify-between items-center bg-white border-b border-b-paragraph/5 px-5">
      {Object.entries(menuEnum).map(([label, value]) => (
        <li className="w-full">
          <button
            type="button"
            onClick={() => onChangeMenu(value)}
            className={`cursor-pointer w-full border-b-2  py-2 text-sm lg:text-md ${active == value ? "border-b-green-700 text-green-700 font-semibold" : "border-b-transparent text-paragraph"}`}
          >
            {value}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MenuNav;
