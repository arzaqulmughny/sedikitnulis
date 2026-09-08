import InputCheckbox from "@/src/components/ui/InputCheckbox";
import { Check, CheckOutlined } from "@mui/icons-material";

const AdditionOption = () => {
  return (
    <>
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="text-paragraph font-semibold leading-0 uppercase tracking-wide text-sm">
            Opsi Tambahan
          </h3>
        </div>

        <div className="flex flex-col gap-y-2">
          <InputCheckbox label="Izinkan Komentar" />
          <InputCheckbox label="Sematkan ke Profil" />
        </div>
      </div>
    </>
  );
};

export default AdditionOption;
