import { ArrowUpward } from "@mui/icons-material";

const variantClass = {
  primary: {
    container: "bg-white w-fit border border-green-300",
    title: "text-green-900",
  },
  secondary: {
    container: "bg-white border border-paragraph/5",
    title: "",
  },
};

interface FeaturedTopicItemProps {
  variant: keyof typeof variantClass;
}

const FeaturedTopicItem = ({ variant = "primary" }: FeaturedTopicItemProps) => {
  return (
    <>
      <div
        className={`p-5 rounded-xl relative overflow-hidden ${variantClass[variant].container}`}
      >
        {variant == "primary" && (
          <span className="h-1 w-full inline-block bg-gradient-primary-90 absolute left-0 top-0" />
        )}

        <div className="flex gap-x-4 items-center flex-nowrap">
          <p className={`text-xs font-semibold ${variantClass[variant].title}`}>
            #Programming
          </p>
          <div className="flex items-center">
            <ArrowUpward
              fontSize="inherit"
              sx={{ fontSize: 14 }}
              className="text-green-700"
            />
            <p className="text-[10px] text-green-700 font-semibold text-nowrap">
              18 %
            </p>
          </div>
        </div>

        <p className="text-xs text-paragraph/80 mt-1.5">1.240 catatan</p>
      </div>
    </>
  );
};

export default FeaturedTopicItem;
