"use client";

import {
  ArrowBack,
  MoreVert,
  SendOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import Button from "@/src/components/ui/Button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-xl/5 shadow-black/30 border-b border-b-paragraph/10">
      <div className="flex justify-between items-center px-5 py-3 gap-x-9 max-w-325 mx-auto">
        <div className="flex gap-x-4 items-center">
          <Link href="/">
            <ArrowBack className="text-paragraph hidden" fontSize="small" />
          </Link>

          <Link href="/" className="flex items-center gap-x-2 cursor-pointer">
            <img
              src="/assets/images/sedikitnulis.png"
              alt=""
              className="w-5.5"
            />
            <p className="text-primary font-black">SedikitNulis</p>
          </Link>
        </div>

        <div className="flex items-center gap-x-2 lg:gap-x-5">
          {/* <button className="w-8 group bg-white hover:bg-gray-50 h-8 flex items-center justify-center rounded-full cursor-pointer">
            <MoreVert className="text-paragraph hover:brightness-90" />
          </button> */}

          <Button className="flex items-center gap-x-2">
            <SendOutlined fontSize="inherit" /> Posting
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
