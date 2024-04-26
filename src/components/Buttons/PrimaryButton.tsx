import { ReactNode } from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({
  children,
  path,
}: {
  children: ReactNode;
  path: string;
}) => {
  return (
    <Link
      to={path}
      className="bg-primary text-white py-[0.5rem] px-3 lg:px-[1.2rem] rounded-[0.5rem] hover:bg-opacity-90"
    >
      {children}
    </Link>
  );
};

export default PrimaryButton;
