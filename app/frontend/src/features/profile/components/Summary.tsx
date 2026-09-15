import {
  CalendarMonthOutlined,
  CameraAltOutlined,
  EditOutlined,
  LinkOutlined,
  LocationOnOutlined,
  ShareOutlined,
  Stars,
  StarsOutlined,
} from "@mui/icons-material";
import CounterPill from "./CounterPill";

const Summary = () => {
  return (
    <>
      <div className="m-4 bg-white rounded-b-xl rounded-t-xl overflow-hidden shadow-xl/5">
        <div className="bg-blue-100 w-full h-45 flex items-start justify-end p-4 relative">
          <button className="bg-white flex items-center gap-x-2 rounded-xl px-4 py-1.5">
            <CameraAltOutlined fontSize="inherit" className="shadow-xl/5 shadow-black/30" />
            <p className="text-xs text-paragraph">Ubah Sampul</p>
          </button>

          <div className="bg-purple-100 w-25 aspect-square absolute -bottom-12 left-6 rounded-full border-3 border-white shadow-md/5">
            <button className="bg-green-800 flex items-center justify-center w-7.5 aspect-square rounded-full absolute right-0 bottom-0">
              <CameraAltOutlined className="text-white" fontSize="inherit" />
            </button>
          </div>
        </div>

        <div className="px-7 pt-15 pb-8">
          <h1 className="text-paragraph font-semibold text-xl">Rian Pratama</h1>
          <div className="flex gap-x-5 mt-1.5 items-center">
            <p className="text-paragraph/70 text-sm">@rianpratama</p>
            <div className="flex items-center gap-x-2 bg-primary/5 w-fit px-3 py-1 rounded-xl border border-paragraph/5">
              <span className="w-1.5 aspect-square bg-primary inline-block rounded-full" />
              <p className="text-xs text-green-800 font-medium">
                Active Learner
              </p>
            </div>
          </div>

          <div className="mt-7 flex gap-2 flex-wrap">
            <CounterPill count="1.280" title="Pengikut" />
            <CounterPill count="342" title="Mengikuti" />
            <CounterPill count="48" title="Catatan" />
            <CounterPill count="2.940" title="Suka" />
            <CounterPill
              count="1.450"
              title="Pts"
              variant="emphasize"
              icon={<Stars />}
            />
          </div>

          <div className="mt-5 flex gap-x-4 items-center flex-wrap">
            <button className="flex gap-x-2 items-center border border-green-700 rounded-xl px-4 py-1.5">
              <EditOutlined className="text-green-700" fontSize="inherit" />
              <p className="text-green-700 text-xs">Edit Profil</p>
            </button>

            <button className="flex gap-x-2 items-center border border-paragraph/5 bg-primary/5 rounded-xl px-4 py-1.5">
              <ShareOutlined className="text-paragraph" fontSize="inherit" />
              <p className="text-paragraph text-xs">Bagikan Profil</p>
            </button>
          </div>

          <p className="text-paragraph text-sm mt-5">
            Seorang software engineer, Suka merangkum hal-hal baru seputar
            typescript, Next.js, Go dan tips produktivitas ringan. Mari saling
            bertukar bikiran dan bertumbuh bersama!
          </p>

          <div className="mt-5 flex gap-x-7 flex-wrap">
            <div className="flex items-center gap-x-1">
              <CalendarMonthOutlined
                className="text-paragraph/60"
                fontSize="inherit"
              />
              <p className="text-xs text-paragraph/70">
                Bergabung Februari 2024
              </p>
            </div>

            <div className="flex items-center gap-x-2">
              <LocationOnOutlined
                className="text-paragraph/60"
                fontSize="inherit"
              />
              <p className="text-xs text-paragraph/70">
                Bandung, Indonesia
              </p>
            </div>

            <div className="flex items-center gap-x-2">
              <LinkOutlined
                className="text-green-700"
                fontSize="inherit"
              />
              <p className="text-xs text-green-700 font-medium">
                rianpratama.dev
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
