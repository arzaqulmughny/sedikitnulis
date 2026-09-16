import { FavoriteBorderOutlined } from "@mui/icons-material";
import PostSortButton from "../../profile/ui/PostSortButton";
import mockData from "@/src/features/leaderboard/mocks/userList.json";

const UserList = () => {
  return (
    <div>
      <div className="flex gap-x-4">
        <PostSortButton active={true} label="Top Poin" />
        <PostSortButton label="Paling Aktif" />
        <PostSortButton label="Paling Disukai" />
        <PostSortButton label="Rising Writter" />
      </div>

      <ul className="flex flex-col gap-y-2 mt-4">
        {mockData.map((user, index) => (
          <li>
            <div className="bg-white border border-paragraph/5 flex items-center gap-x-6 rounded-xl px-6 py-6">
              <p className="text-sm font-semibold text-green-800">#{index + 1}</p>

              <div className="w-10 h-10 min-w-10 rounded-full overflow-hidden">
                <img src={user.photo_profile} alt={user.name} />
              </div>

              <div className="flex flex-col gap-y-1">
                <p className="text-paragraph text-xs font-semibold">
                  {user.name}
                </p>
                <p className="text-paragraph/70 text-xs">
                  {user.username} • {user.notes_count} catatan
                </p>
              </div>

              <div className="flex flex-col gap-y-0.5 items-end ms-auto">
                <p className="text-green-800 font-bold text-xs">
                  {user.points_count.toLocaleString()} pts
                </p>
                <div className="flex items-center gap-x-1">
                  <FavoriteBorderOutlined
                    fontSize="inherit"
                    className="text-red-500"
                    sx={{ fontSize: 10 }}
                  />
                  <p className="text-[10px] text-paragraph/60 font-semibold">
                    {user.likes_count.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
