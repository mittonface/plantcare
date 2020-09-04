const Header = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <header className="py-10">
      <title>{pageTitle}</title>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl leading-9 font-bold text-white">{pageTitle}</h1>
      </div>
    </header>
  );
};

export default Header;
