import {
  Brain,
  Eye,
  MessageSquare,
  Database,
  Cloud,
  Code2,
  GitBranch,
  Box,
  BarChart3,
  Cpu,
} from "lucide-react";
import {
  CONFERENCE_IMAGE,
  HACKATHON_IMAGE,
  IEEE_BRANCH_IMAGE,
  IEEE_TECHNICAL_IMAGE,
  MAHARA_CERT_IMAGE,
  MAHARA_CERT_PDF,
  NASA_CERT_IMAGE,
  NASA_CERT_PDF,
  NASA_POSTER,
  NTI_CERT_IMAGE,
  PROFILE_IMAGE,
  ROBOTECH_CERT_IMAGE,
  ROBOTECH_TRAINING_IMAGE,
  UN_HABITAT_IMAGE,
  WORKSHOP_IMAGE,
} from "./assets";

export const SOCIALS = {
  email: "abdelrahmanbakrghazy@gmail.com",
  githubUrl: "https://github.com/abdo-ghg",
  githubLabel: "github.com/abdo-ghg",
  linkedinUrl: "https://www.linkedin.com/in/abdelrahman-bakr-mabrouk-ghazy-7606053b0",
  linkedinLabel: "linkedin.com/in/abdelrahman-bakr-mabrouk-ghazy",
  mapsUrl: "https://maps.google.com/?q=Cairo,+Egypt",
};

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export const INTERESTS = [
  { label: "Machine Learning", icon: Brain },
  { label: "Deep Learning", icon: Cpu },
  { label: "Computer Vision", icon: Eye },
  { label: "Large Language Models", icon: MessageSquare },
  { label: "RAG", icon: Database },
  { label: "Data Science", icon: BarChart3 },
  { label: "Backend Development", icon: Code2 },
  { label: "Software Engineering", icon: Box },
  { label: "Docker", icon: Box },
  { label: "Cloud", icon: Cloud },
  { label: "Git", icon: GitBranch },
];

export const SKILLS: { category: string; items: string[] }[] = [
  {
    category: "Programming Languages",
    items: ["Python", "C++", "Java", "SQL", "JavaScript"],
  },
  {
    category: "Frameworks",
    items: [
      "Flask",
      "Streamlit",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "OpenCV",
      "HuggingFace",
    ],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Docker", "Oracle Database", "Power BI", "Linux"],
  },
  {
    category: "Machine Learning",
    items: [
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "LLMs",
      "RAG",
      "Feature Engineering",
      "Data Analysis",
      "Clustering",
      "Classification",
      "Regression",
      "Model Optimization",
      "Grid Search",
      "Cross Validation",
    ],
  },
  {
    category: "Visualization",
    items: ["Matplotlib", "Seaborn", "Power BI"],
  },
  {
    category: "Soft Skills",
    items: [
      "Leadership",
      "Problem Solving",
      "Communication",
      "Teamwork",
      "Presentation",
      "Mentoring",
    ],
  },
];

