"use client";

import { topics } from "@/app/register/page";
import TopicBadge from "@/src/components/ui/TopicBadge";
import Link from "next/link";
import { useState } from "react";

const ExploreTopics = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  return (
    <>
      <section className="flex flex-col gap-y-4 bg-white p-8 rounded-xl shadow-xl/5 shadow-black/30">
        <div className="flex items-center justify-between">
          <h2 className="text-paragraph font-bold text-lg">Jelajahi Topik</h2>
          <Link href="/topics" className="text-primary text-sm font-bold">
            Lihat semua
          </Link>
        </div>

        <ul className="flex flex-wrap gap-2">
          {topics &&
            topics.map((topic, index) => (
              <TopicBadge
                key={index}
                variant={selectedTopic == topic ? "primary" : "secondary"}
                showCloseIcon={true}
                onClick={() =>
                  selectedTopic == topic
                    ? setSelectedTopic(null)
                    : setSelectedTopic(topic)
                }
              >
                {topic}
              </TopicBadge>
            ))}
        </ul>
      </section>
    </>
  );
};

export default ExploreTopics;
