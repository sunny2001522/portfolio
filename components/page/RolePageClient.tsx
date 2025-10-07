"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTranslations } from "next-intl";
import Introduction from "@/components/page/role/Introduction";
import Project from "@/components/page/role/Project";
import Contact from "@/components/page/role/Contact";
import { RoleData } from "@/lib/types";

gsap.registerPlugin(ScrollTrigger);

interface RolePageClientProps {
  data: RoleData;
  role: string;
}

const RolePageClient: React.FC<RolePageClientProps> = ({ data, role }) => {
  const t = useTranslations("RolePage");
  const mainRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (!boxRef.current || !mainRef.current) return;

      const box = boxRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          pin: box,
          scrub: 1,
          start: "top top",
          end: "bottom bottom",
        },
      });

      tl.to(box, { duration: 1, ease: "none" });

      tl.to(box, {
        x: "25vw",
        y: "10vh",
        scale: 0.8,
        duration: 1,
        ease: "none",
      });

      tl.to(box, {
        x: "-40vw",
        y: "10vh",
        scale: 1.2,
        rotationY: 180,
        duration: 1,
        ease: "none",
      });

      tl.to(box, {
        x: "0vw",
        y: "0vh",
        scale: 0.5,
        rotationY: 360,
        duration: 1,
        ease: "none",
      });

      tl.to(box, { duration: 0.5, ease: "none" });
    },
    { scope: mainRef }
  );

  return (
    <>
      <Image
        ref={boxRef}
        src="/character/frontend.webp"
        alt="character"
        width={280}
        height={400}
        className="z-20 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 "
        style={{ transformStyle: "preserve-3d" }}
      />
      <section
        ref={mainRef}
        className="relative scroll-container z-10 text-6xl font-bold"
      >
        <div
          id="section1"
          className="scroll-section h-screen flex flex-col items-center justify-center "
        >
          <Introduction role={role} />
        </div>

        <div
          id="section2"
          className="scroll-section h-screen bg-blue-200 flex flex-col items-center justify-center relative"
        >
          <h2 className="absolute top-1/2 left-1/3 -translate-y-1/2">
            {t("skillsTitle")}
          </h2>
        </div>
        <div
          id="section3"
          className="scroll-section  flex flex-col items-center justify-center relative"
        >
          <Project projects={data.projects} skills={data.skills} role={role} />
        </div>
        <div
          id="section4"
          className="scroll-section h-screen flex items-center justify-center bg-red-200 relative"
        >
          <Contact contact={data.contact} resume={data.resume} />
        </div>
      </section>
    </>
  );
};

export default RolePageClient;
