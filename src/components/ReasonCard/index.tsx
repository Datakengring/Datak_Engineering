import datak from "/svgs/datak.svg";

const ReasonCard = ({ header, info }: { header: string; info: string }) => {
  return (
    <div className="bg-[#FCFCFC] h-[24rem] w-[20rem] lg:w-fit p-[1rem] lg:p-[1.2rem] border-[1px] border-solid border-[#F2F2F2] text-[#333333] rounded-[0.5rem]">
      <div className="bg-[#EAA5080F] h-[3rem] w-[3rem] flex justify-center items-center rounded-[50%] mb-6">
        <img className="h-5" src={datak} alt="logo" />
      </div>
      <h2 className="text-[1.2rem] text-left font-[600] mb-3">{header}</h2>
      <p className="font-[400] text-left">{info}</p>
    </div>
  );
};

export default ReasonCard;
