"use client";

import {
  AddCircleOutlineOutlined,
  AddOutlined,
  Explore,
  ExploreOutlined,
  HomeFilled,
  HomeOutlined,
  Leaderboard,
  LeaderboardOutlined,
  Person,
  PersonOutlineOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import BottomNavbarMenu from "../ui/BottomNavbarMenu";
import { usePathname } from "next/navigation";

const BottomNavbar = () => {
  const pathname = usePathname();
  return (
    <>
      <ul className="flex justify-between items-center gap-x-5 bg-white px-5 py-3 rounded-t-3xl border border-paragraph/5 shadow-2xl shadow-black">
        <Link href="/">
          <BottomNavbarMenu
            active={pathname == "/"}
            activeIcon={<HomeFilled fontSize="small" />}
            unactiveIcon={<HomeOutlined fontSize="small" />}
            label="Beranda"
          />
        </Link>

        <Link href="/explore">
          <BottomNavbarMenu
            active={pathname == "/explore"}
            activeIcon={<Explore fontSize="small" />}
            unactiveIcon={<ExploreOutlined fontSize="small" />}
            label="Jelajahi"
          />
        </Link>

        <Link href="/write">
          <AddCircleOutlineOutlined
            className="text-primary scale-150 hover:text-primary-dark duration-300"
            fontSize="medium"
          />
        </Link>

        <Link href="/leaderboard">
          <BottomNavbarMenu
            active={pathname == "/leaderboard"}
            activeIcon={<Leaderboard fontSize="small" />}
            unactiveIcon={<LeaderboardOutlined fontSize="small" />}
            label="Rangking"
          />
        </Link>

        <Link href="/profile">
          <BottomNavbarMenu
            active={pathname == "/profile"}
            activeIcon={<Person fontSize="small" />}
            unactiveIcon={<PersonOutlineOutlined fontSize="small" />}
            label="Profil"
          />
        </Link>
      </ul>
    </>
  );
};

export default BottomNavbar;
