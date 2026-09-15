import {
  CalendarMonthOutlined,
  GroupAddOutlined,
  LightbulbOutlined,
  LoyaltyOutlined,
  TagOutlined,
} from "@mui/icons-material";
import CounterPill from "./CounterPill";
import data from "@/src/features/profile/mock/mostFrequentlyTopics.json";
import FrequentlyTopicCard from "../ui/FrequentlyTopicCard";
import RelatedWritterCard from "../ui/RelatedWritterCard";
import Button from "@/src/components/ui/Button";

const Tips = () => {
  return (
    <>
      <div className="m-4 bg-linear-to-br from-[#EEF6EE] to-white rounded-b-xl rounded-t-xl overflow-hidden shadow-xl/5 p-8 border border-[#10B981]/30">
        <div className="flex flex-col gap-y-3">
          <div className="flex items-center gap-x-3">
            <LightbulbOutlined className="text-green-700" fontSize="small" />
            <h2 className="text-green-800 font-semibold text-sm text-nowrap gap-x-4">
              Ide Menulis Hari Ini
            </h2>
          </div>
        </div>

        <p className="mt-3 text-paragraph/80 text-sm">
          "Apa satu bug atau error paling aneh yang berhasil kamu perbaiki
          minggu ini? Ceritakan solusinya secara singkat."
        </p>

        <button className="bg-green-800  text-white w-full px-3 py-2 rounded-xl text-sm font-medium mt-4">
          Mulai Tulis Rangkuman
        </button>
      </div>
    </>
  );
};

export default Tips;
