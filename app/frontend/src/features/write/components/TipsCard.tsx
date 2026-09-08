import { AnalyticsOutlined, LightbulbOutlined } from "@mui/icons-material";

const tipsList = [
  {
    title: "**tebal**",
    description: "untuk mencetak tebal",
  },
  {
    title: "*miring*",
    description: "untuk penekanan",
  },
  {
    title: "`kode`",
    description: "untuk kutipan kode ringkas",
  },
  {
    title: ">kutipan",
    description: "untuk blok kutipan",
  },
];

const TipsCard = () => {
  return (
    <>
      <div className="bg-primary/5 p-4 rounded-xl border border-paragraph/5">
        <div className="flex items-center gap-x-4">
          <LightbulbOutlined className="text-green-800" fontSize="inherit" />
          <h3 className="text-paragraph font-semibold leading-0 uppercase tracking-wide text-sm">
            Tips Format Ringkas
          </h3>
        </div>

        <ul className="mt-3 flex flex-col gap-y-1">
            {tipsList.map((tips) => (
                <>
                    <li>
                        <div className="flex items-center gap-x-2">
                            <p className="bg-white text-xs">{tips.title}</p>
                            <p className="text-xs text-paragraph/70">{tips.description}</p>
                        </div>
                    </li>
                </>
            ))}
        </ul>
      </div>
    </>
  );
};

export default TipsCard;
