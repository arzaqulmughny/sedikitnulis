import SectionContainer from "@/src/components/atoms/SectionContainer";
import { TimelineOutlined } from "@mui/icons-material";
import CommunityActivitySum from "./CommunityActivitySum";
import CommunityActivityChart from "./CommunityActivityChart";

const CommunityActivity = () => {
  return (
    <>
      <SectionContainer>
        <>
          <div className="flex items-center gap-x-4">
            <TimelineOutlined className="text-green-800" fontSize="inherit" />
            <h2 className="text-sm text-paragraph font-semibold">
              Aktivitas Komunitas: #Programming
            </h2>
          </div>

          <div className="flex bg-primary/5 py-4 rounded-xl border border-paragraph/5 mt-4">
            <CommunityActivitySum title="Catatan" count_string="1.240" />
            <CommunityActivitySum
              title="Likes"
              count_string="8.4k"
              text_color="text-blue-900"
              className="nth-[2]:border-x nth-[2]:border-x-paragraph/10"
            />
            <CommunityActivitySum
              title="Poin Diraih"
              count_string="34.5k"
              text_color="text-green-800"
            />
          </div>

          <CommunityActivityChart className="mt-4"/>
        </>
      </SectionContainer>
    </>
  );
};

export default CommunityActivity;
