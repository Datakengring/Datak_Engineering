import { useEffect, useState } from "react";
import SplashScreen from "../../components/SplashScreen";
import { Outlet } from "react-router-dom";

const SplashLayout = () => {
  const isHomePage = window.location.pathname === "/";
  const [isLoading, setIsLoading] = useState(isHomePage);
  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);
  return (
    <div>
      {isLoading && isHomePage ? (
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default SplashLayout;
