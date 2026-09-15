import { TagOutlined } from "@mui/icons-material";

interface FrequentlyTopicCardProps {
  icon?: React.ReactElement;
  topic: string;
  count: number;
  className?: string;
}

const FrequentlyTopicCard = ({
  icon,
  count,
  topic,
  className,
}: FrequentlyTopicCardProps) => {
  return (
    <>
      <div
        className={`bg-primary/5 border border-paragraph/5 rounded-xl py-2 px-3 ${className ? className : ""}`}
      >
        <div className="flex items-center gap-x-2 border-b border-b-paragraph/5 pb-3">
          <div className="bg-primary/10 w-6 h-6 flex items-center justify-center rounded-xl p-1">
            <TagOutlined className="text-green-800" fontSize="inherit" />
          </div>

          <p className="text-xs text-green-800 font-semibold">#{topic}</p>
        </div>

        <p className="text-paragraph/80 text-xs mt-3">{count} catatan</p>
      </div>
    </>
  );
};

export default FrequentlyTopicCard;
