import RoleSelect from "@/components/ui/RoleSelect";

import { getTranslations } from "next-intl/server";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = await getTranslations("HomePage");

  return (
    <div className="flex flex-col items-center gap-6 mt-10">
      <h1>{t("title")}</h1>
      <p>{t("about")}</p>
      <div className="mt-8 w-full">
        <RoleSelect role={t("role.fe")} />
      </div>
    </div>
  );
}
