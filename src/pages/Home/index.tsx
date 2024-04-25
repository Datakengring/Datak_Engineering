import MainWrapper from "../../layouts/MainWrapper";
import heroOne from "/images/engineers.webp";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import SecondaryButton from "../../components/Buttons/SecondaryButton";

const HomePage = () => {
  return (
    <MainWrapper>
      <div className="bg-secondary px-[5rem] py-[5rem] flex">
        <div className="w-[50%]">
          <h2 className="bg-gradient-to-r from-linearOne to-linearTwo inline-block text-transparent bg-clip-text text-[3rem] font-[600]">
            Precision Engineering
            <br />
            <span className="text-textColorPrimary ">
              for the Dynamic Oil and Gas Sector
            </span>
          </h2>
          <p className="mt-[2rem] w-[75%]">
            At DATAK Engineering Service Limited, we are your trusted partner
            for comprehensive engineeringsolutions tailored to meet the diverse
            needs of the oil and gas industry.
          </p>
          <div className="mt-[3rem] font-medium flex gap-6">
            <PrimaryButton path="contact-us">Contact our team</PrimaryButton>
            <SecondaryButton path={"what-we-do"}>What we do</SecondaryButton>
          </div>
        </div>
        <div className="w-[50%] flex justify-center">
          <img className="h-[30rem]" src={heroOne} alt="HeroImg1" />
        </div>
      </div>
    </MainWrapper>
  );
};

export default HomePage;
