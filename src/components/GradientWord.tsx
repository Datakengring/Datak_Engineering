const GradientWord = ({ word }: { word: string }) => {
  return (
    <span className="bg-gradient-to-r from-linearOne to-linearTwo inline-block text-transparent bg-clip-text">
      {word}
    </span>
  );
};

export default GradientWord;
