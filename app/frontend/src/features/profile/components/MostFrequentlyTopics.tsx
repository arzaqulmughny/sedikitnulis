import {
  CalendarMonthOutlined,
  LoyaltyOutlined,
  TagOutlined,
} from "@mui/icons-material";
import CounterPill from "./CounterPill";
import data from "@/src/features/profile/mock/mostFrequentlyTopics.json";
import FrequentlyTopicCard from "../ui/FrequentlyTopicCard";

const MostFrequentlyTopics = () => {
  return (
    <>
      <div className="m-4 bg-white rounded-b-xl rounded-t-xl overflow-hidden shadow-xl/5 p-8">
        <div className="flex flex-col gap-y-3 border-b border-b-paragraph/5 pb-4">
          <div className="flex items-center gap-x-3">
            <LoyaltyOutlined className="text-green-700" fontSize="small" />
            <h2 className="text-paragraph font-semibold text-sm text-nowrap gap-x-4">
              Topik Paling Sering Ditulis
            </h2>

            <CounterPill count="6" title="Topik Utama" className="ms-auto" />
          </div>
        </div>

        <p className="mt-3 text-paragraph/70 text-xs">
          Daftar bidang minat dan fokus tulisan yang paling sering dibagikan:
        </p>

        <div className="grid grid-cols-2 gap-3 mt-4">
          {data.map((dataItem, index) => (
            <>
              <FrequentlyTopicCard
                key={index}
                count={dataItem.count}
                topic={dataItem.topic}
                className=""
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default MostFrequentlyTopics;
