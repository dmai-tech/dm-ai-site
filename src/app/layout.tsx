import type { Metadata } from "next";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
import TopHUD from "@/components/TopHUD";

export const metadata: Metadata = {
  title: "DM AI 創作者｜用 AI 幫你把想法變成東西",
  description:
    "我用 AI 做網站、小工具、內容。有想做的東西但不會寫 code？私訊聊聊。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;500;600;700&family=Noto+Sans+TC:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&family=VT323&family=Bagel+Fat+One&family=Bungee&family=Bungee+Shade&family=Bungee+Outline&family=Permanent+Marker&family=Space+Mono:wght@400;700&family=Modak&family=Honk&family=Bowlby+One&family=Rampart+One&family=Black+Han+Sans&family=Climate+Crisis&family=ZCOOL+QingKe+HuangYou&family=ZCOOL+XiaoWei&family=Long+Cang&family=Pixelify+Sans:wght@400;700&family=Silkscreen:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LoadingScreen />
        <div className="scan-overlay" aria-hidden />
        <TopHUD />
        {children}
      </body>
    </html>
  );
}
