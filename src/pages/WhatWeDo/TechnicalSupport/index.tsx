import { Link, useNavigate} from "react-router-dom";
import MainWrapper from "../../../layouts/MainWrapper";
import EnquiryForm from "../../../components/EnquiryForm";
import four from "/images/four.webp";
import left from "/svgs/arrow-left.svg";
const TechnicalSupport = () => {
   const navigate = useNavigate();
  return (
    <MainWrapper >
      <div className="bg-[url('/svgs/bg-grid.svg')] bg-secondary flex flex-col justify-center items-center px-[1.5rem] relative lg:px-[5rem] py-[3rem] lg:py-[5rem]">
      <button
          className="absolute flex gap-1 left-[1rem] top-[1rem] lg:left-[5rem] lg:top-[3rem] hover:underline"
          onClick={() => navigate(-1)}
        >
          <img src={left} className="h-6" alt="left-arrow" />
          <p className="text-yellow">Go back</p>
        </button>
        <div className="flex flex-col justify-center items-center ">
          <h2 className="lg:w-[80%] text-[2rem] text-center font-[600] lg:text-[2.4rem]">
            <span className=" bg-gradient-to-r from-linearOne to-linearTwo inline-block text-transparent bg-clip-text ">
              Technical Support
            </span>
          </h2>
          <p className=" lg:w-[75%] text-center font-normal text-lg mt-4">
            We understand the critical role that technical support plays in ensuring the success and efficiency of oil and gas projects. With our dedicated technical support services arm, we are committed to providing clients with the expertise, assistance, and resources needed to overcome challenges, streamline project bidding documentation, manage document control, and ensure compliance with regulatory requirements.
          </p>
          <Link
            className="hidden bg-primary text-white h-[2.5rem] w-[9rem] lg:flex justify-center items-center rounded-[2rem] hover:bg-opacity-90 mt-6"
            to={"/"}
          >
            Make enquiry
          </Link>
        </div>
      </div>
      <div
        className="bg-white px-[1.5rem] lg:px-[5rem] py-[3rem] lg:py-[5rem] flex flex-col gap-[3rem] justify-between items-center lg:gap-0 lg:flex-row"
      >
        <div className="lg:w-[40%] h-[16rem] lg:h-auto flex justify-center items-center p-3 bg-[#08005114] rounded-[0.75rem]">
          <img src={four} className="" alt="four" />
        </div>
        <div className="lg:w-[50%]">
          <h2 className="text-[1.2rem] text-left font-[600] mb-3">Our Services:</h2>
          <ul className="list-inside list-disc flex flex-col gap-4">
            <li className="font-[400] text-justify hyphens-auto marker:text-primary"> <span className="font-semibold">Expert Guidance & Assistance: </span> Our experienced professionals offer technical expertise to troubleshoot equipment issues, optimize processes, and resolve operational challenges, ensuring project efficiency.</li>
            <li className="font-[400] text-justify hyphens-auto marker:text-primary"> <span className="font-semibold">Project Bidding Documentation: </span>
              We assist in preparing comprehensive and competitive bidding documents, including tenders and proposals, ensuring accuracy, clarity, and alignment with project objectives.</li>
            <li className="font-[400] text-justify hyphens-auto marker:text-primary"> <span className="font-semibold">Document Control: </span>
              Our efficient document management system ensures proper creation, tracking, and version control of critical project documents, maintaining organization and accessibility for stakeholders.</li>
            <li className="font-[400] text-justify hyphens-auto marker:text-primary"> <span className="font-semibold">
              Regulatory Compliance: </span>
              We provide proactive support to navigate complex industry regulations, ensuring adherence to standards and minimizing compliance risks
            </li>
          </ul>
        </div>
      </div>
      {/* </div> */}
      <EnquiryForm enquiryData={"Technical Support"} />
    </MainWrapper>
  )
}

export default TechnicalSupport


