import { ReactNode } from "react";

const MainWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="h-auto w-[100%] pt-[5rem]">{children}</div>;
};

export default MainWrapper;
