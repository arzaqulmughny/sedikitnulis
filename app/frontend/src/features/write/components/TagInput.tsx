import Select from "@/src/components/ui/Select";
import TopicBadge from "@/src/components/ui/TopicBadge";
import { LabelOutlined } from "@mui/icons-material";
import { useState } from "react";

const TagInput = () => {
  const [currentSelected, setCurrentSelected] = useState<string[]>([
    "test",
    "s",
    "d",
    "a",
  ]);

  const onRemoveTag = (targetTag: string) => {
    setCurrentSelected((currentSelected) =>
      currentSelected.filter((tag) => tag != targetTag),
    );
  };

  return (
    <>
      <div>
        <div className="flex items-center gap-x-3">
          <LabelOutlined className="text-paragraph" fontSize="inherit" />
          <h3 className="text-paragraph font-semibold leading-0 uppercase tracking-wide text-sm">
            TAG
          </h3>

          <p className="text-xs ml-auto text-paragraph/50">
            {currentSelected.length} tag aktif
          </p>
        </div>

        <ul className="flex gap-2 mt-4">
          {currentSelected.map((tag) => (
            <>
              <li>
                <TopicBadge
                  variant="primary-muted"
                  showCloseIcon={true}
                  size="small"
                  onClick={() => onRemoveTag(tag)}
                >
                  {tag}
                </TopicBadge>
              </li>
            </>
          ))}
        </ul>

        <input type="text" className="mt-4 w-full bg-primary/5 text-xs px-4 py-2 rounded-md border border-paragraph/5 focus:outline-0" placeholder="Tekan Enter untuk menambahkan tag..."/>
      </div>
    </>
  );
};

export default TagInput;
