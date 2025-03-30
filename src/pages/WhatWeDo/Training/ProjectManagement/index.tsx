import { useNavigate } from "react-router-dom";
import ContactSection from "../../../../components/CommonCards/ContactSection";
import GradientWord from "../../../../components/GradientWord";
import ReasonCard from "../../../../components/ReasonCard";
import StarWords from "../../../../components/StarWords";
import MainWrapper from "../../../../layouts/MainWrapper";
import left from "/svgs/arrow-left.svg";
import primavera from "/images/primavera.webp";
import welder from "/images/welder.webp";

const ProjectManagement = () => {
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
          <GradientWord word="Project management" />
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
        <div className="grid lg:grid-cols-3 gap-6 mt-[2rem] lg:mt-[4rem]">
          <ReasonCard
            header="Primavera P6"
            info="As a leading provider of engineering training solutions, we are committed to helping individuals and organizations unlock their full potential and achieve success in today's dynamic project management landscape using Primavera P6."
          />
          <ReasonCard
            header="Data Analysis"
            info="We are dedicated to equipping individuals and organizations with the skills and knowledge needed to thrive in today's data-driven world. Our data analysis training programs are designed to empower you with the tools and techniques to extract valuable insights, make informed decisions, and drive business success."
          />
          <ReasonCard
            header="Data Science"
            info="We are committed to providing top-tier data science training that equips individuals with the skills and knowledge needed to excel in the rapidly evolving field of data science. Our comprehensive programs are designed to help you master the fundamental concepts, tools, and techniques of data science and apply them to real-world challenges."
          />
        </div>
      </div>
      <div className="bg-white px-[1.5rem] lg:px-[5rem] py-[3rem] lg:py-[5rem] flex flex-col gap-[3rem] justify-between items-center lg:gap-0 lg:flex-row">
        <div className="lg:w-[50%] text-left">
          <StarWords word={"What is Primavera P6"} />
          <p className="text-textColorPrimary text-[1.2rem] lg:text-[2rem] font-[600] mb-[1.5rem]">
            Significance of {"  "} <GradientWord word="Primavera P6" /> {"  "}{" "}
            in Project Management
          </p>
          <p className=" mb-[2rem]">
            Oracle Primavera P6 is a project, program and portfolio management
            tool that is used for planning, managing & executing your project
            work. There is no denying that Primavera P6 is one of the most
            sophisticated and widely-used project portfolio management software
            in the world today. Some may think of P6 as simply a tool for
            scheduling projects, such as Microsoft Project, or any of the other
            counterparts, but taken a step further, it can also be used to plan
            and manage a multi-year, globally-distributed set of engineering
            projects involving tens of thousands of workers, machines, and
            materials.
          </p>
        </div>
        <div className="lg:w-[40%] p-3 bg-[#08005114] rounded-[0.75rem]">
          <img src={primavera} alt="engineer" />
        </div>
      </div>
      <div className="bg-white px-[1.5rem] lg:px-[5rem] py-[3rem] lg:py-[5rem] flex flex-col gap-[3rem] justify-between items-center lg:gap-0 lg:flex-row">
        <div className="lg:w-[40%] p-3 bg-[#08005114] rounded-[0.75rem]">
          <img src={welder} alt="welder" />
        </div>
        <div className="lg:w-[50%] text-left">
          <StarWords word={"What is Primavera P6"} />
          <p className="text-textColorPrimary text-[1.2rem] lg:text-[2rem] font-[600] mb-[1.5rem]">
            What you {"  "}
            <GradientWord word="Stand to Gain" />
            {"  "} from the Primavera P6 Professional Course:
          </p>
          <p className=" mb-[2rem]">
            This course is designed to be a gentle introduction to P6, ensuring
            the most important aspects of the software is treated from a user's
            point of view. Newcomers to P6 may journey through this course from
            beginning to end, trying out the features and working through the
            meticulously-made examples and trying out exercises as they go
            along.
          </p>
        </div>
      </div>
      <ContactSection />
    </MainWrapper>
  );
};

export default ProjectManagement;
