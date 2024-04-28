import ActivityCard from "../../components/ActivityCard";
import GradientWord from "../../components/GradientWord";
import StarWords from "../../components/StarWords";
import MainWrapper from "../../layouts/MainWrapper";
import one from "/images/one.webp";
import two from "/images/two.webp";
import three from "/images/three.webp";
import four from "/images/four.webp";
import nnpc from "/svgs/nnpc.svg";
import shells from "/svgs/shells.svg";
import seplat from "/svgs/seplat.svg";
import transcorp from "/svgs/transcorp.svg";
import total from "/svgs/total.svg";
import amazon from "/svgs/amazon.svg";
import nigeria from "/svgs/nigeria.svg";
import report from "/images/report.webp";
import ContactForm from "../../components/ContactForm";

const AboutUs = () => {
  return (
    <MainWrapper>
      <div className=" bg-secondary flex flex-col justify-center items-center py-24 ">
        <StarWords word="About us" />
        <h2 className=" text-[2.4rem] font-[600]   lg:text-[3rem]">
          Welcome to
          <span className=" bg-gradient-to-r from-linearOne to-linearTwo inline-block text-transparent bg-clip-text ">
            DATAK
          </span>
        </h2>

        <p className=" w-[50%] text-center font-normal text-lg mt-2">
          Welcome to Datak Engineering Service Limited, a leading provider of
          innovativeengineering solutions tailored to meet the diverse needs of
          the oil and gasindustry.
        </p>
      </div>
      <div className=" bg-white p-24 w-[100%] flex flex-col gap-2">
        <h5 className=" font-normal text-2xl ">
          Welcometo Datak Engineering Service Limited, a leading provider of
          innovativeengineering solutions tailored to meet the diverse needs of
          the oil and gasindustry.
        </h5>
        <div className="flex flex-row gap-5 ">
          <img src="" className="rounded-2xl" alt="engineering service-1" />
          <img src="" className="rounded-2xl" alt="engineering service-2" />
          <img src="" className="rounded-2xl" alt="engineering service-3" />
        </div>
      </div>
      <div className=" bg-white p-24 w-[100%] flex flex-col gap-16">
        <h3 className=" font-semibold text-3xl text-center">
          Fueling Success with <GradientWord word="Precision Engineering" /> in
          the Oil and Gas Sector.
        </h3>
        <div className="flex gap-5">
          <div className=" bg-tertiary p-6 rounded-sm">
            <h4 className=" font-semibold text-lg">Our Mission</h4>
            <p className=" text-base mt-4">
              Lorem ipsum dolor sit amet consectetur. Sit quis pellentesque arcu
              vulputate phasellus vestibulum. Id blandit est id enim eget ornare
              sit. Magna et etiam tellus fusce. Congue erat ultrices magna proin
              proin et. Vulputate curabitur ultricies odio tellus sit congue
              risus venenatis faucibus. Et sed pharetra nunc nunc porta. Aliquam
              eget sed arcu accumsan faucibus amet arcu. Quis eleifend vel
              tincidunt id. Faucibus sed curabitur eu adipiscing malesuada
              convallis nunc aliquam nunc. Nibh fusce ligula netus interdum id
              etiam accumsan placerat rutrum. Massa velit tellus felis tristique
              duis tellus tempus tincidunt. Adipiscing est euismod eu
              condimentum et cursus at amet ut.
            </p>
          </div>
          <div className=" bg-tertiary p-6 rounded-sm">
            <h4 className=" font-semibold text-lg">Our Vision</h4>
            <p className=" text-base mt-4">
              Lorem ipsum dolor sit amet consectetur. Sit quis pellentesque arcu
              vulputate phasellus vestibulum. Id blandit est id enim eget ornare
              sit. Magna et etiam tellus fusce. Congue erat ultrices magna proin
              proin et. Vulputate curabitur ultricies odio tellus sit congue
              risus venenatis faucibus. Et sed pharetra nunc nunc porta. Aliquam
              eget sed arcu accumsan faucibus amet arcu. Quis eleifend vel
              tincidunt id. Faucibus sed curabitur eu adipiscing malesuada
              convallis nunc aliquam nunc. Nibh fusce ligula netus interdum id
              etiam accumsan placerat rutrum. Massa velit tellus felis tristique
              duis tellus tempus tincidunt. Adipiscing est euismod eu
              condimentum et cursus at amet ut.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white px-24 ">
        <div className="lg:w-[75%] mt-[4rem] lg:mt-[6rem] flex flex-col items-center mx-auto">
          <StarWords word="Our Exoertise" />
          <h2 className="text-textColorPrimary text-center text-[1.2rem] lg:text-[2rem] font-[600]">
            Your Engineering Needs, Our{" "}
            <span className="bg-gradient-to-r from-linearOne to-linearTwo inline-block text-transparent bg-clip-text">
              Expert Service Solutions.
            </span>
          </h2>
          <p className="text-center lg:px-[3rem] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            habitant dui consectetur sed nam amet, magna. Iet se
          </p>
        </div>
        <div className="w-[100%] grid grid-cols-1 lg:grid-cols-2 gap-8 mt-[2.5rem] lg:mt-[5rem]">
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
        </div>{" "}
      </div>
      <div className="bg-white px-[1.5rem] lg:px-[5rem] text-center py-[3rem] lg:py-[5rem] flex flex-col items-center ">
        <div className="w-[100%] mt-[8rem] flex flex-col items-center">
          <StarWords word={"Our top clients"} />
          <div className="w-[100%] mt-[2rem] flex flex-wrap justify-center lg:justify-between gap-8">
            <img src={nnpc} alt="nnpc" />
            <img src={shells} alt="shells" />
            <img src={seplat} alt="seplat" />
            <img src={transcorp} alt="transcorp" />
            <img src={total} alt="total" />
            <img src={amazon} alt="amazon" />
            <img src={nigeria} alt="nigeria" />
          </div>
        </div>
      </div>{" "}
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

export default AboutUs;
