export const profile = {
  name: "Kushal A",
  tagline: "CSBS Student | Aspiring Software & Fintech Professional",
  about:
    "Motivated Computer Science and Business Systems student with a strong interest in financial markets, algorithmic trading, and scalable tech solutions. Experienced in building real-world projects combining technology and business logic. Adept at problem-solving, teamwork, and rapid learning, with a focus on delivering efficient and impactful solutions.",
  email: "kushaldevang2005@gmail.com",
  linkedin: "linkedin.com/in/kushaldevang",
  linkedinUrl: "https://linkedin.com/in/kushaldevang",
};

export type ExperienceItem = {
  role: string;
  org: string;
  type: string;
  period: string;
  location: string;
  bullets?: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "R&D Intern",
    org: "IISc Aerospace Engineering",
    type: "Full-time",
    period: "Jul 2026 – Present",
    location: "Bengaluru, Karnataka, India",
  },
  {
    role: "Financial Advisor Intern",
    org: "BB Advisory",
    type: "Internship · ~2 months",
    period: "Remote",
    location: "Remote",
    bullets: [
      "Analyzed financial markets and provided investment insights for clients",
      "Assisted in portfolio planning and wealth management strategies",
      "Gained hands-on experience in equity markets and risk assessment",
    ],
  },
];

export type ProjectItem = {
  title: string;
  period: string;
  description: string[];
};

export const projects: ProjectItem[] = [
  {
    title: "Algorithmic Trading System",
    period: "Jan 2026 – Mar 2026",
    description: [
      "Developed a system to analyze stocks using fundamentals, technical indicators, and news.",
      "Designed logic to help users invest without prior market knowledge.",
      "Focused on automation of decision-making for smarter investments.",
    ],
  },
  {
    title: "SAVE (Smart Ambulance Velocity Enhancement)",
    period: "Mar 2026 – Present",
    description: [
      "Built a smart traffic system to reduce ambulance delays in urban areas.",
      "Designed route optimization and automated traffic signal control.",
      "Integrated hospital alert system for faster emergency response.",
    ],
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  score: string;
};

export const education: EducationItem[] = [
  {
    degree: "B.E. in Computer Science and Business Systems",
    school: "Dr. Ambedkar Institute of Technology, Bangalore",
    period: "2023 – Present",
    score: "8.16 GPA",
  },
  {
    degree: "Pre-University (PUC)",
    school: "Dayananda Sagar PU College",
    period: "2021 – 2023",
    score: "93%",
  },
  {
    degree: "SSLC (10th Grade)",
    school: "Dayananda Sagar International School",
    period: "2021",
    score: "78%",
  },
];

export const skillGroups: { label: string; skills: string[] }[] = [
  {
    label: "Programming & Data",
    skills: ["Java", "JDBC", "SQL", "MySQL", "HTML", "CSS"],
  },
  {
    label: "Finance & Trading",
    skills: [
      "Stock Analysis",
      "Algorithmic Trading",
      "Fundamental Analysis",
      "Trading Platforms",
    ],
  },
  {
    label: "Design & Tools",
    skills: ["Canva", "Figma", "UI/UX Design", "Excel", "Video Editing", "Marketing"],
  },
];

export const achievements = [
  "2nd Prize — National Level Tech Exhibition (Smart Kevlar Vest)",
  "Selected for Zero1 by Zerodha Fest (Golden Pass)",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
