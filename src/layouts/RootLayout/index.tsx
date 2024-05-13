import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

// { children }: { children: ReactNode }
const RootLayout = () => {
  return (
    <div className="h-[auto] w-[100%]">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
