export interface SkillItem {
  name: string;
  category: "programming" | "data" | "analytics" | "tools" | "knowledge";
  description: string;
  highlight?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  details: string[];
  liveUrl?: string; // TODO: Add live project demo URL if available
  githubUrl?: string; // TODO: Add GitHub repository URL if available
  status: "Featured Platform" | "Production Ready";
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  skillsGained: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  category: "AI & Cloud" | "Data & Analytics" | "Core Engineering";
  badgeColor?: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  gradeType: "CGPA" | "Percentage";
  highlights: string[];
}

export interface PortfolioData {
  name: string;
  displayName: string;
  monogram: string;
  tagline: string;
  role: string;
  headline: string;
  heroBio: string;
  aboutHeadline: string;
  aboutBio: string;
  careerObjective: string;
  location: string;
  email: string;
  phone: string;
  // TODO: Replace social placeholder URLs with your actual profile links
  socialLinks: {
    linkedin: string;
    github: string;
    leetcode: string;
  };
  // TODO: Place your PDF file in the public folder as /Mohamed-Thahir-S_Resume.pdf
  resumePath: string;
  // TODO: Place your portrait photo in the public folder as /images/thahir-portrait.png
  portraitPath: string;
  stats: {
    value: string;
    label: string;
    sublabel: string;
  }[];
  heroSkillPills: string[];
  principles: {
    number: string;
    title: string;
    description: string;
  }[];
  skills: SkillItem[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  certifications: CertificationItem[];
  education: EducationItem[];
  languages: string[];
}

export const portfolioData: PortfolioData = {
  name: "Mohamed Thahir S",
  displayName: "THAHIR",
  monogram: "MTS",
  tagline: "Full Stack Developer | Data Analytics Enthusiast | Cloud Security Learner",
  role: "Full Stack Developer & Data Analytics Enthusiast",
  headline: "Full Stack, Built Differently.",
  heroBio:
    "Computer Science Engineering student building practical software, analytics platforms, and scalable digital experiences.",
  aboutHeadline: "Engineered like code, styled like design.",
  aboutBio:
    "I’m a Computer Science Engineering student who enjoys turning practical problems into clean, usable, and scalable digital solutions. My interests span full-stack development, data analytics, cloud platforms, and secure systems.",
  careerObjective:
    "Eager to contribute to innovative software development projects while continuously enhancing technical expertise in emerging technologies. Committed to delivering efficient, scalable solutions and collaborating effectively within a team to achieve organizational goals.",
  location: "Coimbatore, Tamil Nadu, India",
  email: "thahirmohamed212@gmail.com",
  phone: "+91-9944606256",
  socialLinks: {
    // TODO: Update with your official LinkedIn profile URL
    linkedin: "https://linkedin.com",
    github: "https://github.com/thahir2112",
    // TODO: Update with your official LeetCode profile URL
    leetcode: "https://leetcode.com",
  },
  resumePath: "/Mohamed-Thahir-S_Resume.pdf",
  portraitPath: "/images/thahir-portrait.png",
  stats: [
    {
      value: "2023–2027",
      label: "B.E. Computer Science",
      sublabel: "V S B College of Engineering, Coimbatore",
    },
    {
      value: "7.7 / 10",
      label: "Academic CGPA",
      sublabel: "Consistent Engineering Performance",
    },
    {
      value: "1",
      label: "Featured Analytics Platform",
      sublabel: "End-to-End Cloud ETL & BI Dashboard",
    },
    {
      value: "Feb–Apr 2026",
      label: "ServiceNow Virtual Intern",
      sublabel: "Agentic AI & Workflow Automation",
    },
  ],
  heroSkillPills: [
    "Java",
    "Python",
    "SQL",
    "Pandas",
    "BigQuery",
    "Power BI",
    "Tableau",
    "Git",
    "Linux",
    "ServiceNow",
  ],
  principles: [
    {
      number: "01",
      title: "Build with purpose",
      description:
        "Every line of code and database schema must address real operational needs with clarity and structural integrity.",
    },
    {
      number: "02",
      title: "Learn continuously",
      description:
        "Actively expanding expertise across modern full-stack architectures, cloud data warehousing, and AI workflow automation.",
    },
    {
      number: "03",
      title: "Improve every iteration",
      description:
        "Refining ETL validation, query performance, and user interfaces through disciplined testing and metric-driven feedback.",
    },
  ],
  skills: [
    // Programming
    {
      name: "Java",
      category: "programming",
      description: "Object-oriented programming, core software fundamentals, and algorithmic logic.",
      highlight: true,
    },
    {
      name: "Python",
      category: "programming",
      description: "Data pipelines, automated scripting, analytics transformations, and computational modeling.",
      highlight: true,
    },
    // Data & Databases
    {
      name: "SQL",
      category: "data",
      description: "Relational schema design, complex analytical queries, aggregation, and indexing.",
      highlight: true,
    },
    {
      name: "Pandas",
      category: "data",
      description: "Dataframe wrangling, structured cleaning, missing value imputation, and preprocessing.",
      highlight: true,
    },
    {
      name: "BigQuery",
      category: "data",
      description: "Google Cloud serverless data warehouse for high-scale analytical queries and staging.",
      highlight: true,
    },
    // Analytics & Visualization
    {
      name: "Power BI",
      category: "analytics",
      description: "Interactive business intelligence dashboards, DAX KPI calculations, and executive reporting.",
      highlight: true,
    },
    {
      name: "Tableau",
      category: "analytics",
      description: "Visual data storytelling, interactive parameter filtering, and cross-category sales analysis.",
      highlight: true,
    },
    // Platforms & Tools
    {
      name: "Git",
      category: "tools",
      description: "Distributed version control, atomic commits, branch workflows, and repository lifecycle.",
    },
    {
      name: "GitHub",
      category: "tools",
      description: "Remote code collaboration, pull requests, version tracking, and repository management.",
    },
    {
      name: "VS Code",
      category: "tools",
      description: "Primary development IDE, debugger workflows, extensions, and code navigation.",
    },
    {
      name: "Linux",
      category: "tools",
      description: "Unix shell navigation, command-line toolchains, package utilities, and environment config.",
    },
    {
      name: "Windows",
      category: "tools",
      description: "Development OS environment, PowerShell automation, and desktop tools.",
    },
    {
      name: "ServiceNow",
      category: "tools",
      description: "Enterprise ITSM administration, Agentic AI, Flow Automation, and Automated Test Framework.",
      highlight: true,
    },
    // Knowledge Areas
    {
      name: "ETL Pipelines",
      category: "knowledge",
      description: "Extract, Transform, and Load architecture ensuring resilient data ingestion pipelines.",
      highlight: true,
    },
    {
      name: "Data Validation",
      category: "knowledge",
      description: "Schema validation, type enforcement, and idempotent loading preventing duplicate writes.",
      highlight: true,
    },
    {
      name: "Cloud Data Warehousing",
      category: "knowledge",
      description: "Decoupled storage and compute, partitioning strategies, and high-throughput query execution.",
    },
    {
      name: "Workflow Automation",
      category: "knowledge",
      description: "Automated business logic, trigger rules, and event-driven process execution.",
    },
    {
      name: "ITSM",
      category: "knowledge",
      description: "IT Service Management lifecycle, incident categorization, and service catalog workflows.",
    },
    {
      name: "AI Prompt Engineering Basics",
      category: "knowledge",
      description: "Context framing, zero-shot/few-shot prompting, and structured LLM output formatting.",
    },
  ],
  projects: [
    {
      id: "ecommerce-analytics",
      title: "E-Commerce Sales Analytics Platform",
      category: "Data Engineering & Analytics",
      description:
        "An end-to-end analytics platform that simulates real-world e-commerce data, transforms it through a structured ETL workflow, and presents actionable business insights through an interactive dashboard.",
      tech: ["Python", "Pandas", "SQL", "BigQuery", "Power BI", "Tableau", "ETL"],
      status: "Featured Platform",
      metrics: [
        { label: "Data Pipeline", value: "Automated ETL" },
        { label: "Storage", value: "Cloud Staging & DW" },
        { label: "Execution", value: "Idempotent Loading" },
        { label: "Visual Dashboards", value: "Power BI & Tableau" },
      ],
      details: [
        "Cleaned and transformed raw transactional data with structured automated validation steps.",
        "Loaded data into a cloud data warehouse utilizing staging tables and idempotent loading techniques to avoid duplication.",
        "Engineered high-impact BI dashboards featuring revenue trends, top-selling products, category breakdown, and customer segment metrics.",
        "Simulated real-world e-commerce sales scenarios with robust end-to-end data lifecycle management.",
      ],
      // Note: No verified public URL supplied in resume; placeholder handled gracefully in UI
      liveUrl: undefined,
      githubUrl: undefined,
    },
  ],
  experience: [
    {
      company: "ServiceNow",
      role: "Virtual Intern",
      period: "Feb 2026 – Apr 2026",
      location: "Virtual",
      type: "Internship",
      description:
        "Comprehensive hands-on exposure to enterprise cloud platform administration, AI-driven workflows, and automated service management.",
      highlights: [
        "Learned ServiceNow Administration, system properties, user role assignments, and instance configuration.",
        "Explored Agentic AI and AI-driven ServiceNow solutions for intelligent task resolution.",
        "Implemented Flow Automation to trigger event-driven business rules across service catalogs.",
        "Configured Automated Test Framework (ATF) for regression testing and quality assurance.",
        "Generated customized Reports & Analytics to visualize service delivery metrics and operational throughput.",
        "Gained direct exposure to ITSM and modern workflow automation architectures.",
      ],
      skillsGained: [
        "ServiceNow Admin",
        "Agentic AI",
        "Flow Automation",
        "Automated Test Framework (ATF)",
        "ITSM",
        "Reports & Analytics",
      ],
    },
  ],
  certifications: [
    {
      title: "Project Certificate",
      issuer: "Coursera",
      category: "Core Engineering",
      badgeColor: "#F5C518",
      skills: ["Applied Project Management", "Problem Solving", "Engineering Practices"],
    },
    {
      title: "Getting Started with AI",
      issuer: "NVIDIA",
      category: "AI & Cloud",
      badgeColor: "#76B900",
      skills: ["AI Fundamentals", "Deep Learning Concepts", "GPU Computing"],
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      category: "Data & Analytics",
      badgeColor: "#86BC25",
      skills: ["Data Strategy", "Analytical Synthesis", "Executive Presentation"],
    },
    {
      title: "Data Science & Analytics",
      issuer: "HP LIFE",
      category: "Data & Analytics",
      badgeColor: "#0096D6",
      skills: ["Data Modeling", "Statistical Thinking", "Business Analytics"],
    },
    {
      title: "Generative AI Essentials",
      issuer: "TCS iON",
      category: "AI & Cloud",
      badgeColor: "#FFB800",
      skills: ["LLM Architecture", "Prompting", "AI Use-Cases"],
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "AWS",
      category: "AI & Cloud",
      badgeColor: "#FF9900",
      skills: ["Cloud Architecture", "AWS Core Services", "Security & Reliability"],
    },
    {
      title: "Computer Networks and Internet Protocol",
      issuer: "NPTEL",
      category: "Core Engineering",
      badgeColor: "#F5C518",
      skills: ["Network Topologies", "TCP/IP Stack", "Routing Protocols"],
    },
  ],
  education: [
    {
      degree: "Bachelor of Engineering in Computer Science Engineering",
      institution: "V S B College of Engineering Technical Campus",
      location: "Coimbatore, Tamil Nadu",
      period: "2023 – 2027",
      grade: "7.7 / 10",
      gradeType: "CGPA",
      highlights: [
        "Focus on core computer science algorithms, database systems, and full-stack development.",
        "Active member in technical workshops, cloud seminars, and hands-on coding initiatives.",
      ],
    },
    {
      degree: "Class XII (Higher Secondary - State Board)",
      institution: "Nagamani Ammal Memorial Matric Higher Secondary School",
      location: "Tamil Nadu",
      period: "2022 – 2023",
      grade: "71.5%",
      gradeType: "Percentage",
      highlights: [
        "Academic concentration in Mathematics, Physics, Chemistry, and Computer Science.",
      ],
    },
  ],
  languages: ["English", "Tamil"],
};
