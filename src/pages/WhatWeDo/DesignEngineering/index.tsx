import { Link, useNavigate } from "react-router-dom";
import MainWrapper from "../../../layouts/MainWrapper";
import EnquiryForm from "../../../components/EnquiryForm";
import two from "/images/Gas-Pipe.webp"
import left from "/svgs/arrow-left.svg";
const DesignEngineering = () => {
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
              Design Engineering
            </span>
          </h2>
          <p className=" lg:w-[75%] text-center font-normal text-lg mt-4">
            Our design arm is dedicated to providing comprehensive engineering design solutions tailored to the specific needs of the oil and gas industry. With a focus on precision, efficiency, and adherence to industry codes and standards, we offer a wide range of design services to support your project needs. We prioritize quality, safety, and compliance in all our design endeavors. Our team is well-versed in the latest industry codes and standards, including ASME, API, ANSI, and ASTM, ensuring that our designs meet or exceed regulatory requirements and industry best practices.
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
          <img src={two} className="" alt="four" />
        </div>
        <div className="lg:w-[50%]">
          <h2 className="text-[1.2rem] text-left font-[600] mb-3">Our Design Services:</h2>
          <ul className="list-inside list-disc flex flex-col gap-4">
            <li className="font-[400] text-justify hyphens-auto marker:text-primary"> <span className="font-semibold">Process Design: </span>Development of PFDs and P&IDs, process optimization using simulation tools.</li>
            <li className="font-[400] text-justify hyphens-auto marker:text-primary"> <span className="font-semibold">Process Equipment Desig: </span>
              Custom design of separators, heat exchangers, pressure vessels, and storage tanks with advanced software.</li>
            <li className="font-[400] text-justify hyphens-auto marker:text-primary"> <span className="font-semibold">Mechanical Design: </span>
              Engineering of rotating and static equipment, mechanical components, and structures for durability and performance.</li>
            <li className="font-[400] text-justify hyphens-auto marker:text-primary"> <span className="font-semibold">
              Piping Design: </span>
              Layout, routing, and specification of piping systems for safe and efficient fluid transport.
            </li>
            <li className="font-[400] text-justify hyphens-auto marker:text-primary"> <span className="font-semibold">
              Structural Design:  </span>
              Analysis and design of steel and concrete structures, ensuring stability and longevity.
            </li>
            <li className="font-[400] text-justify hyphens-auto marker:text-primary"> <span className="font-semibold">
              As-built Documentation: </span>
              We provide you with detailed As-built documentation for project closeout documentation.
            </li>
          </ul>
        </div>
      </div>
      {/* </div> */}
      <EnquiryForm enquiryData={" Design Engineering"} />
    </MainWrapper>
  )
}

export default DesignEngineering


