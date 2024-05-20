import { Link } from "react-router-dom";
import arrow_right from "/svgs/arrow-right.svg";
import { IEquipment } from "../../utils/data";

const EquipmentCard = ({ image, title, path }: IEquipment) => {
  return (
    <div className="w-auto h-full lg:w-auto p-4 rounded-[0.75rem] shadow-2xl text-left hover:shadow-inner flex flex-col">
      <div className="h-[15rem] bg-gradient-to-r flex justify-center items-center py-4 px-6 rounded-[0.5rem] from-linearOne to-linearTwo">
        <img src={image} className="h-full rounded-[0.15rem]" alt="" />
      </div>
      <p className="font-[500] my-2">{title}</p>
      <div className="flex justify-between items-center">
        <Link to={path} className="text-yellow flex hover:underline">
          <span>Learn more</span>
          <img className="ml-2" src={arrow_right} alt="arrow" />
        </Link>
        <Link
          to={"/contact-us"}
          className="bg-primary text-white py-[0.25rem] px-2 lg:px-[1rem] rounded-[0.5rem] text-[0.8rem] hover:bg-opacity-90"
        >
          Make an enquiry
        </Link>
      </div>
    </div>
  );
};

export default EquipmentCard;
