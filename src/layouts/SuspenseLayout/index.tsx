import { ReactElement, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../../components/Loader";

const SuspenseLayout: () => ReactElement = () => (
  <Suspense fallback={<Loader />}>
    <Outlet />
  </Suspense>
);
export default SuspenseLayout;
