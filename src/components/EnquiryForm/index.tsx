import StarWords from "../StarWords";
import UseForm from "../UseForm";

const EnquiryForm = ({ enquiryData }: { enquiryData: string }) => {
  return (
    <div>
      {" "}
      <div className="bg-white px-[1.5rem] text-center flex flex-col items-center lg:px-[5rem] py-[1rem] lg:py-[1rem]">
        <StarWords word="Make enquiry" />
        <h2 className=" text-[1.2rem] font-[600] lg:text-[1.6rem]">
          Request for Enquiry on {enquiryData}
        </h2>
      </div>
      <div className="bg-white px-[1.5rem] flex justify-center lg:px-[5rem] py-[1rem] lg:py-[1rem] ">
        <UseForm />
      </div>
    </div>
  );
};

export default EnquiryForm;
