
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = await getTranslations("HomePage");
  const { locale } = await params;

  return (
    <div className="flex flex-col items-center gap-6 mt-10">
      <h1>{t("title")}</h1>
      <p>{t("about")}</p>
      <div className="flex gap-4 mt-8">
        <Link
          href={`/${locale}/fe`}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        >
          FE
        </Link>
        <Link
          href={`/${locale}/pm`}
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition"
        >
          PM
        </Link>
        <Link
          href={`/${locale}/ui`}
          className="px-6 py-2 bg-purple-500 text-white rounded hover:bg-purple-700 transition"
        >
          UI
        </Link>
      </div>
    </div>
  );
}
