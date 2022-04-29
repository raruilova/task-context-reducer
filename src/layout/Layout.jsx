import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="h-screentext-white text-center p10 text-white">
        <div className="container mx-auto h-full">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
