import { getTranslations } from "next-intl/server";
import LanguageSwitcher from "./LanguageSwitcher";

// app/[locale]/frontend/page.tsx
export default async function Header() {
  const t = await getTranslations("HomePage");

  return (
    <div className="flex w-full justify-between max-w-330 mx-auto py-3">
      <h1>{t("title")}</h1>
      <LanguageSwitcher />
    </div>
  );
}
