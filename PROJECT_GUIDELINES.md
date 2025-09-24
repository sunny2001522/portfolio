# Project Guidelines

這份文件定義了本專案在使用 Gemini Code Assist 或任何 AI 輔助工具時必須遵循的準則。  
請確保所有開發、程式碼生成與修改，都符合以下規範。

---

## 📂 專案結構

/app → 主程式
/components → 元件
/pages → 頁面組件 (Next.js / React Router)
/hooks → 自訂 hooks
/store → 狀態管理 (Zustand)
/assets → 靜態資源 (圖片 / icon / 字型 / 影片)
/utils → 工具函式
/tests → 單元測試與整合測試
/public → 公開靜態檔案

---

## 程式碼規範

1. **型別嚴格**

   - 禁止使用 `any`。
   - 若型別不明，必須建立明確的介面 (`interface`) 或型別別名 (`type`)。

2. **React / Next.js**

   - 元件必須用 **函式型元件 (FC)**，搭配 Hooks。
   - 所有元件必須是 **純元件 (Pure)**，避免不必要的 re-render。
   - Props 必須定義介面，不得用 `any`。

3. **狀態管理**

   - 使用 **Zustand** 管理全域狀態。
   - Local state 優先使用 `useState` / `useReducer`，不要濫用全域 store。

4. **樣式**

   - 使用 **TailwindCSS** 作為主要樣式工具。
   - 若有共用樣式，抽離至 `globals.css` 或 `tailwind.config.ts`。

5. **動態效果**

   - 使用 **GSAP** 控制動畫。
   - 使用 **Spline Runtime API** 嵌入 3D 物件。
   - 避免在非必要情況下直接操作 DOM。

6. **i18n**
   - 使用 **next-intl** 管理國際化字串。
   - 禁止在元件中寫死字串，必須透過 next-intl key。

---

## 寫作風格

- 使用 **ESLint + Prettier** 格式化。
- 使用 **小駝峰命名 (camelCase)**，檔案使用 **kebab-case**。
- Next 元件檔名請用 **PascalCase**。
- 嚴禁 `console.log` 留在最終程式碼。

---

## 測試規範

- 使用 **Vitest / Jest + React Testing Library**。
- 每個重要的 utils 與 hooks 都需要測試。
- coverage 目標至少 80%。

---

## AI 輔助規範

當使用 Gemini Code Assist 或其他 AI 工具生成程式碼時：

- **必須符合上述規範**。
- **不要產生 `any`**，若無法推斷型別，需建立自訂型別。
- 請保持專案結構一致，不要隨意新增目錄。
- 僅能生成必要的程式碼，不要過度 scaffold。

---

## 任務目標 (for Gemini)

在本專案中，AI 的主要任務是：

1. 協助撰寫 Next.js 元件。
2. 幫助撰寫 Zustand store 與 hooks。
3. 協助 GSAP 動畫整合。
4. 協助將 Spline 物件嵌入 React 並提供互動。
5. 產生遵循 next-intl 的文字資源。
6. 提供 ESLint/Prettier 相容的程式碼。

---
