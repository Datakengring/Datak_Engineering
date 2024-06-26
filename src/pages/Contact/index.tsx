import GradientWord from "../../components/GradientWord";
import StarWords from "../../components/StarWords";
import MainWrapper from "../../layouts/MainWrapper";
import UseForm from "../../components/UseForm";

const ContactUs = () => {
  return (
    <MainWrapper>
      <div className="bg-secondary bg-[url('/svgs/bg-grid.svg')] px-[1.5rem] text-center flex flex-col items-center lg:px-[5rem] py-[3rem] lg:py-[5rem]">
        <StarWords word="Contact us" />
        <h2 className=" text-[1.8rem] font-[600] lg:text-[2.4rem]">
          <GradientWord word="Let’s talk" /> on how we can make an impact
        </h2>
      </div>
      <div className="bg-white px-[1.5rem] flex justify-center lg:px-[5rem] py-[3rem] lg:py-[5rem] ">
        <UseForm />
      </div>
    </MainWrapper>
  );
  // ContactUs
};

export default ContactUs;
