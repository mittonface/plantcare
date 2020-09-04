import Header from "./Header";
import TopNav from "./TopNav";

const Layout = ({
  children,
  pageTitle,
}: {
  children: any;
  pageTitle: string;
}) => (
  <div>
    <div className="bg-gray-800 pb-32">
      <TopNav />
      <Header pageTitle={pageTitle} />
    </div>

    <main className="-mt-32">
      <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
          {children}
        </div>
      </div>
    </main>
  </div>
);

export default Layout;
