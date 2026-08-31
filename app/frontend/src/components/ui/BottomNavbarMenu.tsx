interface BottomNavbarMenuProps {
  label: string;
  activeIcon: React.ReactElement;
  unactiveIcon: React.ReactElement;
  active: boolean;
}

const BottomNavbarMenu = ({
  label,
  active,
  activeIcon,
  unactiveIcon,
}: BottomNavbarMenuProps) => {
  return (
    <>
      <div className={`flex group flex-col gap-y-0.5 items-center w-fit px-2 py-2 rounded-2xl duration-300 ${active ? 'text-primary bg-primary/10 hover:brightness-90' : 'text-paragraph bg-transparent hover:bg-primary/10 hover:text-primary'}`}>
        {active && activeIcon}
        {!active && unactiveIcon}

        <p className={`text-[10px] ${active ? 'font-semibold' : 'font-normal group-hover:font-semibold'} `}>{label}</p>
      </div>
    </>
  );
};

export default BottomNavbarMenu;
