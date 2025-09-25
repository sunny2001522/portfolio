import { getTranslations } from "next-intl/server";

// app/[locale]/frontend/page.tsx
export default async function Header() {
  const t = await getTranslations("HomePage");

  return (
    <div className="flex w-full">
      <h1>{t("title")}</h1>
      <p>這是 FE 頁面</p>
    </div>
  );
}
