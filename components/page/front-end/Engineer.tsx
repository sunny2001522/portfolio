"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Introduction from "@/components/page/front-end/Introduction";
import Project from "@/components/page/front-end/Project";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const Engineer = () => {
  const mainRef = useRef(null);
  const boxRef = useRef(null);
  const t = useTranslations("Frontend");

  useGSAP(
    () => {
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
        x: "-20vw",
        y: "-10vh",
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
        alt="工程師"
        width={260} // It's good practice to add width/height for images from /public
        height={200}
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
          <Introduction />
        </div>

        <div
          id="section2"
          className="scroll-section h-screen bg-blue-200 flex flex-col items-center justify-center relative"
        >
          <h2 className="absolute top-1/2 left-1/3 -translate-y-1/2">
            My Skills
          </h2>
        </div>
        <div
          id="section3"
          className="scroll-section h-screen flex flex-col items-center justify-center bg-violet-200 relative"
        >
          <h2 className="absolute top-1/2 right-1/3 -translate-y-1/2">
            Projects
          </h2>
          <Project />
        </div>
        <div
          id="section4"
          className="scroll-section h-screen flex items-center justify-center bg-red-200 relative"
        >
          <h2 className="absolute top-24 left-1/2 -translate-x-1/2">Contact</h2>
        </div>
      </section>
    </>
  );
};

export default Engineer;
