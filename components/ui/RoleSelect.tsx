"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Web from "../page/role/Web";

const slideData = [
  {
    title: "前端工程師",
    character: "/character/frontend.webp",
    contentImg: <Web />,
    fallbackImg: "/character/frontend.webp",
    color: "linear-gradient(to top, #96E7F1 10%, transparent 90%)",
    award: ["2023 前端黑客松優勝", "2022 UI 創意獎"],
    description: ["2025六角學院火箭隊畢業", "2021 UX 年度大賞"],
    shapes: [13, 17],
  },
  {
    title: "UIUX設計師",
    character: "/character/ui.webp",
    contentImg: <Web />,
    fallbackImg: "/character/ui.webp",
    color: "linear-gradient(to top, #FFC1B3 10%, transparent 90%)",
    award: ["2023 設計新秀獎", "2021 UX 年度大賞"],
    description: ["自由接案設計師", "曾任外商科技公司設計師"],
    shapes: [1, 16],
  },
  {
    title: "PM",
    character: "/character/frontend.webp",
    contentImg: <Web />,
    fallbackImg: "/character/frontend.webp",
    color: "linear-gradient(to top, #DCCAF1 10%, transparent 90%)",
    award: ["2022 年度專案管理獎", "2020 團隊領導獎"],
    description: ["專案管理專家", "敏捷開發實踐者"],
    shapes: [10, 14],
  },
  {
    title: "平面設計",
    character: "/character/frontend.webp",
    contentImg: <Web />,
    fallbackImg: "/character/frontend.webp",
    color: "linear-gradient(to top, #FFD98D 10%, transparent 90%)",
    award: ["2024 中華設計獎 優選", "2025 美國藝術平台Artiver Finalist"],
    description: ["自由接案設計師", "曾任外商科技公司設計師"],
    shapes: [15, 19],
  },
];

const slides = [...slideData, ...slideData, ...slideData];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const characterRef = useRef(null);
  const bgRef = useRef(null);

  // 角色切換動畫
  useGSAP(() => {
    if (characterRef.current) {
      gsap.fromTo(
        characterRef.current,
        { y: 20, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
      );
    }
  }, [activeIndex]);

  // 背景擴散動畫
  useGSAP(() => {
    if (bgRef.current) {
      gsap.fromTo(
        bgRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [activeIndex]);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden ">
      {/* 輪播圖容器 */}
      <div
        className="relative w-full h-1/3 mx-auto z-10 -translate-y-1/3"
        style={{ overflow: "visible" }}
      >
        <Swiper
          style={{
            "--swiper-navigation-color": "#8C8C8C",
            "--swiper-pagination-color": "#fff",
            overflow: "visible",
          }}
          centeredSlides={true}
          grabCursor={true}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          speed={300}
          breakpoints={{
            320: { slidesPerView: 3, spaceBetween: 1 },
            568: { slidesPerView: 5, spaceBetween: 5 },
            768: { slidesPerView: 5, spaceBetween: 30 },
          }}
          className="w-full h-full"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx} style={{ overflow: "visible" }}>
              {({ isActive, isNext, isPrev }) => {
                // 計算縮放
                let scale = 1;
                let y = 0;
                if (isActive) {
                  scale = 1;
                  y = 0;
                } else if (isPrev || isNext) {
                  scale = 0.8;
                  y = 50;
                } else {
                  scale = 0.7;
                  y = 80;
                }

                return (
                  <div
                    className="relative flex flex-col items-center justify-end bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-full shadow-inner select-none transition-all duration-700 ease-out"
                    style={{
                      transform: `translateY(${y}px) scale(${scale})`,
                      transformOrigin: "center bottom",
                      opacity: scale,
                      userSelect: "none",
                    }}
                  >
                    {/* 職位標題 */}
                    <div
                      className={`absolute -top-2 left-1/2 -translate-x-1/2 z-40 font-bold px-4 py-2 bg-gradient-to-l from-white/50 to-white/20 backdrop-blur-sm border-2 shadow-xl rounded-full whitespace-nowrap select-none transition-all duration-700 ${
                        isActive
                          ? "text-2xl md:text-3xl opacity-100"
                          : "text-xs md:text-sm opacity-60"
                      }`}
                      style={{ userSelect: "none" }}
                    >
                      {slide.title}
                    </div>

                    {/* 內容區域 */}
                    <div className="relative z-10 flex items-center justify-center  rotate-3 py-24 md:py-32 w-full overflow-hidden select-none pointer-events-none">
                      {isActive ? (
                        <div className="w-full h-full flex items-center justify-center pointer-events-auto">
                          {slide.contentImg}
                        </div>
                      ) : (
                        <img
                          src={slide.fallbackImg}
                          alt={slide.title}
                          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg opacity-60"
                          draggable="false"
                        />
                      )}
                    </div>

                    {/* 裝飾圖片 */}
                    <img
                      src={`/shape/shape${slide.shapes[0]}.webp`}
                      alt=""
                      className={`absolute left-3 top-5 w-10 md:w-30 transition-all duration-700 ${
                        isActive ? "animate-spin opacity-60" : ""
                      }`}
                      draggable="false"
                    />
                    <img
                      src={`/shape/shape${slide.shapes[1]}.webp`}
                      alt=""
                      className="absolute right-3 bottom-6 w-40 md:w-50 transition-all duration-700"
                      draggable="false"
                    />

                    {/* 漸層裝飾球 */}
                    <div className="absolute left-0 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-30 blur-xl pointer-events-none" />
                    <div className="absolute right-0 w-40 h-40 bg-gradient-to-br from-pink-400 to-yellow-400 rounded-full opacity-30 blur-xl pointer-events-none" />
                  </div>
                );
              }}
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination absolute bottom-0 left-1/2 -translate-x-1/2 z-30"></div>
      </div>

      {/* 背景圓形漸層 */}
      <div className="w-full h-1/3">
        <div
          ref={bgRef}
          className="rounded-full w-full h-full aspect-square absolute bottom-0 translate-y-1/2"
          style={{ background: slideData[activeIndex].color }}
        />
      </div>

      {/* 左下：使用說明 */}
      <div className="absolute left-10 bottom-10 z-20 max-md:left-4 max-md:bottom-4">
        <h3 className="text-xl font-semibold mb-2 max-md:text-base">
          使用說明
        </h3>
        <ul className="space-y-1 text-sm text-gray-700 max-md:text-xs">
          {slideData[activeIndex].description.map((desc, i) => (
            <li key={i}>• {desc}</li>
          ))}
        </ul>
      </div>

      {/* 右下：產品標章 */}
      <div className="absolute right-10 bottom-10 z-20 text-right max-md:right-4 max-md:bottom-4">
        <h3 className="text-xl font-semibold mb-2 max-md:text-base">
          產品標章
        </h3>
        <ul className="space-y-1 text-sm text-gray-700 max-md:text-xs">
          {slideData[activeIndex].award.map((award, i) => (
            <li key={i}>• {award}</li>
          ))}
        </ul>
      </div>

      {/* 中間角色圖 */}
      <img
        ref={characterRef}
        src={slideData[activeIndex].character}
        alt={slideData[activeIndex].title}
        className="w-56 object-cover rounded-2xl absolute left-1/2 bottom-10 -translate-x-1/2 z-20 max-md:w-40 max-md:bottom-32"
        draggable="false"
      />
    </div>
  );
};

export default Gallery;
