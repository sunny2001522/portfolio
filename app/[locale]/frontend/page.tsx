import { getTranslations } from "next-intl/server";

// app/[locale]/frontend/page.tsx
export default async function FrontEndPage() {
  const t = await getTranslations("HomePage"); // 假設你使用 HomePage 的翻譯

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>這是 FE 頁面</p>
    </div>
  );
}
