import Engineer from "@/components/page/front-end/Engineer";
import { getTranslations } from "next-intl/server";

// app/[locale]/frontend/page.tsx
export default async function FrontEndPage() {
  const t = await getTranslations("Frontend");

  // 使用數字索引的方式


  return (
    <div className="h-full">
      <Engineer/>
    </div>
  );
}
