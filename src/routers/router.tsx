import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SuspenseLayout from "../layouts/SuspenseLayout";
import {
  AboutUs,
  ContactUs,
  DesignEngineering,
  EquipmentDesign,
  EquipmentDetails,
  HomePage,
  RootLayout,
  TechnicalSupport,
  Training,
  WhatWeDo,
  DesignSoftware,
  PipingEngineering,
  ProjectManagement,
} from "./pathnames";
import SplashLayout from "../layouts/SplashLayout";

// import RootLayout from "../layouts/RootLayout";
// import HomePage from "../pages/Home";
// import AboutUs from "../pages/About";
// import WhatWeDo from "../pages/WhatWeDo";
// import EquipmentDesign from "../pages/EquipmentDesign";
// import ContactUs from "../pages/Contact";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SplashLayout />}>
      <Route path="/" element={<RootLayout />}>
        <Route element={<SuspenseLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route>
            <Route path="what-we-do" element={<WhatWeDo />} />
            <Route>
              <Route
                path="what-we-do/training-service"
                element={<Training />}
              />
              <Route
                path="what-we-do/training-service/project-management"
                element={<ProjectManagement />}
              />
              <Route
                path="what-we-do/training-service/piping-engineering"
                element={<PipingEngineering />}
              />
              <Route
                path="what-we-do/training-service/design-software"
                element={<DesignSoftware />}
              />
            </Route>
            <Route
              path="what-we-do/design-engineering"
              element={<DesignEngineering />}
            />
            <Route
              path="what-we-do/technical-support"
              element={<TechnicalSupport />}
            />
          </Route>
          <Route path="about-us" element={<AboutUs />}></Route>
          <Route>
            <Route
              path="process-equipment"
              element={<EquipmentDesign />}
            />
            <Route
              path="process-equipment/:slug"
              element={<EquipmentDetails />}
            />
          </Route>
          <Route path="contact-us" element={<ContactUs />}></Route>
        </Route>
      </Route>
    </Route>
  )
);
