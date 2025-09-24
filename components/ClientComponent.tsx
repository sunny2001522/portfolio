"use client";

import { useTranslations } from "next-intl";

export default function ClientComponent() {
  // 在客戶端組件中可以使用 useTranslations hook
  const t = useTranslations("HomePage");

  return (
    <div>
      <button onClick={() => alert(t("title"))}>{t("about")}</button>
    </div>
  );
}
