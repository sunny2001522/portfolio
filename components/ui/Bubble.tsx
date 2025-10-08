"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// 修復：使用正確的導入路徑
const Spline = dynamic(
  () =>
    import("@splinetool/react-spline/next").then((mod) => mod.default ?? mod),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg">
        <div className="text-center p-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full animate-pulse"></div>
          <p className="text-gray-600">載入 3D 場景中...</p>
        </div>
      </div>
    ),
  }
);

interface BubbleProps {
  scene?: string;
}

export default function Bubble({
  scene = "/models/bubble.splinecode",
}: BubbleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const onLoad = () => {
    console.log("Spline scene loaded successfully from:", scene);
    setIsLoaded(true);
  };

  const onError = (error: unknown) => {
    console.error("Spline loading error:", error);
    setHasError(true);
  };

  // 事件隔離
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const stopEvent = (e: Event) => {
      e.stopPropagation();
    };

    const events = ["mousedown", "mouseup", "mousemove"];
    events.forEach((event) => {
      container.addEventListener(event, stopEvent);
    });

    return () => {
      events.forEach((event) => {
        container.removeEventListener(event, stopEvent);
      });
    };
  }, []);

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg">
        <div className="text-center p-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full"></div>
          <p className="text-gray-600 mb-2">無法載入 3D 場景</p>
          <p className="text-sm text-gray-400">請確認檔案路徑：{scene}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative bg-transparent"
      style={{
        isolation: "isolate",
        minHeight: "200px",
      }}
    >
      <Spline scene={scene} onLoad={onLoad} onError={onError} />
    </div>
  );
}
