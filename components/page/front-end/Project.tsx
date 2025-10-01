"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// --- 專案資料 ---
const projects = [
  {
    id: "gamified-weight-loss",
    title: "遊戲化減重平台（協作開發）",
    year: "2025",
    thumbnail: "/web/web2.webp",
    description: [
      "以八角遊戲框架為基礎，透過多樣化角色、挑戰、賭注機制，創造減重版多鄰國，獲產品發表會上觀眾一致好評",
      "React Router 規劃 SPA 架構",
      "Redux + TanStack Query 管理複雜狀態，降低 props 傳遞",
      "負責購買、會員中心、首頁等核心功能",
      "從 0 基礎自學 Supabase，開發 50+ API，建立會員、好友、貼文、購買等資料流",
      "GSAP + Lottie 打造流暢動畫，創造如Awwwards上網頁遊戲化互動體驗",
      "撰寫 E2E 測試（Playwright）",
      "全權負責 100+ 頁 UI/UX 設計，建立 Design System，以 M3 顏色規範為基礎",
    ],
    skills: [
      "React",
      "Redux",
      "TanStack Query",
      "GSAP",
      "Lottie",
      "Swiper",
      "TailwindCSS",
      "Playwright",
      "Supabase",
      "UI/UX",
      "Git",
    ],
  },
  {
    id: "hotel-website",
    title: "飯店品牌形象官網（獨立開發）",
    year: "2025",
    thumbnail: "/web/web1.webp",
    description: [
      "使用 React + Tailwind 開發響應式訂房網站",
      "串接 Restful API，完成會員、訂房、建立訂單功能",
      "後端部署至 MongoDB，使用 dbGate 與 Postman 管理資料",
    ],
    skills: ["React", "TailwindCSS", "MongoDB", "Restful API", "Git"],
  },
  {
    id: "portfolio",
    title: "個人作品集",
    year: "2025",
    thumbnail: "/web/web3.webp",
    description: [
      "Next.js + Tailwind 兼顧作品集 SEO，GSAP打造沈浸敘事性網頁",
      "i18n 建構多語系體驗",
    ],
    skills: ["Next.js", "TailwindCSS", "GSAP", "i18n", "Git", "Swiper"],
  },
];

// --- 技能資料 ---
const categorizedSkills = {
  前端: [
    { name: "React", icon: "/skills/react.webp" },
    { name: "Next.js", icon: "/skills/next.webp" },
    { name: "TailwindCSS", icon: "/skills/tail.webp" },
    { name: "Shadcn", icon: "/skills/shadcn.webp" },

    { name: "Redux", icon: "/skills/redux.webp" },
    { name: "TanStack Query", icon: "/skills/tanstack.webp" },
    { name: "i18n", icon: "/skills/intl.webp" },
    { name: "Git", icon: "/skills/git.webp" },
    { name: "Swiper", icon: "/skills/shadcn.webp" },
  ],
  動畫: [
    { name: "GSAP", icon: "/skills/gsap.webp" },
    { name: "Lottie", icon: "/skills/lottie.webp" },
    { name: "Spline", icon: "/skills/spline.webp" },
  ],
  資料庫: [
    { name: "Supabase", icon: "/skills/supabase.webp" },
    { name: "MongoDB", icon: "/skills/mongodb.webp" },
    { name: "Restful API", icon: "/skills/api.webp" },
  ],
  測試: [{ name: "Playwright", icon: "/skills/playwright.webp" }],
  "UI/UX": [
    { name: "UI/UX", icon: "/skills/figma.webp" }, // Assuming Figma for UI/UX
  ],
  AI: [
    { name: "Gemini Assist", icon: "/skills/gemini.webp" },
    { name: "Cursor", icon: "/skills/cursor.webp" },
  ],
};

export default function Project() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
        );
      }
    },
    { dependencies: [activeIndex], scope: contentRef }
  );

  if (!activeProject) return null;

  return (
    <div className="w-full  grid grid-cols-12 gap-8 p-8 text-black">
      {/* 左側縮圖列表 */}
      <div className="col-span-3 flex  gap-4 justify-center">
        {projects.map((project, index) => (
          <button
            key={project.id}
            onClick={() => setActiveIndex(index)}
            className={`relative w-full  aspect-video rounded-lg overflow-hidden transition-all duration-300 transform-gpu ${
              activeIndex === index
                ? "scale-110 ring-4 ring-blue-500 shadow-2xl"
                : "scale-100 opacity-60 hover:opacity-100 hover:scale-105"
            }`}
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* 中間專案內容 */}
      <div className="col-span-6 flex flex-col justify-center">
        <div
          ref={contentRef}
          key={activeProject.id}
          className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200 opacity-0"
        >
          <div className="flex justify-between items-baseline mb-4">
            <h3 className="text-2xl font-bold text-gray-800">
              {activeProject.title}
            </h3>
            <span className="text-sm font-mono text-gray-500">
              {activeProject.year}
            </span>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-base text-gray-700">
            {activeProject.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 右側技能表 */}
      <div className="col-span-3 flex flex-col justify-center bg-white/50 backdrop-blur-sm p-4 rounded-2xl shadow-inner border overflow-y-auto">
        <h4 className="text-lg font-semibold mb-4 text-gray-800 text-center sticky top-0 bg-white/50 pt-2 pb-2">
          使用技術
        </h4>
        <div className="space-y-4">
          {Object.entries(categorizedSkills).map(([category, skills]) => (
            <div key={category} className="flex text-nowrap justify-between">
              <h5 className="text-sm font-semibold text-gray-600 mb-2 border-b pb-1">
                {category}
              </h5>
              <div className="grid grid-cols-3 gap-1">
                {skills.map((skill) => {
                  const isUsed = activeProject.skills.includes(skill.name);
                  return (
                    <div
                      key={skill.name}
                      className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${
                        isUsed ? "opacity-100" : "opacity-20 grayscale"
                      }`}
                      title={skill.name}
                    >
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                      <span className="text-xs text-center font-medium text-gray-600">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
