import StarWords from "../../components/StarWords";
import MainWrapper from "../../layouts/MainWrapper";
import engineer from "/images/engineer.webp";
import GradientWord from "../../components/GradientWord";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import Expertise from "../../components/CommonCards/Expertise";
import ContactSection from "../../components/CommonCards/ContactSection";

const WhatWeDo = () => {
  return (
    <MainWrapper>
      <div className=" bg-secondary flex flex-col justify-center items-center px-[1.5rem] lg:px-[5rem] py-[3rem] lg:py-[5rem]">
        <StarWords word="What We Do" />
        <h2 className=" text-[2rem] font-[600] lg:text-[2.4rem]">
          <GradientWord word="Engineering Excellence" />
          for Oil and Gas Challenges.
        </h2>

        <p className=" w-[50%] text-center font-normal text-lg mt-2">
          With years of industry experience and a team of highly skilled
          professionals, we specialize in four core areas:
        </p>
      </div>
      <div className="px-[1.5rem] lg:px-[5rem] py-[3rem] lg:py-[5rem]">
        <Expertise />
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
          <img src={engineer} alt="engineer" className="object-cover w-full" />
        </div>
      </div>
      <ContactSection />
    </MainWrapper>
  );
};

export default WhatWeDo;
