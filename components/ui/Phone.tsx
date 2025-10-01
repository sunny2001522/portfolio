"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

interface SplineApp {
  setVariable: (name: string, value: string | number) => void;
  findObjectByName: (name: string) => SplineObject | null;
  emitEvent: (eventName: string, data?: unknown) => void;
}

interface SplineObject {
  name: string;
  emitEvent: (eventName: string) => void;
}

// 螢幕選項
const buttonConfigs = [
  {
    id: "project1",
    name: "專案一",
    screen1: "/web/web1.webp",
    screen2: "/web/web2.webp",
    color: "bg-blue-500",
  },
  {
    id: "project2",
    name: "專案二",
    screen1: "/web/web2.webp",
    screen2: "/web/web3.webp",
    color: "bg-green-500",
  },
  // { id: "music", name: "音樂", color: "bg-pink-500" },
  // { id: "settings", name: "設定", color: "bg-gray-500" },
];

export default function InteractivePhone() {
  const splineRef = useRef<SplineApp | null>(null);
  const [currentScreen, setCurrentScreen] = useState("home");
  const [isLoaded, setIsLoaded] = useState(false);
  const [rotation, setRotation] = useState(0);

  const onLoad = (splineApp: SplineApp) => {
    splineRef.current = splineApp;
    setIsLoaded(true);
    console.log("Spline loaded successfully");

    // 初始化：找到 Screen 物件
    const screenObject = splineApp.findObjectByName("Screen");
    if (screenObject) {
      console.log("Screen object found:", screenObject.name);
    } else {
      console.warn(
        "Screen object not found. Available objects need to be checked."
      );
    }
  };

  // 更換螢幕內容
  const changeScreen = (
    screen1Url: string,
    screen2Url: string,
    buttonId: string
  ) => {
    if (!splineRef.current) return;

    try {
      // 使用 setVariable 更新 Spline 中的圖片 URL
      splineRef.current.setVariable("screen1", screen1Url);
      splineRef.current.setVariable("screen2", screen2Url);

      setCurrentScreen(buttonId);
      console.log(`Changed screens for ${buttonId}:`, {
        screen1: screen1Url,
        screen2: screen2Url,
      });
    } catch (error) {
      console.error("Error changing screen:", error);
    }
  };

  // 旋轉手機
  const rotatePhone = (angle: number) => {
    if (!splineRef.current) return;

    try {
      // 設定旋轉角度變數
      splineRef.current.setVariable("phoneRotation", angle);

      // 或觸發旋轉事件
      const phoneObject =
        splineRef.current.findObjectByName("iPhone 16 Pro I1");
      if (phoneObject) {
        phoneObject.emitEvent("rotate");
      }

      setRotation(angle);
      console.log(`Rotated to: ${angle}°`);
    } catch (error) {
      console.error("Error rotating phone:", error);
    }
  };

  // 重置視角
  const resetView = () => {
    if (!splineRef.current) return;

    try {
      splineRef.current.emitEvent("resetCamera");
      setRotation(0);
    } catch (error) {
      console.error("Error resetting view:", error);
    }
  };

  return (
    <div className="relative w-full h-screen ">
      {/* Spline 3D 場景 */}
      <div className="w-full h-full">
        <Spline scene="/models/iphone.splinecode" onLoad={onLoad} />
      </div>

      {/* 控制面板 */}
      {isLoaded && (
        <>
          {/* 螢幕切換按鈕 */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-2xl">
              <div className="flex gap-2">
                {buttonConfigs.map((config) => (
                  <button
                    key={config.id}
                    onClick={() =>
                      changeScreen(config.screen1, config.screen2, config.id)
                    }
                    className={`px-6 py-3 rounded-xl font-medium transition-all transform hover:scale-105 ${
                      currentScreen === config.id
                        ? `${config.color} text-white shadow-lg`
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {config.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
