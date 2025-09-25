import { getTranslations } from "next-intl/server";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";
import decor1 from "../asset/decor/decor1.webp";

// app/[locale]/frontend/page.tsx
export default async function Header() {
  const t = await getTranslations("HomePage");

  return (
    <div className="flex w-full justify-between max-w-330 mx-auto py-3">
      <div className="flex">
        <Image src={decor1} alt="hero image" className="h-8 w-8" />
        <h1 className="text-xl font-bold">{t("title")}</h1>
      </div>

      <LanguageSwitcher />
    </div>
  );
}
