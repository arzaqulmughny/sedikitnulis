import BottomNavbar from "@/src/components/layouts/BottomNavbar";
import MainNavbar from "@/src/components/layouts/MainNavbar";
import ActionCard from "@/src/features/writings/components/ActionsCard";
import Footer from "@/src/features/writings/components/Footer";
import WritterInformation from "@/src/features/writings/components/WritterInformation";

const Layout = ({ children }: LayoutProps<"/">) => {
  return (
    <>
      <div className="sticky top-0 left-0 right-0 z-50">
        <MainNavbar showBackButton />
      </div>

      <div className="">
        <div className="flex max-w-325 mx-auto mt-5 gap-x-24 lg:px-5">
          <div className="flex-8/12 lg:pb-0 pb-14">
            <div className="px-5 lg:px-0">
              <div>{children}</div>
            </div>

            <div className="mt-10 lg:hidden">
              <Footer />
            </div>
          </div>

          <aside className="hidden lg:flex flex-col gap-y-4 flex-4/12 sticky top-18 h-fit">
            <WritterInformation />
            <ActionCard />
          </aside>
        </div>

        <div className="fixed bottom-0 left-0 right-0 lg:hidden">
          <BottomNavbar />
        </div>
      </div>

      <div className="hidden lg:block mt-32">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
