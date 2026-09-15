import { CheckOutlined, PersonAddOutlined, TagOutlined } from "@mui/icons-material";

interface RelatedWritterCardProps {
  photo?: string;
  name: string;
  username: string;
  tags: string[];
  isFollowed: boolean;
  className?: string;
}

const tags = ["Nextjs", "Frontend"];

const RelatedWritterCard = ({
  name,
  className,
  isFollowed,
  tags,
  username,
  photo,
}: RelatedWritterCardProps) => {
  return (
    <>
      <div className={`bg-primary/5 border border-paragraph/5 rounded-xl px-3 py-2 flex gap-x-2 items-center ${className ? className : ''}`}>
        <div className="bg-primary/10 min-w-10 w-10 h-10 flex items-center justify-center rounded-full text-xs font-bold text-green-800">
          SR
        </div>

        <div className="flex flex-col gap-y-1">
          <p className="text-sm font-semibold text-paragraph">{name}</p>
          <p className="text-xs text-paragraph/70">@{username}</p>

          <ul className="flex gap-x-2">
            {tags.map((tag, index) => (
              <li>
                <p className="text-[10px] text-green-800 font-semibold bg-primary/5 px-1 py-0.5 rounded-sm">
                  #{tag}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <button className="ml-auto flex items-center gap-x-2 bg-green-800 h-fit rounded-2xl py-1.5 px-2 hover:brightness-90 duration-300 cursor-pointer">
          {isFollowed ? (
            <>
              <CheckOutlined fontSize="inherit" className="text-white" />
              <p className="text-white text-xs font-semibold">Diikuti</p>
            </>
          ) : (
            <>
              <PersonAddOutlined fontSize="inherit" className="text-white" />
              <p className="text-white text-xs font-semibold">Ikuti</p>
            </>
          )}
        </button>
      </div>
    </>
  );
};

export default RelatedWritterCard;
