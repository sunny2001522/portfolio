import Engineer from "@/components/page/front-end/Engineer";
import { getTranslations } from "next-intl/server";

// app/[locale]/frontend/page.tsx
export default async function FrontEndPage() {
  const t = await getTranslations("Frontend");

  // 使用數字索引的方式
  const aboutItems = [
    t("about.skill"), // 注意這裡要用 about.0 而不是 '0'
    t("about.hobby"),
    t("about.description"),
  ];

  return (
    <div className="h-full">
      <Engineer
        introductionTitle={t("title")}
        introductionAbout={aboutItems} // 使用 aboutItems 而不是 t("about", { returnObjects: true })
        introductionMe={t("me")}
      />
    </div>
  );
}
