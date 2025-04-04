import StarWords from "../../components/StarWords";
import MainWrapper from "../../layouts/MainWrapper";
import welder from "/images/welder.webp";
import GradientWord from "../../components/GradientWord";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import one from "/images/one.webp";
import two from "/images/Gas-Pipe.webp";
import three from "/images/slide.webp";
import four from "/images/four.webp";
import ContactSection from "../../components/CommonCards/ContactSection";
import ActivityCard from "../../components/ActivityCard";
import { Outlet } from "react-router-dom";

const WhatWeDo = () => {
  return (
    <MainWrapper>
      <div className="bg-[url('/svgs/bg-grid.svg')] bg-secondary flex flex-col justify-center items-center text-center px-[1.5rem] lg:px-[5rem] py-[3rem] lg:py-[5rem]">
        <StarWords word="What We Do" />
        <h2 className=" text-[2rem] font-[600] lg:text-[2.4rem]">
          <GradientWord word="Engineering Excellence" />
          {"  "}
          for Oil and Gas Challenges.
        </h2>

        <p className="lg:w-[50%] text-center font-normal text-lg mt-2">
          With years of industry experience and a team of highly skilled
          professionals, we specialize in four core areas:
        </p>
      </div>
      <div className="bg-white px-[1.5rem] lg:px-[5rem] py-[3rem] lg:py-[5rem]">
        <div className="w-[100%] grid grid-cols-1 lg:grid-cols-2 gap-8 mt-[2.5rem] lg:mt-[5rem]">
          <ActivityCard
            header={"Training service"}
            info={
              "Our comprehensive training programs empower professionals to excel in the utilization of design and project management software, equipping them with the skills needed to thrive in today's dynamic engineering landscape."
            }
            link="training-service"
            image={one}
          />
          <ActivityCard
            header={"Design Engineering"}
            info={
              "From conceptualization to execution, our design engineering services ensure precision, efficiency, and compliance with regulatory codes and standards. We specialize in process design, mechanical design, piping design, structural design, and 3D modeling using industry-leading software like AutoCAD, SolidWorks, and AVEVA E3D."
            }
            link="design-engineering"
            image={two}
          />
          <ActivityCard
            header={"Process Equipment"}
            info={
              "We are experts in the design and optimization of process equipment for the oil and gas industry. From concept development to detailed engineering, our team leverages industry best practices and innovative technologies to deliver efficient, reliable, and cost-effective solutions."
            }
            link="/process-equipment"
            image={three}
          />
          <ActivityCard
            header={"Technical Support"}
            info={
              "Our technical support services provide clients with the expertise and assistance needed to overcome challenges, optimize operations, and ensure compliance with regulatory requirements. Whether it's troubleshooting equipment issues or providing ongoing maintenance support, we are dedicated to helping our clients achieve operational excellence."
            }
            link="technical-support"
            image={four}
          />
        </div>
      </div>
      <div className="bg-secondary px-[1.5rem] lg:px-[5rem] py-[3rem] lg:py-[5rem] flex flex-col gap-[3rem] justify-between items-center lg:gap-0 lg:flex-row">
        {" "}
        <div className="lg:w-[40%] text-left">
          <StarWords word={"Excellent engineering"} />
          <p className="text-textColorPrimary text-[1.2rem] lg:text-[2rem] font-[600] mb-[1.5rem]">
            we are committed to
            <GradientWord word="delivering excellence" /> at every stage of your
            project journey.
          </p>
          <p className=" mb-[2rem]">
            We strive to exceed client expectations by providingcutting-edge
            solutions, fostering innovation, and upholding the higheststandards
            of quality and safety.
          </p>
          <PrimaryButton path="contact-us">Contact our team</PrimaryButton>
        </div>
        <div className="lg:w-[40%] p-3 bg-[#08005114] rounded-[0.75rem]">
          <img src={welder} alt="welder" className="object-cover w-full" />
        </div>
      </div>
      <ContactSection />
      <Outlet />
    </MainWrapper>
  );
};

export default WhatWeDo;
