import { useEffect } from "react";
import anime from "animejs";
import logo from "/images/updatedLogo.png";

const SplashScreen = ({ finishLoading }: { finishLoading: () => void }) => {
  // const [isMounted, setIsMounted] = useState(false);
  const animate = () => {
    const loader = anime.timeline({ complete: () => finishLoading() });
    loader
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1.1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        duration: 500,
        opacity: 0.5,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 0,
        scale: 6,
        duration: 500,
        opacity: 0,
        easing: "easeInOutExpo",
      });
  };
  useEffect(() => {
    // const timeout = setTimeout(() => setIsMounted(true), 1000);
    animate();
    // return clearTimeout(timeout);
  }, []);
  return (
    <div className="h-screen flex justify-center items-center ">
      <img id="logo" src={logo} className="w-[12rem]" />
    </div>
  );
};

export default SplashScreen;
