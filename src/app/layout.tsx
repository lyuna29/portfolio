import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "임현아 포트폴리오",
  description: "Frontend Developer Portfolio",
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
