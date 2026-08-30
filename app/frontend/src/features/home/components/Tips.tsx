import { MenuBookOutlined } from "@mui/icons-material";

const Tips = () => {
  return (
    <>
      <div className="bg-primary h-fit w-full p-8 rounded-xl flex flex-col shadow-xl/5 shadow-primary">
        <div className="bg-white/30 w-fit p-3 rounded-2xl">
          <MenuBookOutlined className="text-white" />
        </div>

        <h2 className="text-white font-bold text-lg mt-2.5">
          Mengapa Mencatat itu Penting?
        </h2>

        <p className="text-white text-sm text-pretty font-medium mt-1">
          Mencatat membantu memperkuat ingatan, menstrukturkan pemikiran, dan
          memudahkan kamu untuk meninjau kembali apa yang telah dipelajari di
          masa depan.
        </p>
      </div>
    </>
  );
};

export default Tips;
