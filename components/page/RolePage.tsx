"use client";

import { useTranslations } from "next-intl";
import RolePageClient from "./RolePageClient";
import { RoleData } from "@/lib/types";

interface Props {
  role: string;
  data: RoleData;
}

export default function RolePage({ role, data }: Props) {
  const t = useTranslations("RolePage");

  if (!data) {
    return <div>{t("roleNotFound")}</div>;
  }

  return <RolePageClient data={data} role={role} />;
}
