import { ArrowUpward, LocalFireDepartmentOutlined } from "@mui/icons-material";
import mockData from "@/src/features/leaderboard/mocks/featuredTopics.json";
import FeaturedTopicItem from "./FeaturedTopicItem";

const FeaturedTopics = () => {
  return (
    <>
      <div className="">
        <div className="flex items-center gap-x-3">
          <LocalFireDepartmentOutlined
            className="text-green-700"
            fontSize="small"
          />
          <h2 className="text-paragraph font-semibold tracking-wide text-sm text-nowrap gap-x-4">
            Topik Hangat
          </h2>

          <p className="text-xs ms-auto text-paragraph/70">
            Diupdate secara berkala setiap 10 menit
          </p>
        </div>

        <ul className="mt-5 flex gap-x-3 items-center overflow-x-auto scrollbar-none">
          {mockData.map((item, index) => (
            <li>
              <FeaturedTopicItem variant={index == 0 ? 'primary' : 'secondary'}/>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FeaturedTopics;
