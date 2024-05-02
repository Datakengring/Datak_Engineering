import ActivityCard from "../ActivityCard";
import one from "/images/one.webp";
import two from "/images/two.webp";
import three from "/images/three.webp";
import four from "/images/four.webp";

const Expertise = () => {
  return (
    <div className="w-[100%] grid grid-cols-1 lg:grid-cols-2 gap-8 mt-[2.5rem] lg:mt-[5rem]">
      <ActivityCard
        header={"Training service"}
        info={
          "Our courses are designed to enhance skills and proficiency in compliance with industry standards such as ASME, API, and ANSI."
        }
        image={one}
      />
      <ActivityCard
        header={"Design Engineering"}
        info={
          "From conceptualization to execution, our design engineering services ensure precision, efficiency, and compliance with regulatory codes and standards."
        }
        image={two}
      />
      <ActivityCard
        header={"Technical Support"}
        info={
          "Our dedicated technical support team provides expert guidance and assistance to overcome challenges and ensure regulatory compliance."
        }
        image={three}
      />
      <ActivityCard
        header={"Process Equipment Design"}
        info={
          "Trust our experienced engineers to deliver innovative and reliable process equipment designs, adhering to codes and standards."
        }
        image={four}
      />
    </div>
  );
};

export default Expertise;
