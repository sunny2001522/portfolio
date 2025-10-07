
// PM 專案僅顯示 gamified-weight-loss
export const pmProjects: Project[] = [
  {
    id: "gamified-weight-loss",
    year: "2025",
    thumbnail: "/web/web2.webp",
    links: [
      { type: "GitHub", url: "https://github.com/TooruTW/GoBetGoal" },
      { type: "Vercel", url: "https://gobetgoal.vercel.app/" },
    ],
    skills: ["Jira", "Notion", "Swimlane", "Confluence", "Figma"], // 僅技能不同
  },
];

export const pmSkills: Skills = {
  "Project Management": [
    { name: "Jira", icon: "/skills/jira.webp" },
    { name: "Notion", icon: "/skills/notion.webp" },
    { name: "Swimlane", icon: "/skills/kanban.webp" },
    { name: "Confluence", icon: "/skills/confluence.webp" },
    { name: "Figma", icon: "/skills/figma.webp" },
  ],
};


// UI 專案有 FE 全部 + metro app
export const uiProjects: Project[] = [
  {
    id: "gamified-weight-loss",
    year: "2025",
    thumbnail: "/web/web2.webp",
    links: [
      { type: "GitHub", url: "https://github.com/TooruTW/GoBetGoal" },
      { type: "Vercel", url: "https://gobetgoal.vercel.app/" },
    ],
    skills: ["Figma", "Photoshop", "Illustrator", "UI/UX"],
  },
  {
    id: "hotel-website",
    year: "2025",
    thumbnail: "/web/web1.webp",
    links: [
    ],
    skills: ["Figma", "Photoshop", "Illustrator", "UI/UX"],
  },
  {
    id: "portfolio",
    year: "2025",
    thumbnail: "/web/web3.png",
    links: [
      { type: "GitHub", url: "https://github.com/sunny2001522/portfolio" },
      { type: "Vercel", url: "exuan-website-dev.vercel.app" },
    ],
    skills: ["Figma", "Photoshop", "Illustrator", "UI/UX"],
  },
  {
    id: "metro-app",
    year: "2025",
    thumbnail: "/web/web4.jpg",
    links: [

    ],
    skills: ["Figma", "Photoshop", "Illustrator", "UI/UX"],
  },
];

export const uiSkills: Skills = {
  "Design": [
    { name: "Figma", icon: "/skills/figma.webp" },
    { name: "Photoshop", icon: "/skills/ps.webp" },
    { name: "Illustrator", icon: "/skills/ai.webp" },
  ],
  "UI/UX": [
    { name: "UI/UX", icon: "/skills/lovable.webp" },
  ],
};
import {
  Project,
  Skills,
  Contact,
  Resume,
  RoleData,
  Role,
} from "./types";


export const roles: Role[] = [
  {
    key: "fe",
    labelKey: "fe.title",
    color: "bg-blue-200",
    img: "/character/frontend.webp",
  },
  {
    key: "ui",
    labelKey: "ui.title",
    color: "bg-rose-200",
    img: "/character/ui.webp",
  },
  {
    key: "pm",
    labelKey: "pm.title",
    color: "bg-violet-200",
    img: "/character/pm.webp",
  },
];

// 新的 Project 物件結構，包含 zh/en/role-specific descriptions
export const feProjects: Project[] = [
  {
    id: "gamified-weight-loss",
    year: "2025",
    thumbnail: "/web/web2.webp",
    links: [
      { type: "GitHub", url: "https://github.com/TooruTW/GoBetGoal" },
      { type: "Vercel", url: "https://gobetgoal.vercel.app/" },
    ],
    skills: [
      "React",
      "Redux",
      "TanStack Query",
      "Shadcn",
      "GSAP",
      "Lottie",
      "Swiper",
      "TailwindCSS",
      "Figma",
      "Playwright",
      "Supabase",
      "UI/UX",
      "Git",
    ],
  },
  {
    id: "hotel-website",
    year: "2025",
    thumbnail: "/web/web1.webp",
    links: [
      { type: "GitHub", url: "https://github.com" },
      { type: "Vercel", url: "https://vercel.com" },
    ],
    skills: ["React", "TailwindCSS", "MongoDB", "Restful API", "Figma", "Git"],
  },
  {
    id: "portfolio",
    year: "2025",
    thumbnail: "/web/web3.png",
    links: [
      { type: "GitHub", url: "https://github.com/sunny2001522/portfolio" },
      { type: "Vercel", url: "exuan-website-dev.vercel.app" },
    ],
    skills: [
      "Next.js",
      "TailwindCSS",
      "GSAP",
      "i18n",
      "Git",
      "Figma",
      "Swiper",
      "Spline",
    ],
  },
];

export const feSkills: Skills = {
  "Front-end": [
    { name: "React", icon: "/skills/react.webp" },
    { name: "Next.js", icon: "/skills/next.webp" },
    { name: "TailwindCSS", icon: "/skills/tail.webp" },
    { name: "Shadcn", icon: "/skills/shadcn.webp" },
    { name: "Redux", icon: "/skills/redux.webp" },
    { name: "TanStack Query", icon: "/skills/tanstack.webp" },
    { name: "i18n", icon: "/skills/intl.webp" },
    { name: "Git", icon: "/skills/git.webp" },
    { name: "Swiper", icon: "/skills/swiper.webp" },
  ],
  Animation: [
    { name: "GSAP", icon: "/skills/gsap.webp" },
    { name: "Lottie", icon: "/skills/lottie.webp" },
    { name: "Spline", icon: "/skills/spline.webp" },
  ],
  Database: [
    { name: "Supabase", icon: "/skills/supabase.webp" },
    { name: "MongoDB", icon: "/skills/mongodb.webp" },
    { name: "Restful API", icon: "/skills/api.webp" },
  ],
  Testing: [{ name: "Playwright", icon: "/skills/playwright.webp" }],
  "UI/UX": [{ name: "Figma", icon: "/skills/figma.webp" }],
  AI: [
    { name: "Gemini Assist", icon: "/skills/gemini.webp" },
    { name: "Cursor", icon: "/skills/cursor.webp" },
  ],
};

export const feContact: Contact[] = [];

export const feResume: Resume = {
  en: "SoniaResumeFeEn.pdf",
  zh: "SoniaResumeFeZh.pdf",
};

const feData: RoleData = {
  projects: feProjects,
  skills: feSkills,
  contact: feContact,
  resume: feResume,
};


// 動態路由頁面名稱清單
export const rolePages: { fe: string[]; pm: string[]; ui: string[] } = {
    fe: ['introduction', 'contact', 'project'],
    pm: ['introduction', 'contact', 'project'],
    ui: ['introduction', 'contact', 'project'],
};



const pmData: RoleData = {
  projects: pmProjects,
  skills: pmSkills,
  contact: feContact, // 可自訂
  resume: feResume,   // 可自訂
};
const uiData: RoleData = {
  projects: uiProjects,
  skills: uiSkills,
  contact: feContact, // 可自訂
  resume: feResume,   // 可自訂
};

const roleDataMap: Record<string, RoleData> = {
  fe: feData,
  pm: pmData,
  ui: uiData,
};

export const getRoleData = (role: string): RoleData | undefined => {
  return roleDataMap[role];
};
