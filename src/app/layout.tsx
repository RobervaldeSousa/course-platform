import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/header/Header";


const nunito = Nunito({subsets: ["latin"],});

export const metadata: Metadata = {
  title: "Plataforma de cursos",
  description: "A melhor plataforma de cursos online do Brasil!",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-Br">
      <body className={`${nunito}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
