import mockData from "@/src/features/leaderboard/mocks/communityActivity.json";

interface CommunityActivityChartProps {
  className?: string;
}

const CommunityActivityChart = ({ className }: CommunityActivityChartProps) => {
  const entries = Object.entries(mockData as Record<string, number>);
  const maxValue = Math.max(...entries.map(([, v]) => v));
  const maxBarHeight = 200; // px

  return (
    <div
      className={`flex items-end justify-between gap-2 px-4 h-65 ${className ? className : ""}`}
    >
      {entries.map(([day, value], index) => {
        const ratio = maxValue > 0 ? value / maxValue : 0;
        const height = ratio * maxBarHeight;
        const opacity = 0.25 + 0.75 * ratio;

        return (
          <div
            key={day}
            className="flex flex-col items-center gap-2 flex-1 min-w-0"
          >
            <span className="text-xs font-medium text-foreground/60">
              {value}
            </span>
            <div
              className="w-full bg-primary rounded-t-md transition-all"
              style={{ height: `${height}px`, opacity }}
            />
            <span
              className={`text-xs truncate w-full text-center ${value === maxValue ? "text-green-800 font-semibold" : "text-paragraph/70"}`}
            >
              {day}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CommunityActivityChart;
