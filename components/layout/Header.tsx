"use client";

import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

// app/[locale]/frontend/page.tsx
export default function Header() {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  return (
    <div className="flex w-full    py-3 backdrop-blur-sm bg-white/30 items-center px-4 fixed z-[9999]">
      <div className="flex mx-auto max-w-330 justify-between w-full">
        <div className="flex ">
          <Image
            src="/shape/shape1.webp"
            alt="hero image"
            className="h-8 w-8"
            width={32}
            height={32}
          />
          <Link href={`/${locale}`}>
            {" "}
            <h1 className="text-xl font-bold ">
              {t("title")}
            </h1>
          </Link>
        </div>

        <LanguageSwitcher />
      </div>
    </div>
  );
}
