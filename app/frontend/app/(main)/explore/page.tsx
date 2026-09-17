import PillContainer from "@/src/components/atoms/PillContainer";
import TopicList from "@/src/features/explore/components/TopicList";
import {
  LocalFireDepartmentOutlined,
  SearchOutlined,
  TagOutlined,
} from "@mui/icons-material";

import mockData from "@/src/features/explore/mocks/topicList.json";

const Page = () => {
  return (
    <>
      <div className="flex flex-col gap-y-8 px-5 max-w-325 mx-auto mt-5 pb-8">
        <div className="bg-white rounded-b-xl rounded-t-xl overflow-hidden shadow-xl/5 p-7">
          <div className="flex flex-col gap-y-3">
            <div className="flex items-center gap-x-3">
              <TagOutlined className="text-green-700" fontSize="small" />
              <h2 className="text-green-800 font-semibold tracking-wide text-sm text-nowrap gap-x-4 uppercase">
                Eksplor Topik
              </h2>
            </div>
          </div>

          <h1 className="text-paragraph text-xl font-bold mt-3">
            Temukan Topik Baru
          </h1>

          <p className="mt-3 text-paragraph/70 text-sm">
            Temukan topik dan catatan ringkas yang kamu sukai.
          </p>

          {/* Filters */}
          <label className="w-full inline-block mt-3">
            <PillContainer className="w-full">
              <div className="flex items-center gap-x-2">
                <SearchOutlined fontSize="inherit" />
                <input
                  type="text"
                  name="search"
                  placeholder="Cari topik..."
                  className="text-paragraph text-xs font-medium focus:outline-0 w-full h-full"
                />
              </div>
            </PillContainer>
          </label>
        </div>

        <TopicList
          title="5 Topik Populer"
          icon={
            <LocalFireDepartmentOutlined
              className="text-green-700"
              fontSize="small"
            />
          }
          data={mockData}
        />

        <TopicList
          title="Semua Topik"
          icon={
            <TagOutlined
              className="text-green-700"
              fontSize="small"
            />
          }
          data={mockData}
        />
      </div>
    </>
  );
};

export default Page;
