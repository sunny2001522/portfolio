import Image from "next/image";
import Web from "./Web";

import { useTranslations } from "next-intl";
import Bubble from "@/components/ui/Bubble";

export default function Introduction({ role }: { role: string }) {
  const t = useTranslations(role);

  return (
    <div className="relative w-full h-full snap-center snap-always  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 items-center justify-center">
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 z-50 text-wrap w-1/3">
        <h2>{t("title")}</h2>
        <p>{t("me")}</p>
        <ul className="text-sm">
          <li>{t("about.skill")}</li>
          <li>{t("about.description")}</li>
        </ul>
      </div>

      {/* 裝飾 */}
      <div className="absolute w-1/4 z-5 rotate-3 bottom-1/5 right-1/16">
        <Web />
      </div>

      <div className="w-96 h-96 z-50">
        {" "}
        {/* 設定你想要的大小 */}
        <Bubble />
      </div>

      <Image
        src="/shape/shape10.webp"
        alt="decoration 2"
        className="absolute right-1/4 top-20 z-10 w-40 animate-spin"
        unoptimized
        width={32}
        height={32}
      />

      <Image
        src="/shape/shape16.webp"
        alt="decoration 2"
        className="absolute left-0 top-20 z-10 "
        unoptimized
        width={700}
        height={700}
      />
      <Image
        src="/shape/shape3.webp"
        alt="decoration 3"
        className="absolute left-10 bottom-1/2 z-10 w-40"
        unoptimized
        width={32}
        height={32}
      />
      <Image
        src="/shape/shape4.webp"
        alt="decoration 4"
        className="absolute right-10 top-1/3 z-0 w-40"
        unoptimized
        width={32}
        height={32}
      />
      <Image
        src="/shape/shape14.webp"
        alt="liquid background"
        className="absolute top-0 z-0 "
        unoptimized
        width={300}
        height={32}
      />
      <Image
        src="/shape/shape17.webp"
        alt="decoration 44"
        className="absolute right-0 top-0 z-0 h-dvh"
        unoptimized
        width={600}
        height={2400}
      />
      <Image
        src="/shape/shape12.webp"
        alt="decoration 1"
        className="absolute left-3/4 top-20 z-0 w-40"
        unoptimized
        width={32}
        height={32}
      />
      <Image
        src="/shape/shape18.webp"
        alt="decoration 2"
        className="absolute left-1/10 bottom-1/4 z-10 "
        unoptimized
        width={200}
        height={200}
      />
      <Image
        src="/shape/shape11.webp"
        alt="decoration 2"
        className="absolute left-1/6 bottom-1/14 z-10 w-40 animate-spin"
        unoptimized
        width={32}
        height={32}
      />
    </div>
  );
}
