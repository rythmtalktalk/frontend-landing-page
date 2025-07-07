import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "리듬톡톡 - 음악으로 배우는 우리 아이 첫 언어 학습",
  description: "음악 치료와 언어 교육을 결합한 혁신적인 어린이 학습 앱. 3세부터 7세까지의 어린이들이 즐거운 동요를 통해 자연스럽게 언어 능력을 기를 수 있습니다.",
  keywords: "언어치료, 언어인지교육, 발달재활, 언어교육, 언어치료사, 어린이, 동요, 음악치료",
  authors: [{ name: "리듬톡톡 팀" }],
  openGraph: {
    title: "리듬톡톡 - 음악으로 배우는 우리 아이 첫 언어 학습",
    description: "음악 치료와 언어 교육을 결합한 혁신적인 어린이 학습 앱",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
