import Button from "@/src/components/ui/Button";
import { PersonOutlined } from "@mui/icons-material";

const WritterInformation = () => {
  return (
    <>
      <section className="flex flex-col gap-y-6 bg-white p-8 rounded-xl shadow-xl/5 shadow-black/30 h-fit">
        <div className="bg-primary-muted w-12 h-12 flex items-center justify-center rounded-full">
          <PersonOutlined className="text-green-700" />
        </div>

        <div className="flex flex-col gap-y-4">
          <p className="text-paragraph font-bold text-sm lg:text-lg leading-0">
            Ditulis oleh Arza
          </p>
          <p className="text-xs text-paragraph/70 lg:text-sm">
            Seorang pengembang frontend yang senang berbagi ilmu. Fokus pada
            React, Vue, dan desain UI/UX yang human-centric.
          </p>
        </div>

        <div className="flex gap-x-4">
          <p className="text-paragraph text-xs flex gap-x-2">
            <span className="text-md font-bold">42</span>Tulisan
          </p>
          <p className="text-paragraph text-xs flex gap-x-2">
            <span className="text-md font-bold">1.2k</span>Pengikut
          </p>
        </div>

        <Button>Ikuti Penulis</Button>
      </section>
    </>
  );
};

export default WritterInformation;
