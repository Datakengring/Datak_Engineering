import { NavLink } from "react-router-dom";
import logo from "/svgs/logo.svg";
import { navlinks } from "../../utils/data";

const NavBar = () => {
  // const activeLink:string="text-primary"
  return (
    <nav className="w-[100%] h-[5rem] px-[1.5rem] lg:px-[4rem] bg-white flex flex-row justify-between items-center font-[500] gap-[3rem] fixed shadow-sm">
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
    </nav>
  );
};

export default NavBar;
