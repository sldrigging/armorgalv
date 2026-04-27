export interface Advantage {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  secondImage?: string;
  isCollage?: boolean;
  collageImages?: string[];
  maxWidth?: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  points?: string[];
  image: string;
  secondImage?: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface ExampleImage {
  tn: string;
  full: string;
}

export interface AboutItem {
  id: string;
  title: string;
  subtitle?: string;
  points?: string[];
  image?: string;
  secondImage?: string;
  isCollage?: boolean;
  collageImages?: string[];
  exampleImages?: ExampleImage[];
  belowTextImage?: string;
}

export interface ApprovalItem {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  points?: string[];
  leftColumn?: { heading: string; items: string[] };
  rightColumn?: { heading: string; items: string[] };
  image?: string;
}

export const advantages: Advantage[] = [
  {
    id: "corrosionResistance",
    title: "Corrosion Resistance",
    subtitle: "Outperforms Hot Dip Galvanizing",
    description:
      "ArmorGalv\u00AE provides a high level of corrosion resistance that exceeds performance of traditional hot dip galvanizing per ASTM A-123 and A-153. After 5,000 hours of salt fog testing to ASTM B117 standards, HDG bolts were virtually unrecognizable, while bolts processed with ArmorGalv\u00AE were largely unchanged.",
    image: "corrosionResistance",
  },
  {
    id: "wearResistance",
    title: "Greater Wear Resistance",
    subtitle: "Rockwell C Hardness of 58",
    description:
      "The Gamma layer of ArmorGalv\u00AE has a Rockwell C hardness of 58. This serves as a protective wear layer and extends the life of the part where abrasion is a factor.",
    image: "wearResistance",
  },
  {
    id: "sacrificialProtection",
    title: "Sacrificial Protection",
    subtitle: "Self-Healing Zinc Layers",
    description:
      "Similar to a hot dip galvanized surface, the layers of zinc protection on surfaces finished with ArmorGalv\u00AE serve as sacrificial layers that protect the base metal even if the surface is scratched.",
    image: "sacrificialProtection",
  },
  {
    id: "surfaceProtection",
    title: "100% Surface Protection",
    subtitle: "Zinc Vapor Reaches Every Surface",
    description:
      "Because the process uses zinc vapor (gas), the zinc reaches and coats every surface that a gas touches; including internal threads, deep recesses, and hollow tubes.",
    image: "surfaceProtection",
    maxWidth: "345px",
  },
  {
    id: "thicknessControl",
    title: "Precise Thickness Control",
    subtitle: "20 to 120 Microns",
    description:
      "ArmorGalv\u00AE can be precisely controlled in thicknesses from 20 to 120 microns and tolerance of +/- 10% to 15%. This is particularly helpful for fasteners.",
    image: "thicknessControl",
  },
  {
    id: "antiGalling",
    title: "Anti-Galling",
    subtitle: "Properties Similar to Cadmium",
    description:
      "ArmorGalv\u00AE has anti-galling properties similar to cadmium that prevents nuts and bolts from seizing even in harsh marine environments.",
    image: "antiGalling",
  },
  {
    id: "hydrogenEmbrittlement",
    title: "Zero Hydrogen Embrittlement",
    subtitle: "Safe for High-Strength Alloys",
    description:
      "Unlike electro-plating and hot dip galvanizing that require acid-cleaning processes, the ArmorGalv\u00AE process has no risk of hydrogen embrittlement. This makes it safe for high-strength alloy steels.",
    image: "hydrogenEmbrittlement",
  },
  {
    id: "lowerTemperature",
    title: "Lower Process Temperature",
    subtitle: "700\u00B0F vs 850\u00B0F for HDG",
    description:
      "For most steel parts, ArmorGalv\u00AE is applied at roughly 700\u00B0F (380\u00B0C) vs hot dip galvanizing at 850\u00B0F (450\u00B0C). This helps ensure that mechanical properties and fatigue strength are preserved. ArmorGalv\u00AE can be applied at a temperature range of 590\u00B0F to 1020\u00B0F (310\u00B0C to 550\u00B0C).",
    image: "lowerTemperature",
    maxWidth: "400px",
  },
  {
    id: "highTemperature",
    title: "High Operating Temperature",
    subtitle: "Up to 1200\u00B0F (650\u00B0C)",
    description:
      "Once applied, ArmorGalv\u00AE can continually operate at temperatures as high as 1200\u00B0F (650\u00B0C).",
    image: "highTemperature",
    maxWidth: "400px",
  },
  {
    id: "topcoats",
    title: "Superior Base for Topcoats",
    subtitle: "Excellent Mechanical Adhesion",
    description:
      "ArmorGalv\u00AE provides a naturally rough and porous surface that serves as an excellent base for mechanical adhesion of liquid coatings and powder coating.",
    image: "topcoats",
  },
  {
    id: "stainlessSteel",
    title: "Can Be Applied To Stainless Steel",
    subtitle: "Stops Thread Galling",
    description:
      "Using ArmorGalv\u00AE on stainless steel mainly helps stop thread galling, offers better corrosion resistance in tough marine and industrial settings, and increases surface hardness.",
    image: "stainlessSteel",
  },
  {
    id: "workability",
    title: "Workability",
    subtitle: "Weld, Crimp, Bend Without Damage",
    description:
      "Items coated with ArmorGalv\u00AE can be welded upon, is spark-free, chip proof, and can be crimped and bent without damage to the coating.",
    image: "workability",
    isCollage: true,
    collageImages: ["workability1", "workability2", "workability3"],
  },
  {
    id: "ecoFriendly",
    title: "ECO-Friendly",
    subtitle: "Virtually Zero Emissions",
    description:
      "ArmorGalv\u00AE process produces virtually ZERO emissions and uses significantly less water and hazardous chemicals than metal plating and hot dip galvanizing.",
    image: "ecoFriendly",
  },
  {
    id: "lifecycleSavings",
    title: "Lifecycle Savings",
    subtitle: "More Economical Over Time",
    description:
      "ArmorGalv\u00AE, though slightly more expensive than hot dip galvanizing and electro-plating, proves to be more economical over time due to longer service life of the coated parts.",
    image: "lifecycleSavings",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "step1",
    title: "Surface Preparation",
    subtitle: "Abrasive Blasting",
    description:
      "Parts are abrasive blasted, cleaned and dried to ensure optimal surface adhesion.",
    image: "tumbleBlasted",
  },
  {
    id: "step2",
    title: "Chamber Loading",
    subtitle: "Precision Zinc Measurement",
    description:
      "Parts are placed into cylindrical chamber along with proprietary zinc powder mixture. The volume of the zinc mixture is precisely calculated based on the total surface area of the parts. This results in excellent thickness control and near 100% usage of the zinc powder.",
    image: "heatingOven",
  },
  {
    id: "step3",
    title: "Heating Process",
    subtitle: "Controlled Oven Environment",
    description:
      "Cylindrical chamber is placed into a heating oven where controlled temperatures activate the zinc vapor diffusion process.",
    image: "cylindricalChamber",
  },
  {
    id: "step4",
    title: "Rotary Treatment",
    subtitle: "Complete & Even Coverage",
    description:
      "Inside the oven, the cylindrical chamber turns at less than 2 RPM to ensure surfaces are completely and evenly treated. Typical heating process time is around 3 hours.",
    image: "abrasiveBlasting",
  },
];

export const stats: Stat[] = [
  {
    id: "saltFog",
    value: 5000,
    suffix: "+",
    label: "Hours Salt Fog Tested",
  },
  {
    id: "hardness",
    value: 58,
    suffix: "",
    label: "Rockwell C Hardness",
  },
  {
    id: "temperature",
    value: 1200,
    suffix: "\u00B0F",
    label: "Max Operating Temp",
  },
];

export const aboutItems: AboutItem[] = [
  {
    id: "whatIsTDG",
    title: "What is Thermal Diffusion Galvanizing?",
    points: [
      "Thermal Diffusion Galvanizing is the process that diffuses zinc into the surface of steel to form a series of zinc-iron alloy layers. These layers are highly resistant to abrasion and corrosion.",
      "The process involves placing clean steel parts into a closed drum with zinc dust that is heated to high temperatures for a prescribed time.",
      "This process was invented around 1900 by British metallurgist Sherard Osborn Cowper-Coles and was named Sherardizing.",
    ],
    image: "tdgProcess",
    secondImage: "tdgProcess2",
    belowTextImage: "sherard",
  },
  {
    id: "armorGalvProcess",
    title: "ArmorGalv\u00AE Process\u2026Perfected!",
    points: [
      "ArmorGalv\u00AE is the 21st century evolution of Thermal Diffusion technology. The process is highly controllable by computer, consistently repeatable and requires minimal labor and floor space.",
      "The main advancement of ArmorGalv\u00AE is contained in the proprietary zinc powder mixture that has catalysts or accelerators that cause sublimation \u2014 the word used to describe how a solid transforms directly to a gas at higher temperatures.",
      "In the ArmorGalv\u00AE process, zinc dust sublimates into a gas at lower temperatures that allows for vapor diffusion into the base metal.",
      "Contrarily, the Sherardizing process requires the addition of sand to manage a sublimation process that requires higher temperatures and produces less consistent thicknesses.",
    ],
    image: "armorGalvProcess",
  },
  {
    id: "examples",
    title: "ArmorGalv\u00AE Examples",
    isCollage: true,
    collageImages: ["examples1", "examples2", "examples3", "examples4"],
    exampleImages: [
      { tn: "/images/armorgalv-examples/TN/Base-Flange-ArmorGalv-Example-small.jpg", full: "/images/armorgalv-examples/Full/Base-Flange-ArmorGalv-Example.jpg" },
      { tn: "/images/armorgalv-examples/TN/Bolt-ArmorGalv-Example-small.jpg", full: "/images/armorgalv-examples/Full/Bolt-ArmorGalv-Example.jpg" },
      { tn: "/images/armorgalv-examples/TN/Connector-ArmorGalv-Example-small.jpg", full: "/images/armorgalv-examples/Full/Connector-ArmorGalv-Example.jpg" },
      { tn: "/images/armorgalv-examples/TN/Edge-Protector-ArmorGalv-Example-small.jpg", full: "/images/armorgalv-examples/Full/Edge-Protector-ArmorGalv-Example.jpg" },
      { tn: "/images/armorgalv-examples/TN/Gas-Valve-ArmorGalv-Example-small.jpg", full: "/images/armorgalv-examples/Full/Gas-Valve-ArmorGalv-Example.jpg" },
      { tn: "/images/armorgalv-examples/TN/Internal-Threaded-ArmorGalv-Example-small.jpg", full: "/images/armorgalv-examples/Full/Internal-Threaded-ArmorGalv-Example.jpg" },
      { tn: "/images/armorgalv-examples/TN/Lag-Screw-ArmorGalv-Example-small.png", full: "/images/armorgalv-examples/Full/Lag-Screw-ArmorGalv-Example.png" },
      { tn: "/images/armorgalv-examples/TN/Lifting-Chain-Fittings-ArmorGalv-Example-small.jpg", full: "/images/armorgalv-examples/Full/Lifting-Chain-Fittings-ArmorGalv-Example.jpg" },
      { tn: "/images/armorgalv-examples/TN/Lifting-Fittings-ArmorGalv-Example-small.png", full: "/images/armorgalv-examples/Full/Lifting-Fittings-ArmorGalv-Example.png" },
      { tn: "/images/armorgalv-examples/TN/Nut-and-Bolt-ArmorGalv-Example-small.jpg", full: "/images/armorgalv-examples/Full/Nut-and-Bolt-ArmorGalv-Example.jpg" },
      { tn: "/images/armorgalv-examples/TN/Post-Jack-ArmorGalv-Example-small.png", full: "/images/armorgalv-examples/Full/Post-Jack-ArmorGalv-Example.png" },
      { tn: "/images/armorgalv-examples/TN/Railroad-Components-ArmorGalv-Example-small.jpg", full: "/images/armorgalv-examples/Full/Railroad-Components-ArmorGalv-Example.jpg" },
      { tn: "/images/armorgalv-examples/TN/Rebar-ArmorGalv-Example-small.jpg", full: "/images/armorgalv-examples/Full/Rebar-ArmorGalv-Example.jpg" },
      { tn: "/images/armorgalv-examples/TN/Screw-Jack-ArmorGalv-Example-small.png", full: "/images/armorgalv-examples/Full/Screw-Jack-ArmorGalv-Example.png" },
      { tn: "/images/armorgalv-examples/TN/Sleeve-ArmorGalv-Example-small.jpg", full: "/images/armorgalv-examples/Full/Sleeve-ArmorGalv-Example.jpg" },
      { tn: "/images/armorgalv-examples/TN/Slot-Inserts-ArmorGalv-Example-small.jpg", full: "/images/armorgalv-examples/Full/Slot-Inserts-ArmorGalv-Example.jpg" },
      { tn: "/images/armorgalv-examples/TN/Spring-Clamp-ArmorGalv-Example-small.jpg", full: "/images/armorgalv-examples/Full/Spring-Clamp-ArmorGalv-Example.jpg" },
      { tn: "/images/armorgalv-examples/TN/Threaded-Components-ArmorGalv-Example-small.jpg", full: "/images/armorgalv-examples/Full/Threaded-Components-ArmorGalv-Example.jpg" },
      { tn: "/images/armorgalv-examples/TN/Threaded-Part-ArmorGalv-Example-small.jpg", full: "/images/armorgalv-examples/Full/Threaded-Part-ArmorGalv-Example.jpg" },
      { tn: "/images/armorgalv-examples/TN/Threaded-Parts-ArmorGalv-Example-small.jpg", full: "/images/armorgalv-examples/Full/Threaded-Parts-ArmorGalv-Example.jpg" },
      { tn: "/images/armorgalv-examples/TN/Threaded-Pipe-ArmorGalv-Example-small.jpg", full: "/images/armorgalv-examples/Full/Threaded-Pipe-ArmorGalv-Example.jpg" },
    ],
  },
];

export const approvalItems: ApprovalItem[] = [
  {
    id: "standards",
    title: "Standards",
    subtitle: "Industry Certifications",
    leftColumn: {
      heading: "ASTM Standards Met",
      items: [
        "ASTM A-123",
        "ASTM A-153",
        "ASTM A-1059",
      ],
    },
    rightColumn: {
      heading: "Additional Compliance",
      items: [
        "U2S NACE TM0177 specification for oil well applications",
      ],
    },
  },
  {
    id: "governmentAgencies",
    title: "Government Agencies",
    subtitle: "Approved & Trusted By",
    points: [
      "U.S. Department of War",
      "Israeli Defense Force",
      "Florida Department of Transportation",
      "Virginia Department of Transportation",
      "New York City Transit Department",
      "BART San Francisco Transit Department",
    ],
  },
];

export const serviceProviders = [
  {
    category: "Service Providers",
    providers: [
      {
        state: "Texas",
        company: "Atomic Alloys",
        location: "Houston, Texas",
        website: "Atomicalloys.com",
        phone: "(713) 389-0630",
      },
      {
        state: "Illinois",
        company: "Chem-Plate Industries",
        location: "Elk Grove, Illinois",
        website: "Chemplateindustries.com",
        phone: "(847) 640-1600",
      },
    ],
  },
  {
    category: "OEM Licensees",
    note: "Generally will not provide outside services.",
    providers: [
      {
        state: "Texas",
        company: "Hubbell",
        location: "Houston, Texas",
        website: "Atomicalloys.com",
        phone: "(713) 389-0630",
      },
      {
        state: "Illinois",
        company: "Chem-Plate Industries",
        location: "Elk Grove, Illinois",
        website: "Chemplateindustries.com",
        phone: "(847) 640-1600",
      },
    ],
  },
];

export const contactInfo = {
  email: "moshe@armorgalv.com",
  phone: "xxx-888-8888",
};

export interface NavItem {
  id: string;
  label: string;
  href?: string;
  children?: { id: string; label: string }[];
}

export const navigation: NavItem[] = [
  {
    id: "about-dropdown",
    label: "About ArmorGalv®",
    children: [
      { id: "whatistdg", label: "What is Thermal Diffusion Galvanizing?" },
      { id: "advantages", label: "Advantages" },
      { id: "approvals", label: "Approvals" },
      { id: "examples", label: "Examples" },
      { id: "process", label: "Application Process" },
    ],
  },
  { id: "tech-info", label: "Technical Info", href: "/technical-info" },
  { id: "contact", label: "Service Providers" },
  { id: "footer", label: "Contact" },
];
