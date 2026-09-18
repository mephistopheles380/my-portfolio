export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  technologies: string[];
  description: string;
  keyPoints: string[];
  githubUrl?: string;
  liveUrl?: string;
  isFeatured: boolean;
  isPlaceholder?: boolean;
  badge?: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level?: string; // e.g. "Core", "Applied", "Working Knowledge" - NO fake percentages
    highlight?: boolean;
    description?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreType: string;
  details?: string;
}

export interface JourneyMilestone {
  step: string;
  title: string;
  phase: string;
  description: string;
  status: 'foundation' | 'active' | 'evolving';
  focus: string[];
}

export interface WorkPillar {
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  accentColor: string;
  bullets: string[];
}

export interface AutomationNode {
  id: string;
  label: string;
  sublabel: string;
  icon: string;
  description: string;
  color: string;
}

export const PERSONAL_INFO = {
  name: "Pranav Kumar",
  title: "Data Analyst & Developer",
  identity: "Data Analyst | Python Developer | Cybersecurity Enthusiast",
  eyebrow: "DATA • DEVELOPMENT • CYBERSECURITY",
  headline: "Hi, I'm Pranav Kumar.",
  secondaryHeading: "Data Analyst & Developer",
  heroDescription:
    "I build data-driven solutions with Python, explore insights through analytics, and bring a cybersecurity mindset to technology.",
  alternativeHeroDescription:
    "Turning data into insights and ideas into intelligent solutions.",
  status: "Open to opportunities",
  location: "Kottayam, Kerala, India",
  phone: "+91 7306893083",
  phoneTel: "tel:+917306893083",
  whatsappNumber: "+91 7306893083",
  whatsappUrl:
    "https://wa.me/917306893083?text=Hello%20Pranav,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.",
  email: "pranavskumarvarakukalayil@gmail.com",
  emailMailto: "mailto:pranavskumarvarakukalayil@gmail.com",
  github: "https://github.com/mephistopheles380",
  linkedin: "https://linkedin.com/in/pranav-s-kumar6",
  resumePath: "/Pranav_S_Kumar_Resume.pdf",
  resumeFileName: "Pranav_S_Kumar_Resume.pdf",
};

export const WORK_PILLARS: WorkPillar[] = [
  {
    number: "01",
    title: "DATA",
    tagline: "Pattern Discovery & Insight Engineering",
    description:
      "Exploring datasets, finding patterns and turning raw information into useful insights that inform decision-making.",
    icon: "Database",
    accentColor: "from-cyan-500 to-blue-500",
    bullets: [
      "Exploratory Data Analysis",
      "Data Cleaning & Structuring",
      "Pattern & Trend Identification",
      "Insightful Visual Reporting",
    ],
  },
  {
    number: "02",
    title: "DEVELOPMENT",
    tagline: "Python Applications & Intelligent Automation",
    description:
      "Building practical applications, computer vision pipelines, and resilient automation scripts using Python.",
    icon: "Code2",
    accentColor: "from-blue-500 to-indigo-500",
    bullets: [
      "Python Scripting & Logic",
      "Computer Vision & OpenCV",
      "Pipeline Scripting & Workflows",
      "Robust Testing & Quality Validation",
    ],
  },
  {
    number: "03",
    title: "SECURITY",
    tagline: "Resilient Systems & Threat Awareness",
    description:
      "Applying a security-first mindset to systems, networks and applications from conception through evaluation.",
    icon: "ShieldCheck",
    accentColor: "from-indigo-500 to-purple-500",
    bullets: [
      "Network Traffic Analysis",
      "Vulnerability Assessment Mindset",
      "Incident Response Fundamentals",
      "Defensive Design Principles",
    ],
  },
];

