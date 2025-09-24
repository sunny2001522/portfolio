import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // 啟用靜態渲染
  setRequestLocale(locale);

  // 在服務器組件中使用 getTranslations 而不是 useTranslations
  const t = await getTranslations("HomePage");

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("about")}</p>
    </div>
  );
}
