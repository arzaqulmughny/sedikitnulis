import Activity from "@/src/features/profile/components/Activity";
import MostFrequentlyTopics from "@/src/features/profile/components/MostFrequentlyTopics";
import Post from "@/src/features/profile/components/Post";
import RelatedWritter from "@/src/features/profile/components/RelatedWritters";
import Summary from "@/src/features/profile/components/Summary";
import Tips from "@/src/features/profile/components/Tips";
import Footer from "@/src/features/writings/components/Footer";

const Page = () => {
  return (
    <>
      <div className="max-w-325 mx-auto flex flex-col lg:flex-row lg:items-start">
        <div className="flex flex-col gap-y-2">
          <Summary />
          <Activity />
          <Post />
        </div>

        <div className="w-full lg:sticky top-15.5 right-0 flex-1 lg:w-2/5">
          <MostFrequentlyTopics />
          <RelatedWritter />
          <Tips />
        </div>
      </div>
    </>
  );
};

export default Page;
