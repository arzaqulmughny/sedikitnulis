import { stepEnum } from "@/app/register/page";
import { useEffect, useState } from "react";

const titles: Record<stepEnum, string> = {
  input: "Buat Akunmu - SedikitNulis",
  preferences: "Pilih Topik - SedikitNulis",
  confirm: "Cek Datamu - SedikitNulis",
};

const useRegisterPageTitle = (step: stepEnum) => {
  useEffect(() => {
    document.title = titles[step];
  }, [step]);
};

export default useRegisterPageTitle;
