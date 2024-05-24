import { Link } from "react-router-dom";
import arrow from "/svgs/arrow.svg";

type IActivity = { header: string; info: string; image: string; link: string };

const ActivityCard = ({ header, info, image, link }: IActivity) => {
  return (
    <div className="relative bg-[#FCFCFC] lg:h-[28rem] p-[1.5rem] lg:p-[2rem] border-[1px] border-solid border-[#F2F2F2] text-[#333333] rounded-[0.5rem]">
      <div className="lg:w-[90%]">
        <h2 className="text-[1.6rem] font-[600]">{header}</h2>
        <p className="font-[400]">{info}</p>
      </div>
      <div className="flex lg:flex-row flex-col-reverse gap-3 lg:items-center">
        <Link
          to={link}
          className="text-yellow flex mt-2 lg:mt-[10rem] hover:underline"
        >
          <img className="" src={arrow} alt="arrow" />
          <span>Learn more</span>
        </Link>
        <img
          className="lg:w-[18rem] lg:h-[11rem] mt-5 lg:mt-0 lg:absolute lg:bottom-0 lg:right-0 rounded-[0.5rem] lg:rounded-none lg:rounded-br-[0.5rem] lg:rounded-tl-[0.5rem]"
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export default ActivityCard;
