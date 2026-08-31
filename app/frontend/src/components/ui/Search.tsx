import { SearchOutlined } from "@mui/icons-material";

const Search = () => {
  return (
    <>
      <label className="lg:bg-primary-muted flex items-center w-fit lg:px-5 lg:py-2 lg:rounded-4xl gap-x-1.5 cursor-pointer lg:border border-paragraph/5">
        <SearchOutlined sx={{ fontSize: { xs: 24, md: 18 } }} className="lg:text-paragraph/70 text-paragraph" />
        <input type="text" className="text-paragraph lg:placeholder:text-paragraph/70 focus:outline-none lg:w-full h-full text-sm font-normal placeholder-transparent hidden lg:block" placeholder="Cari catatan..."/>
      </label>
    </>
  );
};

export default Search;
