import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

// { children }: { children: ReactNode }
const RootLayout = () => {
  return (
    <div className="h-[100vh] w-[100%] overflow-auto">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
