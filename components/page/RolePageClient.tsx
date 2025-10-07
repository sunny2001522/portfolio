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
import RoleSelect from "../ui/RoleSelect";

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

      tl.to(box, { rotation: 24, duration: 1, ease: "none" });

      tl.to(box, {
        x: "-45vw",
        y: "5vh",
        scale: 1.2,
        rotation: 0,
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
        className="z-20 absolute top-1/3 left-1/2 rotate-6 -translate-x-1/2 -translate-y-1/2 "
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
          className="scroll-section  flex flex-col items-center justify-center relative"
        >
          <Project projects={data.projects} skills={data.skills} role={role} />
        </div>
        <div id="section3" className="scroll-section ">
          <RoleSelect value={role} />
        </div>
      </section>
    </>
  );
};

export default RolePageClient;
