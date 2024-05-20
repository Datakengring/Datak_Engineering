import GradientWord from "../../components/GradientWord";
import StarWords from "../../components/StarWords";
import MainWrapper from "../../layouts/MainWrapper";
import deOne from "/images/de-one.webp";
import deTwo from "/images/de-two.webp";
import deThree from "/images/de-three.webp";
import nnpc from "/svgs/nnpc.svg";
import shells from "/svgs/shells.svg";
import seplat from "/svgs/seplat.svg";
import transcorp from "/svgs/transcorp.svg";
import total from "/svgs/total.svg";
import amazon from "/svgs/amazon.svg";
import nigeria from "/svgs/nigeria.svg";
import report from "/images/report.webp";
import ContactForm from "../../components/ContactForm";
import one from "/images/one.webp";
import two from "/images/two.webp";
import three from "/images/three.webp";
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
            DATAK
          </span>
        </h2>

        <p className=" w-[50%] text-center font-normal text-lg mt-2">
          Welcome to Datak Engineering Service Limited, a leading provider of
          innovative engineering solutions tailored to meet the diverse needs of
          the oil and gas industry.
        </p>
      </div>
      <div className=" bg-white  p-24 w-[100%] flex flex-col gap-2">
        <h5 className=" font-normal">
          With a steadfast commitment to excellence, integrity, and client
          satisfaction, we have established ourselves as trusted partners in the
          pursuit of engineering excellence.
        </h5>
        <div className="flex flex-row gap-10 justify-between w-full mt-7">
          <img
            src={deOne}
            className="h-[22rem] w-full rounded-2xl"
            alt="engineering service-1"
          />
          <img
            src={deTwo}
            className="h-[22rem] w-full rounded-2xl"
            alt="engineering service-2"
          />
          <img
            src={deThree}
            className="h-[22rem] w-full rounded-2xl"
            alt="engineering service-3"
          />
        </div>
      </div>
      <div className=" bg-white px-[1.5rem] lg:px-[5rem] py-[3rem] lg:py-[5rem] w-[100%] flex flex-col gap-16">
        <h3 className=" font-semibold text-3xl text-center">
          Fueling Success with <GradientWord word="Precision Engineering" /> in
          the Oil and Gas Sector.
        </h3>
        <div className="flex gap-5">
          <div className=" bg-tertiary w-full p-6 rounded-sm">
            <h4 className=" font-semibold text-lg">Our Mission</h4>
            <p className=" text-base mt-4">
              At Datak Engineering, our mission is to deliver unparalleled
              engineering services that drive success and sustainability in the
              oil and gas sector. We strive to exceed client expectations by
              providing cutting-edge solutions, fostering innovation, and
              upholding the highest standards of quality and safety.
            </p>
          </div>
          <div className=" bg-tertiary w-full p-6 rounded-sm">
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
      <div className="bg-white px-[1.5rem] lg:px-[5rem] py-[3rem] lg:py-[5rem]">
        <div className="lg:w-[75%] mt-[4rem] lg:mt-[6rem] flex flex-col items-center mx-auto">
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
            image={one}
          />
          <ActivityCard
            header={"Design Engineering"}
            info={
              "From conceptualization to execution, our design engineering services ensure precision, efficiency, and compliance with regulatory codes and standards. We specialize in process design, mechanical design, piping design, structural design, and 3D modeling using industry-leading software like AutoCAD, SolidWorks, and AVEVA E3D."
            }
            image={two}
          />
          <ActivityCard
            header={"Oil and Gas Process Equipment Design"}
            info={
              "We are experts in the design and optimization of process equipment for the oil and gas industry. From concept development to detailed engineering, our team leverages industry best practices and innovative technologies to deliver efficient, reliable, and cost-effective solutions."
            }
            image={three}
          />
          <ActivityCard
            header={"Technical Support"}
            info={
              "Our technical support services provide clients with the expertise and assistance needed to overcome challenges, optimize operations, and ensure compliance with regulatory requirements. Whether it's troubleshooting equipment issues or providing ongoing maintenance support, we are dedicated to helping our clients achieve operational excellence."
            }
            image={four}
          />
        </div>
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
