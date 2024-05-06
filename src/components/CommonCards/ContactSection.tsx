import ContactForm from "../ContactForm";
import GradientWord from "../GradientWord";
import StarWords from "../StarWords";
import report from "/images/report.webp";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
