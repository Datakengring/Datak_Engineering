type INavLinks = {
  name: string;
  path: string;
};

export const navlinks: INavLinks[] = [
  { name: "Home", path: "/" },
  { name: "What we do", path: "what-we-do" },
  { name: "About us", path: "about-us" },
  { name: "Process equipment design", path: "process-equipment-design" },
];

export type IEquipment = {
  image: string;
  title: string;
  path: string;
  info?: string;
};

export const equipmentData: IEquipment[] = [
  {
    image: "/images/test.webp",
    title: "Test Seperator",
    path: "test-seperator",
    info: "A test separator is a vital piece of process equipment used in the oil and gas industry to separate well fluids into gas, oil, and water components for accurate measurement and analysis. It plays a crucial role in evaluating well performance, determining production rates, and assessing reservoir characteristics.<br/><br/> We specialize in providing detailed design solutions for test separators, ensuring optimal performance, reliability, and compliance with industry standards. Our experienced engineers utilize advanced design software and adhere to codes and standards such as ASME, API, and ANSI to develop precise and efficient designs tailored to your project requirements.<br/><br/>From conceptualization to fabrication, our design process focuses on enhancing operational efficiency, minimizing environmental impact, and maximizing safety. We deliver innovative and reliable test separator designs that optimize oil and gas production processes and drive success in the industry.",
  },
  {
    image: "/images/pig-launcher.webp",
    title: "Pig Launcher",
    path: "pig-launcher",
    info: "pig-launcher",
  },
  {
    image: "/images/three-phase.webp",
    title: "Three Phase Separator",
    path: "three-phase-separator",
    info: "pig-launcher",
  },
  {
    image: "/images/two-phase.webp",
    title: "Two Phase Separator",
    path: "two-phase-separator",
    info: "pig-launcher",
  },
  {
    image: "/images/cyclone.webp",
    title: "Cyclone Separator",
    path: "cyclone-separator",
    info: "pig-launcher",
  },
  {
    image: "/images/choke.webp",
    title: "Choke Separator",
    path: "choke-separator",
    info: "pig-launcher",
  },
  {
    image: "/images/oil-diverter.webp",
    title: "Oil Diverted Manifold",
    path: "oil-diverter-manifold",
    info: "pig-launcher",
  },
  {
    image: "/images/kill-manifold.webp",
    title: "Kill Manifold",
    path: "kill-manifold",
    info: "pig-launcher",
  },
  {
    image: "/images/surge-tank.webp",
    title: "Surge Tank",
    path: "surge-tank",
    info: "pig-launcher",
  },
  {
    image: "/images/filter.webp",
    title: "Filter Separator",
    path: "filter-separator",
    info: "pig-launcher",
  },
  {
    image: "/images/gas-diverter.webp",
    title: "Gas Diverted Manifold",
    path: "gas-diverter-manifold",
    info: "pig-launcher",
  },
  {
    image: "/images/plug-catcher.webp",
    title: "Plug Catcher",
    path: "plug-catcher",
    info: "pig-launcher",
  },
  {
    image: "/images/production-manifold.webp",
    title: "Production Manifold",
    path: "production-manifold",
    info: "pig-launcher",
  },
  {
    image: "/images/natural-gas-meter.webp",
    title: "Natural Gas Metering Skid",
    path: "natural-gas-meter-skid",
    info: "pig-launcher",
  },
  {
    image: "/images/production-manifold.webp",
    title: "Spherical tank",
    path: "spherical-tank",
    info: "pig-launcher",
  },
];
