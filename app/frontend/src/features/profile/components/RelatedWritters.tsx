import {
  CalendarMonthOutlined,
  GroupAddOutlined,
  LoyaltyOutlined,
  TagOutlined,
} from "@mui/icons-material";
import CounterPill from "./CounterPill";
import data from "@/src/features/profile/mock/mostFrequentlyTopics.json";
import FrequentlyTopicCard from "../ui/FrequentlyTopicCard";
import RelatedWritterCard from "../ui/RelatedWritterCard";

const RelatedWritters = () => {
  return (
    <>
      <div className="m-4 bg-white rounded-b-xl rounded-t-xl overflow-hidden shadow-xl/5 p-8">
        <div className="flex flex-col gap-y-3 border-b border-b-paragraph/5 pb-4">
          <div className="flex items-center gap-x-3">
            <GroupAddOutlined className="text-green-700" fontSize="small" />
            <h2 className="text-paragraph font-semibold text-sm text-nowrap gap-x-4">
              Penulis Serupa
            </h2>

            <CounterPill title="Rekomendasi" className="ms-auto" />
          </div>
        </div>

        <p className="mt-3 text-paragraph/70 text-xs">
          Penulis aktif lain dengan minat topik yang mirip dengan profil ini:
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {data.map((dataItem, index) => (
            <>
              <RelatedWritterCard
                className="flex-1"
                username="arzaqul"
                name="Arza"
                isFollowed={index % 2 == 0 ? true : false}
                tags={["Nextjs", "Frontend"]}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedWritters;
