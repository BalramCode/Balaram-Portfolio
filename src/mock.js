// Mock data for Balaram Naik's Portfolio
// All data here is for the frontend-only phase. Will be replaced by backend later.
import profileImg from "../src/assets/image.png";
import utkalpreneurPhoto from "../src/assets/DSC_4032.JPG";
import codekritiPhoto from "../src/assets/20260307_62627PMByGPSMapCamera.jpg";
import aiHackathonPhoto from "../src/assets/IMG-20251210-WA0063.jpg";
export const personalInfo = {
  name: "Balaram Naik",
  roles: ["Full Stack Developer", "Problem Solver", "MERN Expert", "CS Student"],
  tagline: "I design and develop full-stack web solutions with a focus on performance, usability, and real-world impact."
  ,
  location: "India",
  email: "bnaik1005@gmail.com",
  phone: "+91 82606 47549",
  resumeUrl: "#",
  headshot: profileImg,
about: [
    "I'm a B.Sc. Computer Science undergraduate at Maa Manikeshwari University with a strong academic foundation (8.17 CGPA), passionate about building scalable full-stack applications. My primary expertise lies in the MERN ecosystem, though I frequently explore the complexities of AI, Blockchain, and optimized backend system architecture.",
    "Acting as Tech Lead for multiple projects, I have developed and deployed production-ready platforms like TasteRadar and ShopMee, focusing on real-world utility and clean, documented code. I am dedicated to writing optimized logic from scratch and creating user-centric interfaces that provide a seamless experience.",
  ],
  stats: [
    { label: "Projects Shipped", value: "4+" },
    { label: "DSA Problems", value: "150+" },
    { label: "Tech Stack Tools", value: "10+" },
    { label: "GitHub Commits", value: "400+" },
  ],
  socials: {
    github: "https://github.com/BalramCode",
    linkedin: "https://linkedin.com/in/balaram-naik-592415336",
    leetcode: "https://leetcode.com/u/BalramNaik2006",
    email: "bnaik1005@gmail.com",
  },
};

export const techStack = [
  {
    title: "Languages",
    accent: "cyan",
    span: "col-span-2 row-span-1",
    items: [
      { name: "C++", level: 88 },
      { name: "Python", level: 72 },
      { name: "JavaScript", level: 70 },
      { name: "TypeScript", level: 60 },
    ],
  },
  {
    title: "Frontend",
    accent: "violet",
    span: "col-span-1 row-span-2",
    items: [
      { name: "React", level: 94 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Redux", level: 60 },
      { name: "Framer Motion", level: 60 },
      { name: "Next.js", level: 50 },
    ],
  },
  {
    title: "Backend",
    accent: "cyan",
    span: "col-span-1 row-span-1",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 88 },
      { name: "MongoDB", level: 86 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "Tools & DevOps",
    accent: "violet",
    span: "col-span-2 row-span-1",
    items: [
      { name: "Git & GitHub", level: 92 },
      { name: "Docker", level: 70 },
      { name: "Postman", level: 88 },
      { name: "VS Code", level: 96 },
      { name: "Render, Netlify, Vercel", level: 80 },
    ],
  },
];

export const projects = [
    {
    id: "tasteradar",
    title: "TasteRadar",
    subtitle: "Street Food Discovery",
    description:
      "Discover hidden street-food gems with geolocation-based search, user reviews and ratings — built for foodies, by a foodie.",
    tags: ["React", "Node.js", "Mapbox", "MongoDB"],
    accent: "cyan",
    link: "https://tasteradar.in",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80",
    year: "2024",
  },
  {
    id: "smart-attendance",
    title: "Smart Attendance",
    subtitle: "Computer-Vision Attendance System",
    description:
      "A web app that automates classroom attendance using face recognition — secure, fast and integrated with admin dashboards.",
    tags: ["React", "Python", "OpenCV", "Node.js"],
    accent: "violet",
    link: "https://smartattendancecs.onrender.com",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
    year: "2024",
  },
  {
    id: "classgen",
    title: "ClassGen AI",
    subtitle: "AI Educator's Smart Assistant",
    description:
      "An AI-driven assistant that auto-generates lesson plans, quizzes and learning summaries — saving educators hours each week.",
    tags: ["React", "Node.js", "OpenAI", "MongoDB"],
    accent: "cyan",
    link: "https://classgen-ai-educator-s-smart-assistant.onrender.com",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80",
    year: "2025",
  },
  {
    id: "skillconnect",
    title: "SkillConnect",
    subtitle: "Collaborative MERN Platform",
    description:
      "A platform where students post skills and team up for projects. Real-time chat, role-based dashboards and project showcases.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Socket.IO"],
    accent: "violet",
    link: "https://skillconnect-vwm0.onrender.com",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80",
    year: "2024",
  },

];

export const achievements = [
  {
    id:  "utkalpreneur ",
    category:  "Technical Leadership ",
    title:  "Utkalpreneur E-Fest Win ",
    subtitle:  "Led Team Kautilya as Tech Lead to 'Best Innovative Idea' award. ",
    detail:
       "Nalanda Institute of Technology. Excelled in turning complex problems into working full-stack solutions. ",
    icon:  "trophy ",
    accent:  "cyan ",
    tag:  "1st Place ",
    image: utkalpreneurPhoto,
  },
  {
    id:  "codekriti ",
    category:  "Competitive Programming ",
    title:  "Code Kriti 4.0 Champion ",
    subtitle:  "1st place in 'Algorithm-to-Code' competition. ",
    detail:
       "Parala Maharaja Engineering College. Displayed advanced algorithmic thinking and coding proficiency, defeating a strong field. ",
    icon:  "code ",
    accent:  "violet ",
    tag:  "Champion ",
    image: codekritiPhoto,
  },
  {
    id:  "odisha-ai ",
    category:  "AI Innovation & Ethics ",
    title:  "Odisha AI Hackathon 2025 ",
    subtitle:  "Participant & Innovator. ",
    detail:
       "NIST University. Gained hands-on experience in AI model selection, ethical AI practices, and deployment readiness. ",
    icon:  "brain ",
    accent:  "cyan ",
    tag:  "Innovator ",
    image: aiHackathonPhoto,
  },
];

export const achievementTypewriter = [
   "Awarded. ",
   "Recognized. ",
   "Innovating. ",
];


export const experience = [
  {
    role: "Full Stack Developer (Freelance)",
    org: "Self-Initiated Projects",
    period: "2024 — Present",
    points: [
      "Shipped 6 production MERN apps deployed on Render with custom domains.",
      "Designed REST APIs serving 100+ monthly users across food, education & student-collab products.",
      "Integrated AI APIs (OpenAI) and computer-vision pipelines for niche use cases.",
    ],
  },
  {
    role: "Open-Source Contributor",
    org: "GitHub — BalramCode",
    period: "2024 — Present",
    points: [
      "Active contributor across 15+ public repositories with 400+ commits.",
      "Maintain personal libraries and project starters around the MERN stack.",
    ],
  },
  {
    role: "BSc, Computer Science",
    org: "Maa Manikeshwari University, India",
    period: "2024 — 2027",
    points: [
      "Coursework in DSA, OS, DBMS, Blockchain, Computer Networks, AI/ML.",
      "150+ DSA problems solved on LeetCode (handle: BalramNaik2006).",
    ],
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "achievement", label: "Achievement" },
  { id: "contact", label: "Contact" },
];
