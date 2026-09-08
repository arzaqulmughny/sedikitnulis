import { AnalyticsOutlined } from "@mui/icons-material";
import SidebarStatisticItem from "./SidebarStatisticItem";

const Statistics = () => {
  return (
    <>
      <div className="bg-primary/5 border border-paragraph/5 rounded-xl p-4 flex flex-col gap-y-4">
        <div className="flex items-center gap-x-3">
          <AnalyticsOutlined className="text-green-800" fontSize="inherit" />
          <h3 className="text-green-800 font-semibold leading-0 text-sm">
            Statistik Konten
          </h3>
        </div>

        <div className="flex items-stretch justify-between gap-x-3">
          <SidebarStatisticItem
            count="0"
            label="Kata"
            countTextColor="text-green-800"
          />

          <SidebarStatisticItem
            count="0"
            label="Karakter"
            countTextColor="text-paragraph"
          />

          <SidebarStatisticItem
            count="~0 m"
            label="Waktu Baca"
            countTextColor="text-blue-800"
          />
        </div>
      </div>
    </>
  );
};

export default Statistics;
