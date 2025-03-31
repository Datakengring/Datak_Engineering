import ActivityCard from "../ActivityCard";
import one from "/images/one.webp";
import two from "/images/Gas-Pipe.webp";
import three from "/images/slide.webp";
import four from "/images/four.webp";

const Expertise = () => {
  return (
    <div className="w-[100%] grid grid-cols-1 lg:grid-cols-2 gap-8 mt-[2.5rem] lg:mt-[5rem]">
      <ActivityCard
        header={"Training service"}
        info={
          "Empower your team with our specialized training programs covering a wide range of engineering design software, piping engineering, structural analysis, and more. Our courses are designed to enhance skills and proficiency in compliance with industry standards such as ASME, API, and ANSI."
        }
        link="what-we-do/training-service"
        image={one}
      />
      <ActivityCard
        header={"Design Engineering"}
        info={
          "From conceptualization to execution, our design engineering services ensure precision, efficiency, and compliance with regulatory codes and standards. We specialize in process design, mechanical design, piping design, structural design, and 3D modeling using industry-leading software like AutoCAD, SolidWorks, and AVEVA E3D."
        }
        link="what-we-do/design-engineering"
        image={two}
      />
      <ActivityCard
        header={"Technical Support"}
        info={
          "Our dedicated technical support team provides expert guidance and assistance to overcome challenges, ensure regulatory compliance, and optimize project workflows. With in-depth knowledge of regulatory bodies like ISO, we ensure that your projects adhere to the highest quality and safety standards."
        }
        link="what-we-do/technical-support"
        image={three}
      />
      <ActivityCard
        header={"Process Equipment"}
        info={
          "Trust our experienced engineers to deliver innovative and reliable process equipment, adhering to codes and standards such as ASME, ASTM, and TEMA. From pressure vessels to heat exchangers, we provide tailored solutions to meet your project requirements."
        }
        link="process-equipment"
        image={four}
      />
    </div>
  );
};

export default Expertise;
