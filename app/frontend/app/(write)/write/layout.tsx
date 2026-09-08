"use client";

import Navbar from "@/src/features/write/components/Navbar";

const Layout = ({ children }: LayoutProps<"/">) => {
  return (
    <>
      <div className="sticky top-0 z-9">
        <Navbar />
      </div>

      {children}
    </>
  );
};

export default Layout;
