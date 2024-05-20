import { Link, useParams } from "react-router-dom";
import { IEquipment, equipmentData } from "../../utils/data";
import MainWrapper from "../../layouts/MainWrapper";
import ContactSection from "../../components/CommonCards/ContactSection";
// import { useEffect, useState } from "react";

const EquipmentDetails = () => {
  const { slug } = useParams();
  //   const [data, setData] = useState({});

  //Using find for the objects
  //   function checkEquipment(equipment) {
  //     return equipment.path === id;
  //   }
  //   const equipments = equipmentData.find(checkEquipment);
  //   const equipment = equipmentData.find(
  //     (equipment) => String(equipment.id) === id
  //   );

  //Using filter for the objects
  const checkEquipment = (equipment: IEquipment) => {
    return equipment.path === slug;
  };
  const equipments = equipmentData.filter(checkEquipment);

  console.log(equipments);

  //   useEffect(() => {
  //     setData(equipments);
  //   }, [equipments]);
  return (
    <MainWrapper key={slug}>
      <div className="bg-[url('/svgs/bg-grid.svg')] bg-secondary flex flex-col justify-center items-center px-[1.5rem] lg:px-[5rem] py-[3rem] lg:py-[5rem]">
        {equipments.map((e, i) => (
          <div key={i} className="flex flex-col justify-center items-center ">
            <h2 className="lg:w-[80%] text-[2rem] text-center font-[600] lg:text-[2.4rem]">
              {e.title}
            </h2>
            <p className=" lg:w-[75%] text-center font-normal text-lg mt-4">
              With years of industry experience and a team of highly skilled
              professionals, we specialize in four core areas:
            </p>
            <Link
              className="hidden bg-primary text-white h-[2.5rem] w-[9rem] lg:flex justify-center items-center rounded-[2rem] hover:bg-opacity-90 mt-6"
              to={"/"}
            >
              Make enquiry
            </Link>
          </div>
        ))}
      </div>
      {/* <div className="bg-secondary px-[1.5rem] lg:px-[5rem] py-[3rem] lg:py-[5rem] flex flex-col gap-[3rem] justify-between items-center lg:gap-0 lg:flex-row"> */}
      {equipments.map((e, i) => (
        <div
          key={i}
          className="bg-white px-[1.5rem] lg:px-[5rem] py-[3rem] lg:py-[5rem] flex flex-col gap-[3rem] justify-between items-center lg:gap-0 lg:flex-row"
        >
          <div className="lg:w-[40%] h-[16rem] lg:h-[28rem] flex justify-center items-center p-3 bg-[#08005114] rounded-[0.75rem]">
            <img src={e.image} className="" alt={e.title} />
          </div>
          <div className="lg:w-[50%]">
            <p dangerouslySetInnerHTML={{ __html: e.info }}></p>
          </div>
        </div>
      ))}
      {/* </div> */}
      <ContactSection />
    </MainWrapper>
  );
};

export default EquipmentDetails;
// {equipmentData
//           .filter((equipment) => equipment.path === slug)
//           .map((e, i) => (
//             <div key={i}>
//               <h1>{e.title}</h1>
//               <p>22</p>
//             </div>
//           ))}