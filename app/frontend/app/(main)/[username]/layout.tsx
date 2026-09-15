import MainNavbar from "@/src/components/layouts/MainNavbar";
import Footer from "@/src/features/writings/components/Footer";

const Layout = ({ children }: LayoutProps<"/[username]">) => {
  return (
    <>
      <div className="sticky top-0 left-0 right-0 z-50">
        <MainNavbar showBackButton />
      </div>

      {children}

      <Footer />
    </>
  );
};

export default Layout;
