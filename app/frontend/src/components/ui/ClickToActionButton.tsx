import { EditNoteOutlined } from "@mui/icons-material";

const ClickToActionButton = () => {
  return (
    <button
      type="button"
      className="bg-linear-to-r from-primary to-primary-dark flex items-center w-fit px-5 py-2 rounded-4xl gap-x-1.5 cursor-pointer shadow-xl/30 shadow-primary/30 hover:shadow-xl/50 duration-300 hover:brightness-95"
    >
      <EditNoteOutlined className="text-white" fontSize="small" />{" "}
      <p className="text-white text-sm font-semibold">Tulis Catatan Baru</p>
    </button>
  );
};

export default ClickToActionButton;
