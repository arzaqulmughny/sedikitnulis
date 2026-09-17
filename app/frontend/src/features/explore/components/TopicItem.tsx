import Button from "@/src/components/ui/Button";
import { AddOutlined, TagOutlined } from "@mui/icons-material";

const TopicItem = () => {
  return (
    <div className="bg-white p-4.5 rounded-xl border border-paragraph/5 shadow-xl/5 shadow-black/30">
      <div className="bg-primary/10 w-fit p-2 rounded-xl flex items-center justify-center">
        <TagOutlined className="text-green-800" fontSize="inherit" />
      </div>

      <p className="text-paragraph text-sm font-semibold mt-3">Javascript</p>
      <p className="text-paragraph/70 text-[11px] text-nowrap">1.4k catatan • 3.2k diikuti</p>

      <Button className="flex items-center gap-x-2 w-full justify-center mt-4" size="small">
        <AddOutlined />
        <p>Ikuti</p>
      </Button>
    </div>
  );
};

export default TopicItem;
