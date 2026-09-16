interface CommunityActivitySumProps {
  title: string;
  count_string: string;
  text_color?: string;
  className?: string;
}

const CommunityActivitySum = ({
  title,
  count_string,
  text_color = "text-paragraph",
  className
}: CommunityActivitySumProps) => {
  return (
    <>
      <div className={`flex flex-col gap-y-1 items-center px-4 flex-1 bor ${className ? className : ''}`}>
        <p className="text-paragraph/80 text-xs">{title}</p>
        <p className={`font-semibold ${text_color}`}>{count_string}</p>
      </div>
    </>
  );
};

export default CommunityActivitySum;