export const EXPERIENCE = [
  {
    org: "IEEE Al-Azhar Student Branch",
    role: "Technical Instructor",
    bullets: [
      "Delivered programming and technical sessions for students.",
      "Prepared technical content and presentations for student camps and activities.",
      "Worked with teams to explain technical concepts and support collaborative learning.",
    ],
  },
  {
    org: "United Nations Habitat — World Urban Forum (WUF12)",
    role: "Volunteer",
    bullets: [
      "Supported UN-Habitat event operations during the World Urban Forum.",
      "Coordinated with teams to handle event logistics and visitor support.",
      "Contributed to communication and operational support for a large international event.",
    ],
  },
  {
    org: "ASU Career Center",
    role: "Elite Internship Program",
    bullets: [
      "Participated in leadership and project coordination activities.",
      "Worked on event management and team collaboration processes.",
      "Developed practical experience in communication, planning, and execution.",
    ],
  },
  {
    org: "NTI · National Telecommunication Institute",
    role: "Machine Learning & Data Analysis Trainee",
    bullets: [
      "Studied machine learning, data analysis, and Python-based data workflows.",
      "Worked with preprocessing, EDA, visualization, feature engineering, and model development.",
      "Built a foundation for applying ML and analytics to real-world problems.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Boomerang",
    role: "Founder / Product Builder",
    tech: ["Python", "SQL", "Analytics", "Retention", "Startup Metrics"],
    description:
      "Analytics solution for Egyptian startup founders to track customer retention, repeat purchases, and growth signals.",
    impact: "Helps founders turn customer behavior into actionable retention and revenue insights.",
    image: "/media/projects/boomerang-project.svg",
  },
  {
    title: "Shakhssly",
    role: "AI Product Contributor",
    tech: ["Python", "Flask", "LLM", "Arabic NLP", "Healthcare AI"],
    description:
      "AI-powered telemedicine platform with an Arabic medical chatbot named ودود for symptom triage and clinic workflow support.",
    impact: "Brings conversational AI and digital triage support into an Arabic healthcare context.",
    image: "/media/projects/shakhssly-project.svg",
  },
  {
    title: "NICE TRIP",
    role: "Initiative Lead",
    tech: ["Leadership", "Community Engagement", "Education", "Civic Participation"],
    description:
      "Initiative designed to guide university students toward active civic participation, leadership, and meaningful academic achievement.",
    impact: "Connects student growth, leadership, and real-world engagement beyond the classroom.",
    image: "/media/projects/nice-trip-project.svg",
  },
  {
    title: "Retail Buyer Segmentation System",
    role: "Data Science & ML Engineer",
    tech: ["Flask", "Scikit-Learn", "KMeans", "Logistic Regression", "XGBoost"],
    description:
      "End-to-end customer intelligence platform using K-Means clustering, 23-feature data preparation, and six classification models for buyer segmentation and business analysis.",
    impact: "Achieved 99.55% accuracy with Logistic Regression and demonstrated a full data-to-product workflow.",
    image: "/media/projects/retail-buyer-segmentation-project.svg",
  },
  {
    title: "Emotion Detection System",
    role: "Deep Learning Researcher",
    tech: ["PyTorch", "ViT", "DeiT", "ConvNeXt", "Computer Vision"],
    description:
      "Facial emotion recognition project using advanced vision models including ViT, DeiT, and CNN-based architectures for accurate classification.",
    impact: "Reached 1st place in a Kaggle competition and showed strong deep-learning and CV execution.",
    image: "/media/projects/emotion-detection-project.svg",
  },
  {
    title: "Vitamin Deficiency Prediction System",
    role: "ML / Analytics Builder",
    tech: ["Python", "XGBoost", "Scikit-Learn", "Feature Engineering"],
    description:
      "Dual-task prediction system for vitamin deficiency severity and related condition categories using feature engineering, model tuning, and explainable ML workflows.",
    impact: "Combined regression and classification to support practical health-data decision making.",
    image: "/media/projects/vitamin-deficiency-project.svg",
  },
  {
    title: "Custom Neural Network / Autograd Engine",
    role: "AI Systems Builder",
    tech: ["Python", "NumPy", "Autograd", "Neural Networks", "Deep Learning"],
    description:
      "Built an automatic differentiation engine from scratch, including computational graphs, backpropagation, tensor operations, and custom training logic.",
    impact: "Demonstrates a strong understanding of the mechanics behind modern deep-learning frameworks.",
    image: "/media/projects/autograd-engine-project.svg",
  },
  {
    title: "Perceptron & Adaline From Scratch",
    role: "ML Foundations Builder",
    tech: ["Python", "NumPy", "ML Basics", "Data Preprocessing"],
    description:
      "Implemented Perceptron and Adaline models from scratch with preprocessing, feature scaling, one-hot encoding, and decision-boundary analysis.",
    impact: "Strengthens fundamentals in model logic, optimization, and data preparation.",
    image: "/media/projects/perceptron-adaline-project.svg",
  },
];

export const ACHIEVEMENTS = [
  { value: "1st", label: "Place — Kaggle Emotion Detection Competition" },
  { value: "99.55%", label: "Retail Buyer Segmentation Accuracy" },
  { value: "74.8%", label: "Vision Transformer Accuracy" },
  { value: "91.42%", label: "CNN Validation Accuracy" },
];

export const CERTIFICATIONS = [
  {
    title: "NASA International Space Apps Challenge — Galactic Problem Solver",
    issuer: "NASA",
    date: "October 2025",
    image: NASA_CERT_IMAGE,
    link: NASA_CERT_PDF,
  },
  {
    title: "Machine Learning for Data Analysis — Digital Egypt Youth (Score 95%)",
    issuer: "NTI · Ministry of Communications and IT",
    date: "August 2025",
    image: NTI_CERT_IMAGE,
    link: NTI_CERT_IMAGE,
  },
  {
    title: "Python Programming Basics",
    issuer: "ITI MaharaTech — AI Academy",
    date: "November 2025",
    image: MAHARA_CERT_IMAGE,
    link: MAHARA_CERT_PDF,
  },
  {
    title: "RoboTech Summer Training — Certificate of Appreciation",
    issuer: "RoboTech",
    date: "2025",
    image: ROBOTECH_CERT_IMAGE,
    link: ROBOTECH_CERT_IMAGE,
  },
];

export const GALLERY: { label: string; image?: string }[] = [
  { label: "Portrait", image: PROFILE_IMAGE },
  { label: "NASA Space Apps — Team Orbit5", image: NASA_POSTER },
  { label: "NASA Space Apps Certificate", image: NASA_CERT_IMAGE },
  { label: "Machine Learning for Data Analysis — NTI", image: NTI_CERT_IMAGE },
  { label: "RoboTech Summer Training", image: ROBOTECH_TRAINING_IMAGE },
  { label: "Python Programming Basics — ITI", image: MAHARA_CERT_IMAGE },
  { label: "IEEE Al-Azhar Student Branch", image: IEEE_BRANCH_IMAGE },
  { label: "IEEE technical sessions", image: IEEE_TECHNICAL_IMAGE },
  { label: "UN Habitat — World Urban Forum", image: UN_HABITAT_IMAGE },
  { label: "Conferences", image: CONFERENCE_IMAGE },
  { label: "Workshops & camps", image: WORKSHOP_IMAGE },
  { label: "Hackathons", image: HACKATHON_IMAGE },
];
