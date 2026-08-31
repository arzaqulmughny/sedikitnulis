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
      <ul className="flex justify-between items-center gap-x-5 bg-white px-5 py-1 rounded-t-3xl border border-paragraph/5 shadow-2xl shadow-black">
        <Link href="/">
          <BottomNavbarMenu
            active={pathname == "/"}
            activeIcon={<HomeFilled sx={{ fontSize: 16 }} />}
            unactiveIcon={<HomeOutlined sx={{ fontSize: 16 }} />}
            label="Beranda"
          />
        </Link>

        <Link href="/explore">
          <BottomNavbarMenu
            active={pathname == "/explore"}
            activeIcon={<Explore sx={{ fontSize: 16 }} />}
            unactiveIcon={<ExploreOutlined sx={{ fontSize: 16 }} />}
            label="Jelajahi"
          />
        </Link>

        <Link href="/write">
          <AddCircleOutlineOutlined
            className="text-primary scale-110 hover:text-primary-dark duration-300"
            fontSize="medium"
          />
        </Link>

        <Link href="/leaderboard">
          <BottomNavbarMenu
            active={pathname == "/leaderboard"}
            activeIcon={<Leaderboard sx={{ fontSize: 16 }} />}
            unactiveIcon={<LeaderboardOutlined sx={{ fontSize: 16 }} />}
            label="Rangking"
          />
        </Link>

        <Link href="/profile">
          <BottomNavbarMenu
            active={pathname == "/profile"}
            activeIcon={<Person sx={{ fontSize: 16 }} />}
            unactiveIcon={<PersonOutlineOutlined sx={{ fontSize: 16 }} />}
            label="Profil"
          />
        </Link>
      </ul>
    </>
  );
};

export default BottomNavbar;
