import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import './styles/globals.css';

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"]
});

export const metadata: Metadata = {
  title: "Accueil | Blu d\'azur",
  description: "Blu Azur vous propose des appartements élégants et spacieux, conçus pour accueillir de 2 à 6 personnes. Offrant un cadre confortable et moderne, ils sont parfaits pour une escapade détente ou un séjour prolongé.",
  icons: { icon: '/favicon.png', shortcut: '/favicon.png' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${mulish.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
