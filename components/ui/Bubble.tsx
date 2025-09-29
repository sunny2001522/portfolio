"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function Bubble() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // 強制移除所有可能的 logo 元素
  const forceRemoveLogo = () => {
    // 移除所有絕對定位的 div（通常是 logo）
    const absoluteDivs = document.querySelectorAll(
      'div[style*="position: absolute"]'
    );
    absoluteDivs.forEach((div) => {
      const element = div as HTMLElement;
      // 檢查是否在右下角或包含 Spline 相關內容
      if (
        element.style.bottom ||
        element.style.right ||
        element.textContent?.toLowerCase().includes("spline") ||
        element.innerHTML.includes("spline") ||
        element.querySelector("svg") ||
        element.querySelector('a[href*="spline"]')
      ) {
        element.remove();
      }
    });

    // 移除所有 canvas 後的 div
    const canvases = document.querySelectorAll("canvas");
    canvases.forEach((canvas) => {
      let nextSibling = canvas.nextElementSibling;
      while (nextSibling) {
        if (nextSibling.tagName === "DIV") {
          nextSibling.remove();
          break;
        }
        nextSibling = nextSibling.nextElementSibling;
      }
    });

    // Shadow DOM 處理
    const viewers = document.querySelectorAll("spline-viewer");
    viewers.forEach((viewer) => {
      if (viewer.shadowRoot) {
        const logos = viewer.shadowRoot.querySelectorAll(
          '#logo, [class*="logo"], [data-spline="logo"]'
        );
        logos.forEach((logo) => logo.remove());
      }
    });
  };

  const onLoad = (splineApp: any) => {
    console.log("Spline loaded:", splineApp);
    setIsLoaded(true);
    setHasError(false);

    // 立即移除 logo
    forceRemoveLogo();

    // 延遲多次執行確保完全移除
    setTimeout(forceRemoveLogo, 100);
    setTimeout(forceRemoveLogo, 500);
    setTimeout(forceRemoveLogo, 1000);
    setTimeout(forceRemoveLogo, 2000);
  };

  const onError = (error: any) => {
    console.error("Spline error:", error);
    setHasError(true);
  };

  // 監控 DOM 變化，即時移除新出現的 logo
  useEffect(() => {
    const observer = new MutationObserver(() => {
      forceRemoveLogo();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => observer.disconnect();
  }, []);

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
      <div className="w-full h-full flex items-center justify-center bg-red-50 text-red-600">
        載入 3D 場景失敗
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
      {/* 全域 CSS 隱藏 */}
      <style jsx global>{`
        canvas + div,
        canvas ~ div,
        div[style*="position: absolute"][style*="bottom"],
        div[style*="position: absolute"][style*="right"],
        a[href*="spline.design"],
        spline-viewer::part(logo) {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
        }
      `}</style>

      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-pulse text-gray-500">載入中...</div>
        </div>
      )}

      <Spline
        scene="https://prod.spline.design/77aQePmYkMVhVkG7/scene.splinecode"
        onLoad={onLoad}
        onError={onError}
      />
    </div>
  );
}
