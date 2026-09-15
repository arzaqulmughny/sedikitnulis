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
      <div className="border">
        <div className="pb-20 lg:pb-0">{children}</div>

        <div className="fixed bottom-0 left-0 right-0 lg:hidden">
          <BottomNavbar />
        </div>
      </div>
    </>
  );
};

export default Layout;
