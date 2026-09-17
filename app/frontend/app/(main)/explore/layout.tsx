import MainNavbar from "@/src/components/layouts/MainNavbar";
import Footer from "@/src/features/writings/components/Footer";

const Layout = ({ children }: LayoutProps<"/[username]">) => {
  return (
    <>
      {children}

      <Footer />
    </>
  );
};

export default Layout;
