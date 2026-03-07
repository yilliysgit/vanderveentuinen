import type { Metadata } from "next";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "Van der Veen — Exclusieve tuinen & buitenruimtes",
  description:
    "Wij ontwerpen en realiseren tijdloze buitenruimtes voor particulieren die geen genoegen nemen met gewoon.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body>
        <Header />
        <main>{children}</main>
         <Footer />
      </body>
    </html>
  );
};