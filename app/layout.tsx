// 這個文件是必需的，但因為我們使用 [locale] 動態路由
// 實際的 HTML 結構在 app/[locale]/layout.tsx 中定義
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
