import PillContainer from "@/src/components/atoms/PillContainer";
import CommunityActivity from "@/src/features/leaderboard/components/CommunityActivity";
import FeaturedTopics from "@/src/features/leaderboard/components/FeaturedTopics";
import UserList from "@/src/features/leaderboard/components/UserList";
import {
  ArrowUpward,
  CalendarMonthOutlined,
  KeyboardArrowDownOutlined,
  LocalFireDepartmentOutlined,
  MilitaryTechOutlined,
  TuneOutlined,
} from "@mui/icons-material";

const Page = () => {
  return (
    <>
      <div className="flex flex-col gap-y-8 px-5 max-w-325 mx-auto mt-5 pb-8">
        <div className="bg-white rounded-b-xl rounded-t-xl overflow-hidden shadow-xl/5 p-7">
          <div className="flex flex-col gap-y-3">
            <div className="flex items-center gap-x-3">
              <MilitaryTechOutlined
                className="text-green-700"
                fontSize="small"
              />
              <h2 className="text-green-800 font-semibold tracking-wide text-sm text-nowrap gap-x-4 uppercase">
                Peringkat Menulis
              </h2>
            </div>
          </div>

          <h1 className="text-paragraph text-xl font-bold mt-3">
            Leaderboard Komunitas
          </h1>

          <p className="mt-3 text-paragraph/70 text-sm">
            Lihat siapa yang aktif berbagi catatan bermanfaat dan mendapatkan
            apresiasi tertinggi minggu ini.
          </p>

          {/* Filters */}
          <div className="mt-3 flex items-center overflow-x-auto gap-x-4">
            <PillContainer>
              <label className="flex items-center gap-x-2">
                <CalendarMonthOutlined fontSize="inherit" />
                <p className="text-paragraph text-xs font-medium">Bulan ini</p>
                <KeyboardArrowDownOutlined
                  className="text-paragraph"
                  fontSize="inherit"
                />
              </label>
            </PillContainer>

            <PillContainer>
              <label className="flex items-center gap-x-2">
                <p className="text-paragraph text-xs font-medium">
                  # Pilih Topik
                </p>
                <KeyboardArrowDownOutlined
                  className="text-paragraph"
                  fontSize="inherit"
                />
              </label>
            </PillContainer>

            <PillContainer>
              <label className="flex items-center gap-x-2">
                <TuneOutlined className="text-paragraph" fontSize="inherit" />
                <p className="text-paragraph text-xs font-medium">Filters</p>
              </label>
            </PillContainer>
          </div>
        </div>

        <FeaturedTopics />
        <CommunityActivity />
        <UserList />
      </div>
    </>
  );
};

export default Page;
