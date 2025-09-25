import { getTranslations } from "next-intl/server";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";

// app/[locale]/frontend/page.tsx
export default async function Header() {
  const t = await getTranslations("HomePage");

  return (
    <div className="flex w-full justify-between max-w-330 mx-auto py-3 ">
      <div className="flex">
        <Image
          src="/shape/shape1.webp"
          alt="hero image"
          className="h-8 w-8"
          width={32}
          height={32}
        />
        <h1 className="text-xl font-bold">{t("title")}</h1>
      </div>

      <LanguageSwitcher />
    </div>
  );
}
