"use client";

import {
  ArrowBack,
  NotificationsOutlined,
  PersonOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import ClickToActionButton from "../ui/ClickToActionButton";
import Search from "../ui/Search";
import { usePathname, useRouter } from "next/navigation";

interface MainNavbarProps {
  showBackButton?: boolean;
}

const MainNavbar = ({ showBackButton = false }: MainNavbarProps) => {
  const pathname = usePathname();

  return (
    <>
      <nav className="bg-white shadow-xl/5 shadow-black/30">
        <div className="flex justify-between items-center px-5 py-1.5 gap-x-9 max-w-325 mx-auto">
          <div className="flex gap-x-4 items-center">
            {showBackButton && (
              <Link href="/" className="lg:hidden">
                <ArrowBack className="text-paragraph hidden" fontSize="small" />
              </Link>
            )}

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
            <Search />
            <div className="hidden lg:block">
              <ClickToActionButton />
            </div>

            <button
              type="button"
              className="w-12 aspect-square h-fit rounded-full flex items-center justify-center relative"
            >
              <NotificationsOutlined className="text-paragraph" />
              <span className="text-white bg-red-500 text-[10px] w-4 h-4 aspect-square rounded-full overflow-hidden flex items-center justify-center absolute top-1 right-0">
                1
              </span>
            </button>

            <button className="bg-primary/15 w-10 aspect-square h-fit rounded-full flex items-center justify-center border border-green-200">
              <PersonOutlined fontSize="small" className="text-green-700" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNavbar;
