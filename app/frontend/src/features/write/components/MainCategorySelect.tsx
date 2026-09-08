import Select from "@/src/components/ui/Select";
import { FolderOutlined } from "@mui/icons-material";

const MainCategorySelect = () => {
  return (
    <>
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-3">
          <FolderOutlined className="text-paragraph" fontSize="inherit" />
          <h3 className="text-paragraph font-semibold leading-0 uppercase tracking-wide text-sm">
            Kategori Utama
          </h3>
        </div>

        <Select />
      </div>
    </>
  );
};

export default MainCategorySelect;
