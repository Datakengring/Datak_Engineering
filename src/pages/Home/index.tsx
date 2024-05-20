import MainWrapper from "../../layouts/MainWrapper";
import heroOne from "/images/engineers.webp";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import StarWords from "../../components/StarWords";
import GradientWord from "../../components/GradientWord";
import inspect from "/images/inspect.webp";
import ReasonCard from "../../components/ReasonCard";
import nnpc from "/svgs/nnpc.svg";
import shells from "/svgs/shells.svg";
import seplat from "/svgs/seplat.svg";
import transcorp from "/svgs/transcorp.svg";
import total from "/svgs/total.svg";
import amazon from "/svgs/amazon.svg";
import nigeria from "/svgs/nigeria.svg";
import Expertise from "../../components/CommonCards/Expertise";
import ContactSection from "../../components/CommonCards/ContactSection";

const HomePage = () => {
  return (
    <MainWrapper>
      <div className="bg-secondary bg-[url('/svgs/bg-grid.svg')] px-[1.5rem] lg:px-[5rem] py-[3rem] lg:py-[5rem] flex flex-col gap-[3rem] lg:gap-0 lg:flex-row">
        <div className="w-[100%] lg:w-[50%]">
          <h2 className="bg-gradient-to-r from-linearOne to-linearTwo inline-block text-transparent bg-clip-text text-[1.8rem] font-[600] lg:text-[2.4rem]">
            Precision Engineering
            <br />
            <span className="text-textColorPrimary">
              for the Dynamic Oil and Gas Sector
            </span>
          </h2>
          <p className="mt-[1.5rem] lg:mt-[2rem] lg:w-[80%]">
            At DATAK Engineering Service Limited, we are your trusted partner
            for comprehensive engineering solutions tailored to meet the diverse
            needs of the oil and gas industry. With expertise spanning training
            services, design engineering, technical support, and process
            equipment design, we are committed to delivering excellence at every
            stage of your project journey.
          </p>
          <div className="mt-[2rem] lg:mt-[3rem] font-medium flex gap-4 lg:gap-6">
            <PrimaryButton path="contact-us">Contact our team</PrimaryButton>
            <SecondaryButton path={"what-we-do"}>What we do</SecondaryButton>
          </div>
        </div>
        <div className="w-[100%] lg:w-[50%] flex justify-center">
          <img className="lg:h-[30rem]" src={heroOne} alt="HeroImg1" />
        </div>
      </div>
      <div className="bg-white px-[1.5rem] lg:px-[5rem] py-[3rem] lg:py-[5rem] ">
        <div className="h-[6rem] lg:h-[4.5rem] lg:w-[70%] mx-auto bg-[#EAA5080A] border-[2px] border-solid border-[#EAA5081F] rounded-[3rem] grid grid-cols-3 items-center justify-around divide-x-2 divide-[#E0E0E0]">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-2">
            <p className="text-primary text-[1.2rem] lg:text-[2rem] font-[600]">
              6+
            </p>
            <span className="text-textColorPrimary w-[5.5rem] text-[0.85rem] lg:text-[1rem] font-[400] text-center">
              Years of Experience
            </span>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-2">
            <p className="text-primary text-[1.2rem] lg:text-[2rem] font-[600]">
              16+
            </p>
            <span className="text-textColorPrimary w-[5.5rem] text-[0.85rem] lg:text-[1rem] font-[400] text-center">
              Valuable Clients
            </span>
          </div>
          <div className=" flex flex-col lg:flex-row justify-center items-center lg:gap-2">
            <p className="text-primary text-[1.2rem] lg:text-[2rem] font-[600]">
              32+
            </p>
            <span className="text-textColorPrimary w-[5.5rem] text-[0.85rem] lg:text-[1rem] font-[400] text-center">
              Total projects
            </span>
          </div>
        </div>
        <div className="lg:w-[75%] mt-[4rem] lg:mt-[6rem] flex flex-col items-center mx-auto">
          <StarWords word="Our services" />
          <h2 className="text-textColorPrimary text-center text-[1.2rem] lg:text-[2rem] font-[600]">
            Your Engineering Needs, Our{" "}
            <span className="bg-gradient-to-r from-linearOne to-linearTwo inline-block text-transparent bg-clip-text">
              Expert Service Solutions.
            </span>
          </h2>
          <p className="text-center lg:px-[3rem] mt-2">
            We align with global standards set by organizations such as the
            International Organization for Standardization (ISO). Our practices
            adhere to ethical guidelines, ensuring safety, reliability, and
            compliance.
          </p>
        </div>
        <Expertise />
      </div>
      <div className="bg-secondary px-[1.5rem] lg:px-[5rem] py-[3rem] lg:py-[5rem] flex flex-col gap-[3rem] justify-between items-center lg:gap-0 lg:flex-row">
        <div className="lg:w-[40%] p-3 bg-[#08005114] rounded-[0.75rem]">
          <img src={inspect} alt="engineer" />
        </div>
        <div className="lg:w-[50%] text-left">
          <StarWords word={"Global Standard"} />
          <p className="text-textColorPrimary text-[1.2rem] lg:text-[2rem] font-[600] mb-[1.5rem]">
            Our <GradientWord word="practices adhere" /> to ethical guidelines,
            ensuring safety, and compliance
          </p>
          <p className=" mb-[2rem]">
            Our commitment to quality management ensures consistent excellence
            in our products and services.
          </p>
          <PrimaryButton path="contact-us">Contact our team</PrimaryButton>
        </div>
      </div>
      <div className="bg-white px-[1.5rem] lg:px-[5rem] text-center py-[3rem] lg:py-[5rem] flex flex-col items-center ">
        <p className="mx-auto">
          <StarWords word={"Why choose us"} />
        </p>
        <p className="text-textColorPrimary text-[1.2rem] lg:text-[2rem] font-[600] mb-[0.5rem]">
          Discover Superior Engineering Innovation,
          <GradientWord word="Your Top Choice." />
        </p>
        {/* <p className="lg:w-[60%] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet habitant
          dui consectetur sed nam amet, magna. Iet se
        </p> */}
        <div className="grid lg:grid-cols-4 gap-6 mt-[2rem] lg:mt-[4rem]">
          <ReasonCard
            header="Commitment to Excellence"
            info="We are driven by a passion for excellence in everything we do. From the quality of our services to the relationships we build with our clients, excellence is at the core of our ethos."
          />
          <ReasonCard
            header="Industry Experience"
            info="With a proven track record of success and a deep understanding of the oil and gas sector, we bring valuable insights and expertise to every project we undertake."
          />
          <ReasonCard
            header="Client-Centric Approach"
            info="We prioritize the needs and goals of our clients, working closely with them to deliver customized solutions that address their unique challenges and objectives."
          />
          <ReasonCard
            header="Innovation and Sustainability"
            info="We embrace innovation and sustainability in all aspects of our work, continuously seeking new ways to improve efficiency, reduce environmental impact, and drive long-term value for our clients."
          />
        </div>
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
      </div>
      <ContactSection />
    </MainWrapper>
  );
};

export default HomePage;