export const ABOUT_DATA = {
  title: "About Me",
  lead: "Computer Science & Cyber Security Engineer transitioning toward Data Analytics and Data Science.",
  paragraphs: [
    "I am currently completing my B.Tech in Computer Science & Cyber Security at University College of Engineering, Thodupuzha. My technical path began with software fundamentals and secure infrastructure, which naturally evolved into a deep fascination with how data can be extracted, modeled, and transformed into actionable intelligence.",
    "With a strong core in Python development, I focus on analyzing datasets, automating repetitive engineering workflows, and experimenting with computer vision and machine learning fundamentals. I apply a cybersecurity mindset to data handling—emphasizing integrity, structure, and precision.",
    "Driven by curiosity and continuous learning, I am eager to apply analytical thinking and technical problem-solving to real-world data engineering, analytics, and software initiatives.",
  ],
  traits: [
    { label: "Core Foundation", value: "Computer Science & Cyber Security" },
    { label: "Primary Language", value: "Python" },
    { label: "Key Interest", value: "Data Analytics & ML Fundamentals" },
    { label: "Engineering Approach", value: "Security-First & Evidence-Driven" },
  ],
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science & Cyber Security",
    institution: "University College of Engineering",
    location: "Thodupuzha, Kerala",
    period: "2022 - Present",
    score: "6.72",
    scoreType: "CGPA",
    details: "Expected Graduation: 2026. Academic foundation in algorithms, network defense, system security, and data structures.",
  },
  {
    degree: "Higher Secondary Education (Plus Two)",
    institution: "St. Aloysius HSS",
    location: "Athirampuzha, Kerala",
    period: "2020 - 2022",
    score: "90.75%",
    scoreType: "Percentage",
    details: "Distinction in Science & Mathematics stream.",
  },
  {
    degree: "SSLC (Secondary School Leaving Certificate)",
    institution: "St. George's VHSS",
    location: "Kaipuzha, Kerala",
    period: "2018 - 2020",
    score: "98.89%",
    scoreType: "Percentage",
    details: "Excellence in foundational academic curriculum.",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    category: "Programming",
    iconName: "Terminal",
    description: "Core scripting, object-oriented logic, and algorithmic development.",
    skills: [
      {
        name: "Python",
        level: "Core Strength",
        highlight: true,
        description: "Scripting, data handling, logic implementation, automation & library integration.",
      },
    ],
  },
  {
    id: "data-analytics",
    category: "Data / Analytics",
    iconName: "BarChart3",
    description: "Extracting insights, parsing metrics, and visual communication.",
    skills: [
      {
        name: "Data Analysis",
        level: "Applied",
        highlight: true,
        description: "Exploratory analysis, identifying anomalies, metrics extraction.",
      },
      {
        name: "Python-based Data Processing",
        level: "Applied",
        highlight: true,
        description: "Transforming, filtering, and organizing datasets for evaluation.",
      },
      {
        name: "Data Visualization",
        level: "Applied",
        highlight: false,
        description: "Communicating key quantitative relationships through structured visuals.",
      },
    ],
  },
  {
    id: "cybersecurity",
    category: "Cybersecurity",
    iconName: "Shield",
    description: "Defensive tools, traffic diagnostics, and security auditing.",
    skills: [
      { name: "Linux", level: "Operating System", highlight: true, description: "CLI navigation, shell environments, administration basics." },
      { name: "Wireshark", level: "Tool", highlight: true, description: "Deep packet inspection and network protocol analysis." },
      { name: "Nmap", level: "Tool", highlight: false, description: "Network discovery, port auditing, and security scanning." },
      { name: "Burp Suite", level: "Tool", highlight: false, description: "Web application vulnerability testing and proxy routing." },
      { name: "Network Security", level: "Discipline", highlight: false, description: "Protocols, firewalls, and defense architectures." },
      { name: "Incident Response", level: "Discipline", highlight: false, description: "Threat triage, systematic investigation, and containment workflows." },
    ],
  },
  {
    id: "dev-ai",
    category: "Development / AI",
    iconName: "Cpu",
    description: "Computer vision implementations and intelligent system modeling.",
    skills: [
      {
        name: "Python Development",
        level: "Specialization",
        highlight: true,
        description: "Building end-to-end modules, structured workflows, and utility tools.",
      },
      {
        name: "OpenCV",
        level: "Applied",
        highlight: true,
        description: "Image preprocessing, facial landmarking, and frame manipulation.",
      },
      {
        name: "Computer Vision",
        level: "Domain",
        highlight: true,
        description: "Facial recognition models, partial occlusion reconstruction, feature extraction.",
      },
      {
        name: "AI / Machine Learning Fundamentals",
        level: "Foundational",
        highlight: false,
        description: "Model training lifecycle, classification concepts, and evaluation metrics.",
      },
    ],
  },
  {
    id: "professional",
    category: "Professional & Soft Skills",
    iconName: "Users",
    description: "Collaboration, analytical rigor, and project execution.",
    skills: [
      { name: "Analytical Thinking", level: "Core", highlight: true, description: "Structured problem breakdown and root-cause analysis." },
      { name: "Team Collaboration", level: "Practice", highlight: false, description: "Cooperative development, code reviews, and group delivery." },
      { name: "Technical Documentation", level: "Practice", highlight: false, description: "Comprehensive test logs, specifications, and architecture notes." },
      { name: "Research", level: "Practice", highlight: false, description: "Deep diving into technical papers, tools, and best practices." },
      { name: "Fast Learning", level: "Core", highlight: true, description: "Rapid assimilation of modern frameworks and toolsets." },
    ],
  },
  {
    id: "languages",
    category: "Languages",
    iconName: "Languages",
    description: "Multilingual communication proficiency.",
    skills: [
      { name: "English", level: "Professional Working Proficiency", highlight: false },
      { name: "Malayalam", level: "Native / Bilingual", highlight: false },
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "masked-face-recognition",
    title: "Masked Face Recognition and Reconstruction System",
    role: "Developer",
    technologies: ["Python", "OpenCV", "Computer Vision", "AI Image Processing"],
    description:
      "Prepared and organized facial image datasets for user registration and recognition workflows. Performed system testing under varied lighting conditions and facial-angle variations to evaluate recognition accuracy and reconstruction quality. Validated masked face recognition and face reconstruction functionality through structured testing.",
    keyPoints: [
      "Structured and curated facial image datasets across multi-angle registrations",
      "Evaluated recognition accuracy under differing ambient luminance & occlusions",
      "Conducted rigorous validation testing for partial facial reconstruction",
      "Documented testing observations and system behavior throughout evaluation phases",
      "Gained practical exposure to computer vision, image processing, and AI-based facial recognition systems",
    ],
    githubUrl: "https://github.com/mephistopheles380/mask_partial",
    isFeatured: true,
    badge: "Featured Academic Project",
  },
  {
    id: "placeholder-1",
    title: "Data Analytics & Predictive Modeling Pipeline",
    role: "In Progress / Upcoming",
    technologies: ["Python", "Pandas", "Data Visualization", "Statistical Analysis"],
    description:
      "An end-to-end analytical pipeline designed to clean, transform, and extract predictive signals from real-world datasets with interactive exploratory dashboards.",
    keyPoints: [
      "Automated ETL pipeline using Python",
      "Exploratory statistical distributions and correlation matrices",
      "Interactive visualization dashboard for KPI monitoring",
    ],
    isFeatured: false,
    isPlaceholder: true,
    badge: "More Projects Coming Soon",
  },
  {
    id: "placeholder-2",
    title: "Network Security & Log Analysis Utility",
    role: "In Progress / Upcoming",
    technologies: ["Python", "Network Protocols", "Wireshark Logs", "Security Auditing"],
    description:
      "Automated script suite for parsing network capture artifacts, inspecting anomalous packet frequencies, and flagging potential unauthorized intrusion vectors.",
    keyPoints: [
      "Parsing pcap/log streams programmatically with Python",
      "Automated threshold-based alert generation",
      "Structured audit reporting for incident response readiness",
    ],
    isFeatured: false,
    isPlaceholder: true,
    badge: "More Projects Coming Soon",
  },
];

