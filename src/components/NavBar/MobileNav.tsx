import { useNavigate } from "react-router-dom";
import { navlinks } from "../../utils/data";

type IShow = { show: boolean; setShow: (show: boolean) => void };
const MobileNav = ({ show, setShow }: IShow) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`fixed top-0 h-[100%] transition-all duration-700 ease-in-out ${
          show
            ? "w-[100%] right-0 bg-primary opacity-50 backdrop-blur-md transition-all duration-700 ease-in-out"
            : "w-[100%] right-[-28rem] bg-primary opacity-50 transition-all delay-200 duration-[900ms] ease-in-out "
        }`}
      ></div>
      <div
        className={`fixed h-[100%] top-0 z-20 lg:hidden flex flex-col items-center justify-between text-primary px-[2rem] pt-[6rem] pb-6 transition-all duration-[1000ms] ease-in-out  ${
          show
            ? "w-[80%] right-0 z-30 delay-200 bg-[white] backdrop-blur-md duration-[1000ms] ease-in-out"
            : "z-30 right-[-18rem] bg-white transition-all duration-[1000ms] ease-in-out"
        }`}
      >
        <div className="w-[100%] flex flex-col items-center justify-center gap-8">
          {navlinks.map((nav, i) => (
            <div
              key={i}
              onClick={() => {
                navigate(nav.path);
                setShow(false);
              }}
            >
              {nav.name}
            </div>
          ))}
        </div>
        <button
          className="bg-primary text-white h-[2.5rem] w-[100%] flex justify-center items-center rounded-[0.5rem] hover:bg-opacity-90 "
          onClick={() => {
            navigate("contact-us");
            setShow(false);
          }}
        >
          Contact us
        </button>
      </div>
    </>
  );
};

export default MobileNav;
