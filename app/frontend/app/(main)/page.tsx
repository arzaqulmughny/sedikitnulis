import ExploreTopics from "@/src/features/home/components/ExploreTopics";
import Feed from "@/src/features/home/components/Feed";
import Footer from "@/src/features/home/components/Footer";
import Leaderboard from "@/src/features/home/components/Leaderboard";
import PopularTopics from "@/src/features/home/components/PopularTopics";
import Tips from "@/src/features/home/components/Tips";
import Welcome from "@/src/features/home/components/Welcome";

export default function Home() {
  return (
    <>
      <div className="lg:flex mt-5 lg:gap-x-8 px-5 max-w-325 mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-2/3">
          <Welcome />
          <ExploreTopics />
          <Feed />
        </div>

        <aside className="lg:flex hidden lg:flex-1/3 flex-col gap-y-8">
          <Tips />

          <div className="sticky top-20 flex flex-col gap-y-8">
            <PopularTopics />
            <Leaderboard />
            <Footer />
          </div>
        </aside>
      </div>
    </>
  );
}
