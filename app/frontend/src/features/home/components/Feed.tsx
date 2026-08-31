"use client";

import { useState } from "react";
import FeedCategory from "./ui/FeedCategory";
import {
  BookmarkBorderOutlined,
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  PersonOutlined,
  TimerOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import TopicBadge from "@/src/components/ui/TopicBadge";
import Link from "next/link";

const feedCategories = [
  {
    label: "Untuk Kamu",
    slug: "for-you",
  },
  {
    label: "Terbaru",
    slug: "latest",
  },
  {
    label: "Populer",
    slug: "popular",
  },
  {
    label: "Mengikuti",
    slug: "following",
  },
];

const Feed = () => {
  const [feedCategory, setFeedCategory] = useState<string>(
    feedCategories[0].slug,
  );

  return (
    <>
      <div>
        <ul className="border-b border-b-paragraph/5 flex gap-x-5 overflow-auto scrollbar-none">
          {feedCategories.map((feed, index) => (
            <li key={index}>
              <FeedCategory
                title={feed.label}
                active={feedCategory == feed.slug}
                onClick={() => setFeedCategory(feed.slug)}
              />
            </li>
          ))}
        </ul>

        <ul className="py-5 flex flex-col gap-y-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index}>
              <Link href="/arza/writings/123">
                <div className="bg-white p-8 rounded-xl shadow-xl/5 shadow-black/30 flex flex-col gap-y-8 hover:shadow-black duration-300">
                  <div className="flex gap-x-5">
                    <div className="bg-primary/5 w-12 aspect-square flex justify-center items-center rounded-full">
                      <PersonOutlined
                        fontSize="small"
                        className="text-green-700"
                      />
                    </div>
                    <div className="flex flex-col gap-y-0.5">
                      <p className="text-paragraph text-sm font-semibold">
                        @arza
                      </p>
                      <p className="text-paragraph text-xs">2 jam yang lalu</p>
                    </div>
                    <TopicBadge
                      variant="primary-muted"
                      size="small"
                      className="ml-auto"
                    >
                      <TimerOutlined
                        fontSize="inherit"
                        className="text-paragraph"
                      />
                      5 mnt
                    </TopicBadge>
                  </div>

                  <div className="flex flex-col gap-y-5">
                    <h2 className="text-paragraph text-lg font-semibold leading-0">
                      Hari ini akhirnya paham tentang Redis
                    </h2>
                    <p className="text-paragraph text-sm max-w-2/3">
                      Ternyata konsep caching itu nggak serumit yang
                      kubayangkan. Bayangkan aja Redis ini seperti meja kerja
                      kita...
                    </p>

                    <ul className="flex gap-x-2">
                      <li>
                        <TopicBadge size="small" variant="primary-muted">
                          #Redis
                        </TopicBadge>
                      </li>
                      <li>
                        <TopicBadge size="small" variant="primary-muted">
                          #Redis
                        </TopicBadge>
                      </li>
                    </ul>

                    <hr className="border-paragraph/5" />

                    <ul className="flex gap-x-4">
                      <li>
                        <button className="flex gap-x-2">
                          <FavoriteBorderOutlined
                            fontSize="inherit"
                            className="text-paragraph"
                          />
                          <p className="text-xs text-paragraph">124</p>
                        </button>
                      </li>
                      <li>
                        <button className="flex gap-x-2">
                          <ChatBubbleOutlineOutlined
                            fontSize="inherit"
                            className="text-paragraph"
                          />
                          <p className="text-xs text-paragraph">12</p>
                        </button>
                      </li>
                      <li>
                        <button className="flex gap-x-2">
                          <BookmarkBorderOutlined
                            fontSize="inherit"
                            className="text-paragraph"
                          />
                          <p className="text-xs text-paragraph">12</p>
                        </button>
                      </li>
                      <li className="ml-auto">
                        <button className="flex gap-x-2">
                          <VisibilityOutlined
                            fontSize="inherit"
                            className="text-paragraph"
                          />
                          <p className="text-xs text-paragraph">12</p>
                        </button>
                      </li>
                    </ul>
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

export default Feed;
