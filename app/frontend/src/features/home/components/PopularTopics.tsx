"use client";

import { topics } from "@/app/register/page";
import { TagOutlined, TrendingUp } from "@mui/icons-material";
import Link from "next/link";

const PopularTopics = () => {
  return (
    <>
      <div className="bg-white shadow-xl/5 shadow-black/30 p-8 rounded-xl">
        <div className="flex items-center gap-x-2">
          <TrendingUp className="text-paragraph"/>
          <h2 className="text-paragraph font-bold">Topik Populer</h2>
        </div>

        <ul className="flex flex-col gap-y-4 mt-6">
          {topics.map((topic, index) => (
            <li key={index}>
              <Link href={`/topics/${topic}`}>
                <div className="flex gap-x-3 items-center">
                  <div className="bg-primary-muted w-7 h-7 flex items-center justify-center rounded-md">
                    <TagOutlined className="text-primary" fontSize="inherit" />
                  </div>

                  <div className="flex items-center justify-between w-full group">
                    <p className="text-sm text-paragraph font-medium group-hover:text-primary duration-300">
                      Laravel
                    </p>
                    <p className="text-xs font-bold text-paragraph group-hover:text-primary duration-300">2.4rb</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PopularTopics;
