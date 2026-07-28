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
  MAHARA_CERT_IMAGE,
  MAHARA_CERT_PDF,
  NASA_CERT_IMAGE,
  NASA_CERT_PDF,
  NASA_POSTER,
  NTI_CERT_IMAGE,
  ROBOTECH_CERT_IMAGE,
} from "./assets";

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
      "Delivered technical sessions.",
      "Mentored students.",
      "Organized technical camps.",
    ],
  },
  {
    org: "United Nations Habitat (World Urban Forum)",
    role: "Volunteer",
    bullets: [
      "International event operations.",
      "Team coordination.",
      "Visitor support.",
    ],
  },
  {
    org: "ASU Career Center",
    role: "Elite Internship Program",
    bullets: ["Leadership", "Event Management", "Project Coordination"],
  },
  {
    org: "NTI",
    role: "Machine Learning Internship",
    bullets: ["Machine Learning", "Model Development", "Data Analysis"],
  },
];

export const PROJECTS = [
  {
    title: "Retail Buyer Segmentation",
    tech: ["Flask", "Scikit-Learn", "KMeans", "Logistic Regression", "XGBoost"],
    description:
      "End-to-end ML platform combining K-Means clustering and six classifiers, achieving 99.55% accuracy with automated preprocessing and business analytics.",
  },
  {
    title: "Emotion Detection System",
    tech: ["PyTorch", "Vision Transformers", "ViT", "DeiT", "ConvNeXt"],
    description:
      "Advanced facial emotion recognition models achieving 74.8% Kaggle accuracy and 1st Place using Vision Transformers and deep learning.",
  },
  {
    title: "Vitamin Deficiency Prediction",
    tech: ["Python", "XGBoost", "Scikit-Learn"],
    description:
      "Regression and classification pipelines for vitamin deficiency prediction using feature engineering and machine learning.",
  },
  {
    title: "Lung Cancer Survival Prediction",
    tech: ["Python", "Scikit-Learn", "Pandas"],
    description:
      "Machine learning models predicting patient survival using clinical datasets.",
  },
  {
    title: "Medical Diagnosis Expert System",
    tech: ["Python", "Streamlit", "Rule Engine"],
    description:
      "Rule-based medical diagnosis chatbot with a Streamlit interface.",
  },
  {
    title: "Billing System",
    tech: ["Oracle", "SQL", "Java"],
    description:
      "Oracle database application for invoices, payments, customers, and transactions.",
  },
  {
    title: "Business Analytics Dashboard",
    tech: ["Power BI", "SQL", "DAX"],
    description:
      "Marketing analytics dashboard providing insights into customer behavior and revenue.",
  },
  {
    title: "LLM & RAG Assistant",
    tech: ["LangChain", "Embeddings", "Vector DB", "LLMs"],
    description:
      "Retrieval-Augmented Generation applications using embeddings, vector databases, and LLMs.",
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
  { label: "NASA Space Apps — Team Orbit5", image: NASA_POSTER },
  { label: "NASA Space Apps Certificate", image: NASA_CERT_IMAGE },
  { label: "Machine Learning for Data Analysis — NTI", image: NTI_CERT_IMAGE },
  { label: "RoboTech Summer Training", image: ROBOTECH_CERT_IMAGE },
  { label: "Python Programming Basics — ITI", image: MAHARA_CERT_IMAGE },
  { label: "IEEE" },
  { label: "UN Habitat" },
  { label: "Conferences" },
];
