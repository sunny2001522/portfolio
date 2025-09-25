import { getTranslations } from "next-intl/server";
import Introduction from "@/components/page/front-end/Introduction";

// app/[locale]/frontend/page.tsx
export default async function FrontEndPage() {
  const t = await getTranslations("HomePage"); // 假設你使用 HomePage 的翻譯

  return (
    <div className="h-full">
      <Introduction />
    </div>
  );
}
