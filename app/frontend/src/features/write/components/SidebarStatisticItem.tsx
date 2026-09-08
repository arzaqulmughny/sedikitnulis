interface SidebarStatisticItemProps {
  countTextColor: string;
  label: string;
  count: string;
}

const SidebarStatisticItem = ({
  countTextColor,
  count,
  label,
}: SidebarStatisticItemProps) => {
  return (
    <>
      <div className="flex flex-col gap-y-1 items-center bg-white min-w-18 px-2 py-3 rounded-md flex-1">
        <p className={`text-sm font-bold ${countTextColor}`}>{count}</p>
        <p className="text-xs text-center text-paragraph/50">{label}</p>
      </div>
    </>
  );
};

export default SidebarStatisticItem;
