import GradientWord from "../../components/GradientWord";
import StarWords from "../../components/StarWords";
import MainWrapper from "../../layouts/MainWrapper";
import deOne from "/images/welder.webp";
import deTwo from "/images/slide2.webp";
import deThree from "/images/hydraulic.webp"
import nnpc from "/svgs/nnpc.svg";
import shells from "/svgs/shells.svg";
import seplat from "/svgs/seplat.svg";
import transcorp from "/svgs/transcorp.svg";
import total from "/svgs/total.svg";
import amazon from "/svgs/amazon.svg";
import nigeria from "/svgs/nigeria.svg";
import vessels from "/images/vessels.webp";
import ContactForm from "../../components/ContactForm";
import one from "/images/one.webp";
import two from "/images/Gas-Pipe.webp";
import three from "/images/slide.webp";
import four from "/images/four.webp";
import ActivityCard from "../../components/ActivityCard";

const AboutUs = () => {
  return (
    <MainWrapper>
      <div className=" bg-secondary bg-[url('/svgs/bg-grid.svg')] flex flex-col justify-center items-center px-[1.5rem] lg:px-[5rem] py-[3rem] lg:py-[5rem]">
        <StarWords word="About us" />
        <h2 className=" text-[2rem] font-[600] lg:text-[2.4rem]">
          Welcome to{" "}
          <span className=" bg-gradient-to-r from-linearOne to-linearTwo inline-block text-transparent bg-clip-text ">
            DATAK ENERGY SERVICES LIMITED
          </span>
        </h2>

        <p className="lg:w-[50%] text-center font-normal text-lg mt-2">
          Welcome to Datak Energy Service Limited, a leading provider of
          innovative engineering solutions tailored to meet the diverse needs of
          the oil and gas industry.
        </p>
      </div>
      <div className=" bg-white px-[1.5rem] lg:px-[5rem] py-[3rem] lg:py-[5rem] w-[100%] flex flex-col gap-2">
        <h5 className="font-normal">
          With a steadfast commitment to excellence, integrity, and client
          satisfaction, we have established ourselves as trusted partners in the
          pursuit of engineering excellence.
        </h5>
        <div className="flex flex-col lg:flex-row gap-10 justify-between w-full mt-7">
          <div className="w-full lg:w-1/3">
            <img
              src={deOne}
              className="h-[22rem] w-full object-cover rounded-2xl"
              alt="engineering service-1"
            />
          </div>
          <div className="w-full lg:w-1/3">
            <img
              src={deTwo}
              className="h-[22rem] w-full object-cover rounded-2xl"
              alt="engineering service-2"
            />
          </div>
          <div className="w-full lg:w-1/3">
            <img
              src={deThree}
              className="h-[22rem] w-full object-cover rounded-2xl"
              alt="engineering service-3"
            />
          </div>
        </div>
      </div>
      <div className=" bg-white px-[1.5rem] lg:px-[5rem] py-[3rem] lg:py-[5rem] w-[100%] flex flex-col gap-16">
        <h3 className=" font-semibold text-3xl text-center">
          Fueling Success with <GradientWord word="Precision Engineering" /> in
          the Oil and Gas Sector.
        </h3>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className=" bg-tertiary w-full p-4 lg:p-6 rounded-sm">
            <h4 className=" font-semibold text-lg">Our Mission</h4>
            <p className=" text-base mt-4">
              To deliver integrated energy solutions that exceed
              client expectations, ensuring safety, quality, and
              sustainability in all our projects.
            </p>
          </div>
          <div className=" bg-tertiary w-full p-4 lg:p-6 rounded-sm">
            <h4 className=" font-semibold text-lg">Our Vision</h4>
            <p className=" text-base mt-4">
              To be the preferred partner in the energy sector,
              recognized for our technical excellence, innovation,
              and commitment to client success.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white px-[1.5rem] lg:px-[5rem] py-[3rem] lg:py-[5rem]">
        <div className="lg:w-[75%] mt-[2rem] lg:mt-[6rem] flex flex-col items-center mx-auto">
          <StarWords word="Our Exoertise" />
          <h2 className="text-textColorPrimary text-center text-[1.2rem] lg:text-[2rem] font-[600]">
            Your Engineering Needs, Our{" "}
            <span className="bg-gradient-to-r from-linearOne to-linearTwo inline-block text-transparent bg-clip-text">
              Expert Service Solutions.
            </span>
          </h2>
          <p className="text-center lg:px-[3rem] mt-2">
            With years of industry experience and a team of highly skilled
            professionals, we specialize in four core areas:
          </p>
        </div>
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
            link="process-equipment"
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
      <div className="bg-white px-[1.5rem] lg:px-[5rem] text-center py-[3rem] lg:py-[5rem] flex flex-col items-center ">
        <div className="w-[100%] lg:mt-[8rem] flex flex-col items-center">
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
      <div className="bg-secondary px-[1.5rem] lg:px-[5rem] py-[3rem] lg:py-[5rem] flex flex-col gap-[3rem] justify-between items-stretch lg:gap-0 lg:flex-row">
        <div className="lg:w-[40%] p-3 bg-[#08005114] rounded-[0.75rem]">
          <img src={vessels} alt="vessels" className="w-full h-full object-cover" />
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
