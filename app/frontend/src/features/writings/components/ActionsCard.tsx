import {
  Bookmark,
  BookmarkBorderOutlined,
  ChatBubble,
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  Share,
  ShareOutlined,
} from "@mui/icons-material";
import ActionButton from "../ui/ActionButton";

const ActionCard = () => {
  return (
    <>
      <section className="flex flex-col gap-y-4 bg-white px-8 py-2 rounded-xl shadow-xl/5 shadow-black/30">
        <ul className="flex gap-x-4 justify-between">
          <li>
            <ActionButton
              label="24 Suka"
              activeIcon={
                <FavoriteOutlined
                  fontSize="inherit"
                  className="text-paragraph"
                />
              }
              unactiveIcon={
                <FavoriteBorderOutlined
                  fontSize="inherit"
                  className="text-paragraph"
                />
              }
            />
          </li>
          <li>
            <ActionButton
              label="Simpan"
              activeIcon={
                <Bookmark fontSize="inherit" className="text-paragraph" />
              }
              unactiveIcon={
                <BookmarkBorderOutlined
                  fontSize="inherit"
                  className="text-paragraph"
                />
              }
            />
          </li>
          <li>
            <a href="#comment">
              <ActionButton
                label="12 Komentar"
                activeIcon={
                  <ChatBubble fontSize="inherit" className="text-paragraph" />
                }
                unactiveIcon={
                  <ChatBubbleOutlineOutlined
                    fontSize="inherit"
                    className="text-paragraph"
                  />
                }
              />
            </a>
          </li>
          <li>
            <ActionButton
              label="Bagikan"
              activeIcon={
                <Share fontSize="inherit" className="text-paragraph" />
              }
              unactiveIcon={
                <ShareOutlined fontSize="inherit" className="text-paragraph" />
              }
            />
          </li>
        </ul>
      </section>
    </>
  );
};

export default ActionCard;
