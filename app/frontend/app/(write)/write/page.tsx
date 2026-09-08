"use client";
import Editor from "@/src/features/write/components/Editor";
import MenuNav, { menuEnum } from "@/src/features/write/components/MenuNav";
import Sidebar from "@/src/features/write/components/Sidebar";
import { useState } from "react";

const Page = () => {
  const [selectedMenu, setSelectedMenu] = useState<menuEnum>(menuEnum.write);

  return (
    <>
      <div className="relative mb-5">
        <div className="lg:hidden">
          <MenuNav
            active={selectedMenu}
            onChangeMenu={(menu) => setSelectedMenu(menu)}
          />
        </div>

        {selectedMenu === menuEnum.write && <Editor />}
        {selectedMenu === menuEnum.settings && <Sidebar />}
      </div>
    </>
  );
};

export default Page;
