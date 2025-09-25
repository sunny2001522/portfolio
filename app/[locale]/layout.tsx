import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "../globals.css";
import { Climate_Crisis } from "next/font/google";

const climateCrisis = Climate_Crisis({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-climate", // 使用 CSS 變數
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // 等待 params
  const { locale } = await params;

  // 啟用靜態渲染
  setRequestLocale(locale);

  // 提供消息給客戶端組件
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`flex min-h-screen flex-col justify-between ${climateCrisis.variable}`}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="h-screen">
            <Header />
            <main className="overflow-y-auto h-full">{children}</main>
          </div>

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
