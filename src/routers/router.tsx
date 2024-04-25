import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/Home";
import AboutUs from "../pages/About";
import WhatWeDo from "../pages/WhatWeDo";
import EquipmentDesign from "../pages/EquipmentDesign";
import ContactUs from "../pages/Contact";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />}></Route>
      <Route path="what-we-do" element={<WhatWeDo />}></Route>
      <Route path="about-us" element={<AboutUs />}></Route>
      <Route
        path="process-equipment-design"
        element={<EquipmentDesign />}
      ></Route>
      <Route path="contact-us" element={<ContactUs />}></Route>
    </Route>
  )
);
