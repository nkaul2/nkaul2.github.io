export interface WorkEntry {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  logo: string;
}

export const workHistory: WorkEntry[] = [
  {
    title: "Software Development Engineer",
    company: "Amazon",
    period: "June 2020 – Present",
    location: "Seattle, Washington",
    bullets: [
      "Software Engineer on the Customer Experience team — Amazon Foresight (Your Account, Contact Us, Help Search).",
    ],
    logo: "/images/Amazon.png",
  },
  {
    title: "Undergraduate Researcher",
    company: "MXR Lab — NC State",
    period: "January 2019 – May 2020",
    location: "Raleigh, North Carolina",
    bullets: [
      "Worked with VR products (Oculus Rift, Oculus Go) to create immersive experiences, alongside startup Logic Grip.",
      "Implemented body haptics in VR using Arduino boards, vibration motors, and C# in Unity; authored an SDK for the lab.",
      "Presented at the NC State Spring Undergraduate Research Symposium and the East Coast Games Conference.",
    ],
    logo: "/images/MXR.png",
  },
  {
    title: "Clinical Operations & Biometrics Intern",
    company: "Roche",
    period: "May 2019 – August 2019",
    location: "Pleasanton, California",
    bullets: [
      "Analyzed and visualized Roche Diagnostics data; built Tableau reports improving efficiency across Virology and Blood Screening.",
      "Used Python, R, and SAS to clean large clinical-trial datasets and published interactive maps/dashboards to Tableau Server.",
      "Compared RShiny, RMarkdown, and Tableau usability, establishing a framework for future Tableau projects.",
    ],
    logo: "/images/Roche.png",
  },
  {
    title: "Software Engineering Intern",
    company: "Bridgera",
    period: "August 2019 – November 2019",
    location: "Raleigh, North Carolina",
    bullets: [
      "Built a data-processing pipeline handling ingestion from disparate sources using Apache Hive, Presto, Flask, SQLAlchemy, ReactJS, and Hadoop.",
      "Used Apache Presto as the main SQL query engine for populating the data lake.",
      "Collaborated with a global team including weekly syncs with the software development team in India.",
    ],
    logo: "/images/Bridgera.png",
  },
];
