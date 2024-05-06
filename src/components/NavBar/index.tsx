import { NavLink } from "react-router-dom";
import logo from "/svgs/logo.svg";
import { navlinks } from "../../utils/data";
import { useState } from "react";
import MobileNav from "./MobileNav";

const NavBar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className="w-[100%] h-[5rem] px-[1.5rem] z-30 lg:px-[4rem] bg-white flex flex-row justify-between items-center font-[500] gap-[3rem] fixed shadow-sm">
        <NavLink to={"/"}>
          <img src={logo} className="h-[2rem]" alt="logo" />
        </NavLink>
        <div className="flex-grow hidden lg:flex justify-center gap-8 ">
          {navlinks.map((nav, i) => (
            <NavLink
              className={({ isActive }) => (isActive ? "text-primary" : "")}
              key={i}
              to={nav.path}
            >
              {nav.name}
            </NavLink>
          ))}
        </div>
        <NavLink
          className="hidden bg-primary text-white h-[2.5rem] w-[8rem] lg:flex justify-center items-center rounded-[2rem] hover:bg-opacity-90 "
          to={"contact-us"}
        >
          Contact us
        </NavLink>
        <div
          className="flex lg:hidden flex-col z-40 gap-[0.6rem] w-8"
          onClick={() => {
            setShow(!show);
          }}
        >
          <span
            aria-hidden="true"
            className={`block h-[3px] w-8 bg-primary transform transition duration-500 ease-in-out ${
              show ? "rotate-45 translate-y-[0.78rem]" : ""
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block h-[3px] w-8 bg-primary transform transition duration-500 ease-in-out ${
              show ? "opacity-0" : ""
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block h-[3px] w-8 bg-primary transform transition duration-500 ease-in-out ${
              show ? "w-8 -rotate-45 -translate-y-[0.78rem]" : " w-3"
            }`}
          ></span>
        </div>
        <div className="absolute lg:hidden">
          <MobileNav show={show} setShow={setShow} />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
