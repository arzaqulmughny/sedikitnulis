import {
  CalendarMonthOutlined,
  CameraAltOutlined,
  EditOutlined,
  LinkOutlined,
  LocationOnOutlined,
  ShareOutlined,
  Stars,
} from "@mui/icons-material";
import CounterPill from "./CounterPill";
import PostSortButton from "../ui/PostSortButton";
import FeedCard from "@/src/components/FeedCard";

const Post = () => {
  return (
    <>
      <div className="px-4 mt-4">
        <div className="flex items-center gap-x-2">
          <PostSortButton active={true} label="Terbaru" />
          <PostSortButton active={false} label="Populer" />
        </div>

        <ul className="py-5 flex flex-col gap-y-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <FeedCard />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Post;
