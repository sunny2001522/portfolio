"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaGithub } from "react-icons/fa";
import { MdOutlineWebAsset } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// 型別定義
type ProjectLink = {
  type: string;
  url: string;
};

import type { Project as GlobalProject } from "@/lib/types";
type Project = GlobalProject;

type Skill = {
  name: string;
  icon: string;
};

type CategorizedSkills = Record<string, Skill[]>;

interface ProjectProps {
  projects: Project[];
  skills: CategorizedSkills;
  role: string;
}

export default function Project({
  projects,
  skills: categorizedSkills,
  role,
}: ProjectProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeProject = projects[activeIndex];
  const t = useTranslations("projects");
  // get current locale from t (next-intl)
  // @ts-ignore
  const locale: "zh" | "en" = t.locale === "en" ? "en" : "zh";
  const contentRef = useRef<HTMLDivElement>(null);

  if (!activeProject) return null;

  return (
    <div className="w-full  my-4  grid grid-cols-12 gap-8 p-8 text-black">
      {/* 左側縮圖列表 */}
      <div className="col-span-1 flex flex-col  gap-4 justify-center">
        {projects.map((project: Project, index: number) => (
          <button
            key={project.id}
            onClick={() => setActiveIndex(index)}
            className={`relative w-full  aspect-video rounded-lg overflow-hidden transition-all duration-300 transform-gpu ${
              activeIndex === index
                ? "scale-110 ring-4 ring-gray-500 shadow-2xl"
                : "scale-100 opacity-60 hover:opacity-100 hover:scale-105"
            }`}
          >
            <Image
              src={project.thumbnail}
              alt={project.id}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
      <div className="col-span-2"></div>

      {/* 中間專案內容 */}
      <div className="col-span-6 flex flex-col justify-center gap-4 h-full">
        <div className=" h-auto flex flex-col items-center justify-center  bg-white/50 shadow-md  backdrop-blur rounded-lg z-50 border-blue-200 border-2 overflow-hidden">
          <div className="flex  gap-2 bg-gradient-to-r from-cyan-500 to-violet-200 px-4 py-2  w-full rounded-t-lg">
            <span className="rounded-full bg-white w-3 h-3"></span>
            <span className="rounded-full bg-white w-3 h-3"></span>
            <span className="rounded-full bg-white w-3 h-3"></span>
          </div>
          <Image
            src={activeProject.thumbnail}
            alt={t(`${activeProject.id}.title`)}
            width={800}
            height={450}
            className="w-full h-auto "
          />
        </div>

        <div
          key={activeProject.id}
          className="bg-white/70 backdrop-blur-md flex-1  p-6  rounded-xl shadow-lg border border-gray-200 h-10"
        >
          <div className="flex justify-between items-baseline mb-4 ">
            <h3 className="text-2xl font-bold text-gray-800">
              {t(`${activeProject.id}.title`)}
            </h3>
            <span className="text-sm font-mono text-gray-500">
              {activeProject.year}
            </span>
            <div className="flex gap-2 mt-4">
              {activeProject.links?.map((link: ProjectLink) => (
                <a
                  key={link.type}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xl p-1 bg-gray-800 text-white rounded-full hover:bg-gray-500 transition-colors animate-pulse"
                >
                  {link.type === "GitHub" && <FaGithub />}
                  {link.type === "Vercel" && <MdOutlineWebAsset />}
                </a>
              ))}
            </div>
          </div>
          {/* 顯示描述 */}
          <div className="mb-4 text-gray-700">
            {activeProject.description &&
              activeProject.description[locale as "zh" | "en"] &&
              activeProject.description[locale as "zh" | "en"]![
                role as "fe" | "pm" | "ui"
              ]}
          </div>

          <div className="space-y-4 text-base text-gray-700 gap-2 h-50 overflow-y-auto">
            <>
              <div className="">
                <h4 className="text-sm font-semibold text-gray-600 mb-2 border-b pb-1">
                  {t(`${activeProject.id}.overview.title`)}
                </h4>
                <p className="mb-2 text-base">
                  {t(`${activeProject.id}.overview.goal`)}
                </p>
              </div>
              <div>
                <h5 className=" text-sm font-semibold text-gray-600 mb-2 border-b pb-1 mt-2">
                  {t(`${activeProject.id}.overview.users_title`)}
                </h5>
                <ul className="list-disc pl-5 space-y-1">
                  {(
                    t.raw(`${activeProject.id}.overview.users`) as string[]
                  ).map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-600 mb-2 border-b pb-1 ">
                  {t(`${activeProject.id}.${role}.implementation.title`)}
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  {(
                    t.raw(
                      `${activeProject.id}.${role}.implementation.stack`
                    ) as string[]
                  ).map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-600 mb-2 border-b pb-1 ">
                  {t(`${activeProject.id}.${role}.challenges.title`)}
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  {(
                    t.raw(`${activeProject.id}.${role}.challenges.items`) as {
                      title: string;
                      solution: string[];
                    }[]
                  ).map((item, index: number) => (
                    <li key={index}>
                      <strong>{item.title}:</strong> {item.solution.join(" ")}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-600 mb-2 border-b pb-1 ">
                  {t(`${activeProject.id}.${role}.outcomes.title`)}
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  {(
                    t.raw(
                      `${activeProject.id}.${role}.outcomes.items`
                    ) as string[]
                  ).map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </>
          </div>
        </div>
      </div>

      {/* 右側技能表 */}
      <div className="col-span-3 flex flex-col justify-start bg-white/50 backdrop-blur-sm p-4 rounded-2xl shadow-inner border overflow-y-auto">
        <h4 className="text-lg font-semibold mb-4 text-gray-800 text-center sticky top-0">
          使用技術
        </h4>
        <div className="space-y-1">
          {Object.entries(categorizedSkills).map(
            ([category, skills]: [string, Skill[]]) => (
              <div key={category}>
                <h5 className="text-sm font-semibold text-gray-600 mb-2 border-b pb-1">
                  {category}
                </h5>
                <div className="grid grid-cols-3 gap-1">
                  {skills.map((skill: Skill) => {
                    const isUsed = activeProject.skills.includes(skill.name);
                    return (
                      <div
                        key={skill.name}
                        className={`flex flex-col items-center gap-1 p-1 rounded-lg transition-all duration-300 ${
                          isUsed
                            ? "opacity-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                            : "opacity-20 grayscale"
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
            )
          )}
        </div>
      </div>
    </div>
  );
}
