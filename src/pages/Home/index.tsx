import MainWrapper from "../../layouts/MainWrapper";
import heroOne from "/images/engineers.webp";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import SecondaryButton from "../../components/Buttons/SecondaryButton";

const HomePage = () => {
  return (
    <MainWrapper>
      <div className="bg-secondary px-[1.5rem] lg:px-[5rem] py-[3rem] lg:py-[5rem] flex flex-col gap-[3rem] lg:gap-0 lg:flex-row">
        <div className="w-[100%] lg:w-[50%]">
          <h2 className="bg-gradient-to-r from-linearOne to-linearTwo inline-block text-transparent bg-clip-text text-[2.4rem] lg:text-[3rem] font-[600]">
            Precision Engineering
            <br />
            <span className="text-textColorPrimary font-[500]">
              for the Dynamic Oil and Gas Sector
            </span>
          </h2>
          <p className="mt-[1.5rem] lg:mt-[2rem] lg:w-[75%]">
            At DATAK Engineering Service Limited, we are your trusted partner
            for comprehensive engineering solutions tailored to meet the diverse
            needs of the oil and gas industry.
          </p>
          <div className="mt-[2rem] lg:mt-[3rem] font-medium flex gap-6">
            <PrimaryButton path="contact-us">Contact our team</PrimaryButton>
            <SecondaryButton path={"what-we-do"}>What we do</SecondaryButton>
          </div>
        </div>
        <div className="w-[100%] lg:w-[50%] flex justify-center">
          <img className="lg:h-[30rem]" src={heroOne} alt="HeroImg1" />
        </div>
      </div>
    </MainWrapper>
  );
};

export default HomePage;
