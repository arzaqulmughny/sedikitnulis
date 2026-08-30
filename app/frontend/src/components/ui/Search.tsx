import { SearchOutlined } from "@mui/icons-material";

const Search = () => {
  return (
    <>
      <label className="bg-primary-muted flex items-center w-fit px-5 py-2 rounded-4xl gap-x-1.5 cursor-pointer border border-paragraph/5">
        <SearchOutlined className="text-paragraph/70" fontSize="small" />
        <input type="text" className="text-paragraph placeholder:text-paragraph/70 focus:outline-none w-full h-full text-sm font-normal" placeholder="Cari catatan..."/>
      </label>
    </>
  );
};

export default Search;
