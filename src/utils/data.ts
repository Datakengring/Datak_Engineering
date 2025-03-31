type INavLinks = {
  name: string;
  path: string;
};

export const navlinks: INavLinks[] = [
  { name: "Home", path: "/" },
  { name: "What we do", path: "what-we-do" },
  { name: "About us", path: "about-us" },
  { name: "Process equipment", path: "process-equipment" },
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
    image: "/images/three-phase.webp",
    title: "Three Phase Separator",
    path: "three-phase-separator",
    info: "A three-phase separator is a crucial piece of process equipment utilized in the oil and gas industry to separate incoming well fluids into three distinct phases: gas, oil, and water. This separation process is essential for refining crude oil, purifying natural gas, and ensuring optimal product quality and efficiency.<br/><br/>We specialize in providing detailed design solutions for three-phase separators, optimizing their performance, reliability, and safety. Our experienced engineers utilize advanced design software and adhere to industry codes and standards such as ASME, API, and ANSI to develop precise and efficient designs tailored to your project requirements.<br/><br/>From initial concept to fabrication, our design process focuses on enhancing operational efficiency, minimizing environmental impact, and maximizing safety. We deliver innovative and reliable three-phase separator designs that optimize crude oil refinement processes and drive success in the oil and gas industry.",
  },
  {
    image: "/images/two-phase2.webp",
    title: "Two Phase Separator",
    path: "two-phase-separator",
    info: "A two-phase separator is a fundamental component in the oil and gas industry used to separate well fluids into two main phases: gas and liquid. This separation process is critical for refining crude oil, removing impurities, and ensuring the quality of the end product.<br/><br/>We specialize in providing detailed design solutions for two-phase separators, optimizing their performance, reliability, and safety. Our experienced engineers utilize advanced design software and adhere to industry codes and standards such as ASME, API, and ANSI to develop precise and efficient designs tailored to your project requirements.<br/><br/>From conceptualization to fabrication, our design process focuses on enhancing operational efficiency, minimizing environmental impact, and maximizing safety. We deliver innovative and reliable two-phase separator designs that optimize crude oil refinement processes and drive success in the oil and gas industry.",
  },
  {
    image: "/images/cyclone.webp",
    title: "Cyclone Separator",
    path: "cyclone-separator",
    info: "A cyclone separator is a crucial component utilized in the oil and gas industry for the separation of solids and liquids from gas streams. This process equipment employs centrifugal force to separate particulate matter from the gas stream, enhancing the purity and quality of the end product.<br/><br/>We specialize in providing detailed design solutions for cyclone separators, optimizing their performance, reliability, and safety. Our experienced engineers utilize advanced design software and adhere to industry codes and standards such as ASME, API, and ANSI to develop precise and efficient designs tailored to your project requirements.<br/><br/>From conceptualization to fabrication, our design process focuses on enhancing operational efficiency, minimizing environmental impact, and maximizing safety. We deliver innovative and reliable cyclone separator designs that optimize crude oil refinement processes and drive success in the oil and gas industry.",
  },
  {
    image: "/images/choke.webp",
    title: "Choke Separator",
    path: "choke-separator",
    info: "A choke separator is a vital component used in the oil and gas industry for regulating the flow of fluids and gases in production wells and pipelines. It controls the flow rate by creating a pressure drop across the choke, allowing for the separation of fluids and gases with different properties.<br/><br/>We specialize in providing detailed design solutions for choke separators, optimizing their performance, reliability, and safety. Our experienced engineers utilize advanced design software and adhere to industry codes and standards such as ASME, API, and ANSI to develop precise and efficient designs tailored to your project requirements.<br/><br/>From conceptualization to fabrication, our design process focuses on enhancing operational efficiency, minimizing environmental impact, and maximizing safety. We deliver innovative and reliable choke separator designs that optimize crude oil refinement processes and drive success in the oil and gas industry.",
  },
  {
    image: "/images/oil-diverter.webp",
    title: "Oil Diverted Manifold",
    path: "oil-diverter-manifold",
    info: "An Oil Diverted Manifold is a critical component in the oil and gas industry used for directing and controlling the flow of crude oil within a processing facility. It serves to efficiently divert oil streams to various processing units, such as separators, heaters, and storage tanks, ensuring optimal operation and maximizing production efficiency.<br/><br/>We specialize in providing detailed design solutions for Oil Diverted Manifolds, optimizing their performance, reliability, and safety. Our experienced engineers utilize advanced design software and adhere to industry codes and standards such as ASME, API, and ANSI to develop precise and efficient designs tailored to your project requirements.<br/><br/>From conceptualization to fabrication, our design process focuses on enhancing operational efficiency, minimizing environmental impact, and maximizing safety. We deliver innovative and reliable Oil Diverted Manifold designs that optimize crude oil refinement processes and drive success in the oil and gas industry.",
  },
  {
    image: "/images/kill-manifold.webp",
    title: "Kill Manifold",
    path: "kill-manifold",
    info: "A Kill Manifold is a critical component in the oil and gas industry used to control well pressure during drilling operations, particularly in emergency situations such as blowouts. Its primary function is to safely divert or <strong>kill</strong> the flow of hydrocarbons from the wellbore, preventing uncontrolled releases of oil, gas, and other fluids.<br/><br/>We specialize in providing detailed design solutions for Kill Manifolds, prioritizing safety, reliability, and efficiency. Our experienced engineers utilize advanced design software and adhere to industry codes and standards such as ASME, API, and ANSI to develop precise and robust designs tailored to your project requirements.<br/><br/>From conceptualization to fabrication, our design process focuses on enhancing operational safety, minimizing environmental impact, and ensuring compliance with regulatory requirements. We deliver innovative and reliable Kill Manifold designs that optimize crude oil refinement processes and enhance safety in the oil and gas industry.",
  },
  {
    image: "/images/surge-tank.webp",
    title: "Surge Tank",
    path: "surge-tank",
    info: "A Surge Tank is a vital component in the oil and gas industry used to regulate fluid flow and pressure within a processing system. It serves to absorb sudden changes in flow rates or pressure fluctuations, ensuring smooth and uninterrupted operation of downstream equipment.<br/><br/>We specialize in providing detailed design solutions for Surge Tanks, optimizing their performance, reliability, and efficiency. Our experienced engineers utilize advanced design software and adhere to industry codes and standards such as ASME, API, and ANSI to develop precise and robust designs tailored to your project requirements.<br/><br/>From conceptualization to fabrication, our design process focuses on enhancing operational efficiency, minimizing environmental impact, and maximizing safety. We deliver innovative and reliable Surge Tank designs that optimize crude oil refinement processes and drive success in the oil and gas industry.",
  },
  {
    image: "/images/filter.webp",
    title: "Filter Separator",
    path: "filter-separator",
    info: "A Filter Separator is a critical component used in the oil and gas industry to remove solid particles and contaminants from crude oil and natural gas streams. It operates by passing the fluid through a series of filters or coalescers, separating out impurities and improving the quality of the product.<br/><br/>We specialize in providing detailed design solutions for Filter Separators, optimizing their performance, reliability, and efficiency. Our experienced engineers utilize advanced design software and adhere to industry codes and standards such as ASME, API, and ANSI to develop precise and robust designs tailored to your project requirements.<br/><br/>From conceptualization to fabrication, our design process focuses on enhancing operational efficiency, minimizing environmental impact, and maximizing safety. We deliver innovative and reliable Filter Separator designs that optimize crude oil refinement processes and drive success in the oil and gas industry.",
  },
  {
    image: "/images/gas-diverter.webp",
    title: "Gas Diverted Manifold",
    path: "gas-diverter-manifold",
    info: "A Gas Diverted Manifold is a crucial component in the oil and gas industry used to control the flow of gas within a processing facility. It serves to efficiently divert gas streams to various processing units or storage facilities, ensuring optimal operation and maximizing production efficiency.<br/><br/>We specialize in providing detailed design solutions for Gas Diverted Manifolds, optimizing their performance, reliability, and safety. Our experienced engineers utilize advanced design software and adhere to industry codes and standards such as ASME, API, and ANSI to develop precise and efficient designs tailored to your project requirements.<br/><br/>From conceptualization to fabrication, our design process focuses on enhancing operational efficiency, minimizing environmental impact, and maximizing safety. We deliver innovative and reliable Gas Diverted Manifold designs that optimize crude oil refinement processes and drive success in the oil and gas industry.",
  },
  {
    image: "/images/plug-catcher.webp",
    title: "Plug Catcher",
    path: "plug-catcher",
    info: "A Plug Catcher is an essential component in the oil and gas industry used to capture and remove debris, solid particles, and <strong>plugs</strong> from the flow of crude oil or gas. It helps to prevent blockages and damage to downstream equipment, ensuring smooth and uninterrupted operation of the processing system.<br/><br/>We specialize in providing detailed design solutions for Plug Catchers, optimizing their performance, reliability, and efficiency. Our experienced engineers utilize advanced design software and adhere to industry codes and standards such as ASME, API, and ANSI to develop precise and robust designs tailored to your project requirements.<br/><br/>From conceptualization to fabrication, our design process focuses on enhancing operational efficiency, minimizing environmental impact, and maximizing safety. We deliver innovative and reliable Plug Catcher designs that optimize crude oil refinement processes and drive success in the oil and gas industry.",
  },
  {
    image: "/images/production-manifold.webp",
    title: "Production Manifold",
    path: "production-manifold",
    info: "A Production Manifold is a crucial component in the oil and gas industry used to control the flow of fluids from multiple wells to a central processing facility. It serves as a distribution hub, directing crude oil and natural gas streams to various processing units or storage facilities for further refinement or distribution.<br/><br/>We specialize in providing detailed design solutions for Production Manifolds, optimizing their performance, reliability, and efficiency. Our experienced engineers utilize advanced design software and adhere to industry codes and standards such as ASME, API, and ANSI to develop precise and efficient designs tailored to your project requirements.<br/><br/>From conceptualization to fabrication, our design process focuses on enhancing operational efficiency, minimizing environmental impact, and maximizing safety. We deliver innovative and reliable Production Manifold designs that optimize crude oil refinement processes and drive success in the oil and gas industry.",
  },
  {
    image: "/images/natural-gas-meter.webp",
    title: "Natural Gas Metering Skid",
    path: "natural-gas-meter-skid",
    info: "A Natural Gas Metering Skid is a critical component in the oil and gas industry used to accurately measure the flow rate and quantity of natural gas extracted from production wells. It plays a vital role in monitoring production levels, optimizing resource allocation, and ensuring compliance with regulatory requirements.<br/><br/>We specialize in providing detailed design solutions for Natural Gas Metering Skids, optimizing their performance, accuracy, and reliability. Our experienced engineers utilize advanced design software and adhere to industry codes and standards such as ASME, API, and ANSI to develop precise and efficient designs tailored to your project requirements.<br/><br/>From conceptualization to fabrication, our design process focuses on enhancing measurement accuracy, minimizing environmental impact, and maximizing safety. We deliver innovative and reliable Natural Gas Metering Skid designs that optimize crude oil refinement processes and drive success in the oil and gas industry.",
  },
  {
    image: "/images/wellhead-christmas-tree.webp",
    title: "Wellhead Christmas Tree",
    path: "wellhead-christmas-tree",
    info: "A Wellhead Christmas Tree is a vital component in the oil and gas industry, serving as the interface between the wellbore and the surface equipment. It consists of a series of valves, fittings, and gauges arranged in a tree-like structure, hence the name, to control the flow of fluids during well operations.<br/><br/>We specialize in providing detailed design solutions for Wellhead Christmas Trees, ensuring their functionality, reliability, and safety. Our experienced engineers utilize advanced design software and adhere to industry codes and standards such as API 6A and API 17D to develop precise and efficient designs tailored to your project requirements.<br/><br/>From conceptualization to fabrication, our design process focuses on optimizing the performance of each component, maximizing operational efficiency, and ensuring compliance with regulatory requirements. We deliver innovative and reliable Wellhead Christmas Tree designs that safeguard oil and gas wells and drive success in the industry.",
  },
];
