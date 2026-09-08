import {
  AnalyticsOutlined,
  FolderOutlined,
  LabelOutlined,
  TuneOutlined,
} from "@mui/icons-material";
import SidebarStatisticItem from "./SidebarStatisticItem";
import Select from "@/src/components/ui/Select";
import TagInput from "./TagInput";
import VisibilitySelect from "./VisibilitySelect";
import AdditionOption from "./AdditionalOption";
import TipsCard from "./TipsCard";
import Statistics from "./Statistics";
import MainCategorySelect from "./MainCategorySelect";

const Sidebar = () => {
  return (
    <>
      <div className="border border-paragraph/5 bg-white px-8 py-4 flex flex-col gap-y-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-x-3 border-b border-b-paragraph/5 pb-3 sticky top-0">
          <div className="flex flex-col gap-y-1">
            <h2 className="text-paragraph font-bold text-md">
              Pengaturan Catatan
            </h2>
            <p className="text-sm text-paragraph/50 font-medium">
              Kelola preferensi dan visibilitas tulisan
            </p>
          </div>

          <div>
            <TuneOutlined className="text-green-700" fontSize="medium" />
          </div>
        </div>

        <div className="flex flex-col gap-y-8 mb-5">
          <Statistics />
          <MainCategorySelect />
          <TagInput />
          <VisibilitySelect />
          <AdditionOption />
          <TipsCard />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
