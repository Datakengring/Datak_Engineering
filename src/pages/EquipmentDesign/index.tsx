import { Outlet } from "react-router-dom";
import ContactForm from "../../components/ContactForm";
import EquipmentCard from "../../components/EquipmentCard";
import GradientWord from "../../components/GradientWord";
import StarWords from "../../components/StarWords";
import MainWrapper from "../../layouts/MainWrapper";
import { equipmentData } from "../../utils/data";
import report from "/images/report.webp";

const EquipmentDesign = () => {
  return (
    <>
      <MainWrapper>
        <div className=" bg-secondary bg-[url('/svgs/bg-grid.svg')] flex flex-col justify-center items-center px-[1.5rem] lg:px-[5rem] text-center py-[3rem] lg:py-[5rem]">
          <StarWords word="Process equipment design" />
          <h2 className="lg:w-[80%] text-[1.8rem] font-[600] lg:text-[2.4rem]">
            <span className=" bg-gradient-to-r from-linearOne to-linearTwo inline-block text-transparent bg-clip-text ">
              Precision Engineering
            </span>
            {"  "}
            for Advanced Process Equipment Solutions.
          </h2>

          <p className=" lg:w-[75%] text-center font-normal text-lg mt-4">
            With years of industry experience and a team of highly skilled
            professionals, we specialize in four core areas:
          </p>
        </div>
        <div className="bg-white px-[1.5rem] lg:px-[5rem] text-center py-[3rem] lg:py-[5rem] flex flex-col items-center ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            {equipmentData.map((e, index) => (
              <EquipmentCard
                key={index}
                image={e.image}
                title={e.title}
                path={e.path}
              />
            ))}
          </div>
        </div>
        <div className="bg-secondary px-[1.5rem] lg:px-[5rem] py-[3rem] lg:py-[5rem] flex flex-col gap-[3rem] justify-between items-center lg:gap-0 lg:flex-row">
          <div className="lg:w-[40%] p-3 bg-[#08005114] rounded-[0.75rem]">
            <img src={report} alt="engineer" />
          </div>
          <div className="lg:w-[50%] ">
            <StarWords word={"Consult our team"} />
            <p className="text-textColorPrimary text-[1.2rem] lg:text-[2rem] font-[600] mb-[1.5rem]">
              Your <GradientWord word="Engineered Solution" /> for Oil and Gas
              Industry Demands.
            </p>
            <ContactForm />
          </div>
        </div>
      </MainWrapper>
      <Outlet />
    </>
  );
};

export default EquipmentDesign;
