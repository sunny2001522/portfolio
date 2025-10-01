import Image from "next/image";

import Phone from "@/components/ui/Phone";
import { useTranslations } from "next-intl";
import Bubble from "@/components/ui/Bubble";

export default function Introduction() {
  const t = useTranslations("Frontend");

  return (
    <div className="relative w-full h-full snap-center snap-always  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 items-center justify-center">
      <Phone />
    </div>
  );
}
