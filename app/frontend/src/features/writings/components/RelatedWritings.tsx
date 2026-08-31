import TopicBadge from "@/src/components/ui/TopicBadge";
import { VisibilityOutlined } from "@mui/icons-material";
import Link from "next/link";

const RelatedWritings = () => {
  return (
    <>
      <section>
        <h2 className="text-paragraph font-bold text-sm lg:text-lg leading-0 flex items-center gap-x-2">
          Tulisan Terkait
        </h2>

        <ul className="mt-6 flex flex-col gap-y-4">
          {Array.from({ length: 2 }).map((_, index) => (
            <li key={index}>
              <Link href="/">
                <div className="bg-white p-4 rounded-md shadow-xl/5 shadow-black/30">
                  <TopicBadge size="small" variant="primary-muted">
                    Programming
                  </TopicBadge>

                  <h3 className="text-paragraph text-sm mt-4 font-bold">
                    Memahami React Hook: useState dan useEffect
                  </h3>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                      <VisibilityOutlined
                        sx={{ fontSize: 12 }}
                        className="text-paragraph/79"
                      />
                      <p className="text-xs text-paragraph/70 font-medium">
                        850
                      </p>
                    </div>

                    <p className="text-xs text-paragraph/70 font-medium">
                      7 mnt baca
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default RelatedWritings;
