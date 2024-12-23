import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "임현아 포트폴리오",
  description: "Frontend Developer Portfolio",
  openGraph: {
    images: "/main.png",
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://www.lyuna.site/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="font-pretendard">{children}</body>
    </html>
  );
}
