import ClickToActionButton from "@/src/components/ui/ClickToActionButton";
import { EditNoteOutlined } from "@mui/icons-material";

const Welcome = () => {
  return (
    <>
      <section className="flex flex-col gap-y-4 bg-linear-to-r from-white to-primary/5 p-8 rounded-xl shadow-xl/5 shadow-black/30 relative overflow-hidden -z-50">
        <h1 className="font-bold text-2xl text-paragraph">
          Selamat datang kembali, Arza! 👋
        </h1>

        <p className="text-sm text-paragraph text-pretty">
          Apa yang kamu pelajari hari ini? Tuliskan pemahamanmu untuk
          mengingatnya lebih baik.
        </p>

        <ClickToActionButton />

        <img className="absolute top-1/2 -translate-y-1/2 right-1 w-57.5 opacity-10 pointer-events-none" src="/assets/images/welcome.png" alt="" />
      </section>
    </>
  );
};

export default Welcome;
