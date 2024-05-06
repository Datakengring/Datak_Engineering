import ActivityCard from "../../components/ActivityCard";
import StarWords from "../../components/StarWords";
import MainWrapper from "../../layouts/MainWrapper";
import one from "/images/one.webp";
import two from "/images/two.webp";
import three from "/images/three.webp";
import four from "/images/four.webp";
import engineer from "/images/engineer.webp";
import report from "/images/report.webp";
import GradientWord from "../../components/GradientWord";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import ContactForm from "../../components/ContactForm";

const WhatWeDo = () => {
  return (
    <MainWrapper>
      <div className=" bg-secondary flex flex-col justify-center items-center py-24 px-5 ">
        <StarWords word="What We Do" />
        <h2 className=" text-[2.4rem] font-[600] text-center lg:text-[3rem]">
          <span className=" bg-gradient-to-r from-linearOne to-linearTwo inline-block text-transparent bg-clip-text ">
            Engineering Excellence
          </span>{" "}
          for Oil and Gas Challenges.
        </h2>

        <p className=" w-[100%] md:w-[50%] text-center font-normal text-lg mt-2">
          With years of industry experience and a team of highly skilled
          professionals, we specialize in four core areas:
        </p>
      </div>

      <div className=" bg-white  py-24 px-5 md:px-24  w-[100%] grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ActivityCard
          header={"Training service"}
          info={
            "Our courses are designed to enhance skills and proficiency in compliance with industry standards such as ASME, API, and ANSI."
          }
          image={one}
        />
        <ActivityCard
          header={"Design Engineering"}
          info={
            "From conceptualization to execution, our design engineering services ensure precision, efficiency, and compliance with regulatory codes and standards."
          }
          image={two}
        />
        <ActivityCard
          header={"Technical Support"}
          info={
            "Our dedicated technical support team provides expert guidance and assistance to overcome challenges and ensure regulatory compliance."
          }
          image={three}
        />
        <ActivityCard
          header={"Process Equipment Design"}
          info={
            "Trust our experienced engineers to deliver innovative and reliable process equipment designs, adhering to codes and standards."
          }
          image={four}
        />
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
  );
};

export default WhatWeDo;
