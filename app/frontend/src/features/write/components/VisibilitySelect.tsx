import Select from "@/src/components/ui/Select";
import TopicBadge from "@/src/components/ui/TopicBadge";
import { LabelOutlined, VisibilityOutlined } from "@mui/icons-material";
import { useState } from "react";
import VisibilityOption from "../ui/VisibilityOption";

const VisibilitySelect = () => {
  return (
    <>
      <div>
        <div className="flex items-center gap-x-3">
          <VisibilityOutlined className="text-paragraph" fontSize="inherit" />
          <h3 className="text-paragraph font-semibold leading-0 uppercase tracking-wide text-sm">
            Visibilitas
          </h3>
        </div>

        <div className="mt-4 flex flex-col gap-y-2">
          <VisibilityOption
            value="public"
            title="Publik"
            description="Dapat dibaca oleh semua anggota komunitas"
            name="visibilty"
            defaultChecked
          />
          <VisibilityOption
            value="private"
            title="Pribadi"
            description="Hanya Anda yang dapat melihat catatan ini"
            name="visibilty"
          />
        </div>
      </div>
    </>
  );
};

export default VisibilitySelect;
