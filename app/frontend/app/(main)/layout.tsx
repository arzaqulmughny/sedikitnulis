import BottomNavbar from "@/src/components/layouts/BottomNavbar";
import MainNavbar from "@/src/components/layouts/MainNavbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SedikitNulis - Platform Catat Hasil Belajar",
  description: "...",
};

const Layout = ({ children }: LayoutProps<"/">) => {
  return (
    <>
      <div className="">
        <div className="sticky top-0 left-0 z-50">
          <MainNavbar />
        </div>

        <div className="pb-20">{children}</div>

        <div className="fixed bottom-0 left-0 right-0 lg:hidden">
          <BottomNavbar />
        </div>
      </div>
    </>
  );
};

export default Layout;
