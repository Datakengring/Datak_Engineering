import star from "/svgs/star.svg";

const StarWords = ({ word }: { word: string }) => {
  return (
    <div className="flex w-fit mb-4 bg-[#EAA5080A] px-4 py-2 rounded-[1.2rem]">
      <img src={star} alt="star" />
      <p className="text-yellow text-center font-medium">{word}</p>
    </div>
  );
};

export default StarWords;