export const AUTOMATION_PIPELINE: AutomationNode[] = [
  {
    id: "data",
    label: "DATA",
    sublabel: "Raw Ingestion",
    icon: "Database",
    description: "Aggregating structured & unstructured logs, facial frames, or metric streams.",
    color: "#06b6d4", // cyan
  },
  {
    id: "python",
    label: "PYTHON",
    sublabel: "Core Processing Engine",
    icon: "FileCode2",
    description: "Sanitizing, parsing, and applying algorithmic transformations with Python logic.",
    color: "#38bdf8", // light blue
  },
  {
    id: "analysis",
    label: "ANALYSIS",
    sublabel: "Pattern Mining",
    icon: "LineChart",
    description: "Evaluating metrics, anomaly thresholds, and feature distributions.",
    color: "#818cf8", // indigo
  },
  {
    id: "insight",
    label: "INSIGHT",
    sublabel: "Strategic Context",
    icon: "Lightbulb",
    description: "Extracting actionable conclusions, security posture alerts, and performance trends.",
    color: "#a855f7", // purple
  },
  {
    id: "automation",
    label: "AUTOMATION",
    sublabel: "Continuous Execution",
    icon: "Zap",
    description: "Triggering proactive routines, automated notifications, and reproducible pipelines.",
    color: "#22c55e", // emerald
  },
];

export const JOURNEY_TIMELINE: JourneyMilestone[] = [
  {
    step: "01",
    title: "Computer Science & Cyber Security",
    phase: "Academic Genesis (2022)",
    description:
      "Embarked on B.Tech in CS & Cyber Security at University College of Engineering. Built deep foundational knowledge in operating systems, networking fundamentals, and defensive logic.",
    status: "foundation",
    focus: ["Computer Science Fundamentals", "Operating Systems", "Networking Protocols"],
  },
  {
    step: "02",
    title: "Python Development",
    phase: "Software Engineering Core",
    description:
      "Mastered Python as the central engineering language for scripting, system automation, and algorithm design. Engineered custom solutions and structured modules.",
    status: "foundation",
    focus: ["Object-Oriented Design", "Algorithmic Problem Solving", "Automation Scripting"],
  },
  {
    step: "03",
    title: "Cybersecurity & Networking",
    phase: "Hands-on Infrastructure Auditing",
    description:
      "Utilized industry-standard diagnostics (Wireshark, Nmap, Burp Suite, Linux environments) to analyze packet traffic, evaluate attack surfaces, and understand security posture.",
    status: "foundation",
    focus: ["Packet Inspection", "Vulnerability Assessment", "Linux Environments"],
  },
  {
    step: "04",
    title: "Data Analytics",
    phase: "Active Transition & Specialization",
    description:
      "Bridging development and security into data analytics: transforming raw datasets, uncovering hidden correlations, and deriving actionable insights through structured visual exploratory techniques.",
    status: "active",
    focus: ["Data Extraction & Cleaning", "Exploratory Data Analysis", "Visual Storytelling"],
  },
  {
    step: "05",
    title: "Data Science & AI",
    phase: "Evolving Frontier",
    description:
      "Expanding from computer vision projects (face reconstruction) into advanced predictive modeling, machine learning fundamentals, and intelligent automated decision systems.",
    status: "evolving",
    focus: ["Computer Vision & OpenCV", "ML Model Training", "Intelligent Systems"],
  },
];
