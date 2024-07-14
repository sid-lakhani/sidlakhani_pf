import type { Metadata } from "next";
import { JetBrains_Mono, Kalam } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import LayoutElements from "@/components/LayoutElements";
import PageTransition from "@/components/animations/PageTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-kalam",
});

export const metadata: Metadata = {
  title: "Portfolio | Siddhesh Lakhani",
  description:
    "Computer Engineer with significant interest in Website Development",
  authors: {
    name: "Siddhesh Lakhani",
    url: "https://sidlakhani.tech/",
  },
  creator: "Siddhesh Lakhani",
  publisher: "Siddhesh Lakhani",
  keywords: [
    "Portfolio",
    "Siddhesh Lakhani",
    "Full-Stack Engineer",
    "Web Developer",
  ],
  openGraph: {
    type: "website",
    url: "https://sidlakhani.tech/",
    title: "Portfolio | Siddhesh Lakhani",
    description: "Computer Engineer with significant interest in Website Development",
    siteName: "Siddhesh Lakhani Portfolio",
    images: [
      {
        url: "/me.jpg",
        alt: "Hey there, I am Siddhesh Lakhani",
      },
    ],
  },
  twitter: {
    creator: "@sidlakhani_",
    creatorId: "x.com/sidlakhani_",
    site: "https://sidlakhani.tech/",
    title: "Portfolio | Siddhesh Lakhani",
    images: [
      {
        url: "/me.jpg",
        alt: "Hey there, I am Siddhesh Lakhani",
      },
    ],
  },
  metadataBase: new URL("https://sidlakhani.tech"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.className} ${kalam.variable} min-h-[100dvh] `}>
        <Header />
        <PageTransition>
          <main className="min-h-[100dvh] xl:grid grid-cols-7 text-center xl:text-left gap-4 mx-16 md:mx-32 items-center">
            <LayoutElements />
            {children}
          </main>
        </PageTransition>
      </body>
    </html>
  );
}
