interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  activeIcon: React.ReactElement;
  unactiveIcon: React.ReactElement;
  label: string;
}

const ActionButton = ({
  activeIcon,
  unactiveIcon,
  label,
  ...rest
}: ActionButtonProps) => {
  return (
    <>
      <button
        type="button"
        className="flex flex-col gap-y-2 items-center cursor-pointer group"
        {...rest}
      >
        <div className="group-hover:hidden">{unactiveIcon}</div>
        <div className="hidden group-hover:block">{activeIcon}</div>
        <p className="text-xs text-paragraph font-semibold">{label}</p>
      </button>
    </>
  );
};

export default ActionButton;
