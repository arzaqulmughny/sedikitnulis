"use client";

import { topics } from "@/app/register/page";
import { PersonOutlined, TagOutlined, TrendingUp } from "@mui/icons-material";
import Link from "next/link";

const mockLeaderboard = [
  {
    name: "@budi_dev",
    points: 128,
  },
  {
    name: "@arza_dev",
    points: 114,
  },
  {
    name: "@eko_dev",
    points: 81,
  },
];

const Leaderboard = () => {
  return (
    <>
      <div className="bg-white shadow-xl/5 shadow-black/30 p-8 rounded-xl flex flex-col">
        <div className="flex items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            className="fill-yellow-400"
          >
            <path d="M280-120v-80h160v-124q-49-11-87.5-41.5T296-442q-75-9-125.5-65.5T120-640v-40q0-33 23.5-56.5T200-760h80v-80h400v80h80q33 0 56.5 23.5T840-680v40q0 76-50.5 132.5T664-442q-18 46-56.5 76.5T520-324v124h160v80H280Zm0-408v-152h-80v40q0 38 22 68.5t58 43.5Zm285 93q35-35 35-85v-240H360v240q0 50 35 85t85 35q50 0 85-35Zm115-93q36-13 58-43.5t22-68.5v-40h-80v152Zm-200-52Z" />
          </svg>
          <h2 className="text-paragraph font-bold">Rangking Minggu Ini</h2>
        </div>

        <ul className="flex flex-col gap-y-4 mt-6">
          {mockLeaderboard.map((user, index) => (
            <li key={index}>
              <Link href={`/`}>
                <div
                  className={`flex items-center gap-x-5 rounded-md border p-3 bg-linear-to-r ${index === 0 ? "from-orange-100 text-orange-500 border-orange-100" : "border-transparent"} to-white`}
                >
                  <p className="font-medium">{index + 1}</p>
                  <div className="bg-primary-muted w-7 h-7 rounded-full overflow-hidden flex items-center justify-center">
                    <PersonOutlined fontSize="small"/>
                  </div>
                  <p className="text-black font-medium text-sm">{user.name}</p>
                  <p className="ml-auto text-xs font-bold">{user.points} poin</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/leaderboard" className="text-primary text-center text-xs font-bold mt-4 border-t border-t-paragraph/5 pt-4">Lihat Rangking Lengkap</Link>
      </div>
    </>
  );
};

export default Leaderboard;
