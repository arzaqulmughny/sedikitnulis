import { LocalFireDepartmentOutlined } from "@mui/icons-material";
import mockData from "@/src/features/leaderboard/mocks/featuredTopics.json";
import FeaturedTopicItem from "../../leaderboard/components/FeaturedTopicItem";
import { topicListType, topicType } from "../types/topic";
import TopicItem from "./TopicItem";

interface TopicListProps {
  title: string;
  icon: React.ReactElement;
  data: topicListType;
}

const TopicList = ({ title, icon, data }: TopicListProps) => {
  return (
    <>
      <div className="">
        <div className="flex items-center gap-x-3">
          {icon}
          <h2 className="text-paragraph font-semibold tracking-wide text-sm text-nowrap gap-x-4">
            {title}
          </h2>
        </div>

        <ul className="mt-5 grid grid-cols-3 lg:grid-cols-5 gap-3">
          {data &&
            data.map((topic, index) => (
              <li className="flex-1 shrink-0 grow-0">
                <TopicItem />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default TopicList;
