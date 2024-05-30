import { lazy } from "react";

export const RootLayout = lazy(() => import("../layouts/RootLayout"));
export const HomePage = lazy(() => import("../pages/Home"));
export const AboutUs = lazy(() => import("../pages/About"));
export const WhatWeDo = lazy(() => import("../pages/WhatWeDo"));
export const Training = lazy(() => import("../pages/WhatWeDo/Training"));
export const DesignSoftware = lazy(
  () => import("../pages/WhatWeDo/Training/DesignSoftware")
);
export const PipingEngineering = lazy(
  () => import("../pages/WhatWeDo/Training/PipingEngineering")
);
export const ProjectManagement = lazy(
  () => import("../pages/WhatWeDo/Training/ProjectManagement")
);
export const DesignEngineering = lazy(
  () => import("../pages/WhatWeDo/DesignEngineering")
);
export const TechnicalSupport = lazy(
  () => import("../pages/WhatWeDo/TechnicalSupport")
);
export const EquipmentDesign = lazy(() => import("../pages/EquipmentDesign"));
export const ContactUs = lazy(() => import("../pages/Contact"));
export const EquipmentDetails = lazy(
  () => import("../pages/EquipmentDesign/EquipmentDetails/EquipmentDetails")
);
