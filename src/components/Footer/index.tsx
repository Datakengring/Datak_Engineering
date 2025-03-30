import { NavLink } from "react-router-dom";
import logo from "/images/updatedLogo.png";
import {
  PiInstagramLogoFill,
  PiLinkedinLogoFill
} from "react-icons/pi";

const Footer = () => {
  return (
    <div className="w-[100%] text-[#797B89] flex flex-col items-center text-[0.875rem] border-t-[1px] border-solid border-secondary">
      <div className="flex flex-col lg:flex-row py-[2rem] px-[1.5rem] lg:px-[4rem] lg:gap-[5rem] gap-[2rem] justify-between">
        <div className="flex-grow">
          <NavLink to={"/"}>
            <img src={logo} className="h-[2rem]" alt="logo" />
          </NavLink>
          <p className="lg:w-[50%] mt-[2rem]">
            To deliver integrated energy solutions that exceed
            client expectations, ensuring safety, quality, and
            sustainability in all our projects.
          </p>
        </div>
        <div className="flex">
          <div className="lg:w-[12rem] flex flex-col gap-2">
            <h2 className="text-[#383A47] text-[1rem] font-[700]">Company</h2>
            <NavLink className="hover:underline" to={"about-us"}>
              About Us
            </NavLink>
            <NavLink className="hover:underline" to={"what-we-do"}>
              What we do
            </NavLink>
            <NavLink
              className="hover:underline"
              to={"process-equipment"}
            >
              Process equipment
            </NavLink>
            <NavLink className="hover:underline" to={"contact-us"}>
              Contact Us
            </NavLink>
          </div>
          <div className="lg:w-[13rem] flex flex-col gap-2 text-black items-end">
            <div className="flex items-center text-end justify-end gap-4">
              <a href="">
                <PiInstagramLogoFill
                  style={{ color: "#080051", fontSize: "1.8rem" }}
                />
              </a>
              <a href="https://www.linkedin.com/company/datak-engineering">
                <PiLinkedinLogoFill
                  style={{ color: "#080051", fontSize: "1.8rem" }}
                />
              </a>
            </div>
            <p className="leading-[1.1rem] text-end">
              41 Voyage Close Kaura District Abuja Nigeria.
            </p>
            <p className=" text-end">
              <a href="mailto:info@datakenergyservices.com">info@datakenergyservices.com</a>
            </p>
            <p className=" text-end">
              <a href="tel:+234 708 816 4404">+234 708 816 4404</a>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] text-center h-[3rem] flex justify-center items-center border-t-[2px] border-solid border-[#F8F8FA]">
        <p className="text-[0.75rem]">Copyright © 2024 Datak</p>
      </div>
    </div>
  );
};

export default Footer;
