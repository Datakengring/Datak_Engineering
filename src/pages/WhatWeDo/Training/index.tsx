import { useNavigate } from "react-router-dom";
import ActivityCard from "../../../components/ActivityCard";
import ContactSection from "../../../components/CommonCards/ContactSection";
import GradientWord from "../../../components/GradientWord";
import ReasonCard from "../../../components/ReasonCard";
import StarWords from "../../../components/StarWords";
import MainWrapper from "../../../layouts/MainWrapper";
import left from "/svgs/arrow-left.svg";
import one from "/images/t-one.webp";
import two from "/images/t-two.webp";
import three from "/images/t-three.webp";

const Training = () => {
  const navigate = useNavigate();

  return (
    <MainWrapper>
      <div className="bg-[url('/svgs/bg-grid.svg')] bg-secondary flex flex-col justify-center items-center text-center px-[1.5rem] relative lg:px-[5rem] py-[3rem] lg:py-[5rem]">
        <button
          className="absolute flex gap-1 left-[1rem] top-[1rem] lg:left-[5rem] lg:top-[3rem] hover:underline"
          onClick={() => navigate(-1)}
        >
          <img src={left} className="h-6" alt="left-arrow" />
          <p className="text-yellow">Go back</p>
        </button>
        <StarWords word="Datak Training" />
        <h2 className=" text-[1.8rem] lg:w-[75%] font-[600] lg:text-[2.4rem]">
          <GradientWord word="Unlock Your Engineering Potential:" />
          {"  "}
          Training on Design and Project Management Software{" "}
        </h2>
        <p className="lg:w-[80%] text-center font-normal text-lg mt-2">
          We empower engineers to excel through comprehensive training programs
          tailored to meet the demands of modern engineering practices.
        </p>
      </div>
      <div
        className="bg-white px-[1.5rem] flex flex-col items-center
       text-center lg:px-[5rem] py-[3rem] lg:py-[5rem]"
      >
        <div className="text-center flex flex-col items-center">
          <StarWords word="Why choose  our training" />
          <h2 className=" text-[1.5rem] lg:w-[75%] font-[600] lg:text-[2rem]">
            We understand the
            {"  "}
            <GradientWord word="importance of staying ahead" />
            {"  "}
            in the rapidly evolving field of engineering.
          </h2>
          <p className="lg:w-[80%] text-center font-normal text-[1rem] mt-2">
            Our training program offers:
          </p>
        </div>
        <div className="grid lg:grid-cols-4 gap-6 mt-[2rem] lg:mt-[4rem]">
          <ReasonCard
            header="Hands-on Experience"
            info="Gain practical experience through interactive sessions led      by industry experts with years of hands-on experience."
          />
          <ReasonCard
            header="Comprehensive Curriculum"
            info="Our curriculum covers a wide range of design and project      management software, ensuring you are proficient in the tools essential for success."
          />
          <ReasonCard
            header="Customize Learning Paths"
            info="Whether you're a beginner or seeking advanced techniques, our training program offers customized learning paths to suit      your level of expertise."
          />
          <ReasonCard
            header="Real-world Applications"
            info="Learn how to apply software tools to real-world engineering projects, providing you with the confidence to tackle any      challenge."
          />
        </div>
      </div>
      <div
        className="bg-white px-[1.5rem] flex flex-col items-center
       text-center lg:px-[5rem] py-[3rem] lg:py-[5rem]"
      >
        <div className="text-center flex flex-col items-center">
          <StarWords word="What you will learn" />
          <h2 className=" text-[1.5rem] lg:w-[75%] font-[600] lg:text-[2rem]">
            Discover What Awaits in Our Programs with {"  "}
            <GradientWord word="Curriculum Insights    " />
          </h2>
          <p className="lg:w-[80%] text-center font-normal text-[1rem] mt-2">
            Our training on the use of design and project management software is
            designed to equip professionals with the essential skills and
            knowledge needed to thrive in today's competitive landscape.
          </p>
        </div>
        <div className="w-[100%] grid grid-cols-1 lg:grid-cols-2 gap-8 mt-[2.5rem] lg:mt-[5rem]">
          <ActivityCard
            header={"Design Software Mastery"}
            info={
              "From CAD (Computer-Aided Design) to simulation      software, our training covers the entire spectrum of design tools used in      engineering"
            }
            link="design-software"
            image={one}
          />
          <ActivityCard
            header={"Project Management Proficiency"}
            info={
              "Learn how to effectively plan, execute, and      monitor engineering projects using industry-leading project management      software."
            }
            link="project-management"
            image={two}
          />
          <ActivityCard
            header={"Piping Engineering"}
            info={
              "Our comprehensive training curriculum covers a wide range of topics, including piping materials, piping plant layout among others"
            }
            link="piping-engineering"
            image={three}
          />
        </div>
      </div>
      <ContactSection />
    </MainWrapper>
  );
};

export default Training;
