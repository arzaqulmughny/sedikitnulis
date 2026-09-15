import {
  ArticleOutlined,
  CalendarMonthOutlined,
  CameraAltOutlined,
  EditOutlined,
  LinkOutlined,
  LocationOnOutlined,
  ShareOutlined,
  Stars,
  StarsOutlined,
} from "@mui/icons-material";
import ActivityGrid from "./ActivityGrid";
import CounterPill from "./CounterPill";

const Activity = () => {
  return (
    <>
      <div className="m-4 bg-white rounded-b-xl rounded-t-xl overflow-hidden shadow-xl/5 p-8">
        <div className="flex flex-col gap-y-3 border-b border-b-paragraph/5 pb-4">
          <div className="flex items-center gap-x-3">
            <CalendarMonthOutlined
              className="text-green-700"
              fontSize="inherit"
            />
            <h2 className="text-paragraph font-semibold text-sm">
              Aktivitas Menulis (2025-2026)
            </h2>
          </div>

          <p className="text-paragraph/70 text-xs">
            Pantau konsistensi berbagi insight dan rangkuman harian
          </p>

          <div className="flex gap-x-2">
            <CounterPill count="184" title="catatan tahun ini" />
            <CounterPill count="128" title="hari aktif" />
            <CounterPill
              count="24"
              title="hari streak 🔥"
              variant="emphasize"
            />
          </div>
        </div>

        {/* User write activity */}
        <div className="mt-4">
          <ActivityGrid />
        </div>
      </div>
    </>
  );
};

export default Activity;
