import { ReactNode } from "react";
import { Link } from "react-router-dom";

const SecondaryButton = ({
  children,
  path,
}: {
  children: ReactNode;
  path: string;
}) => {
  return (
    <Link
      to={path}
      className="border-[2px] border-solid border-primary text-primary py-[0.5rem] px-[1.2rem]  rounded-[0.5rem] hover:bg-textColorPrimary hover:bg-opacity-10 "
    >
      {children}
    </Link>
  );
};

export default SecondaryButton;
