import type { Metadata } from "next";
import { JetBrains_Mono, Kalam } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import AnimationText from "@/components/animations/AnimationText";
import PageEffect from "@/components/animations/PageEffect";
import PageTransition from "@/components/animations/PageTransition";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
  title: "sidlakhani",
  description: "Portfolio Website",
  openGraph: {
    title: "sidlakhani",
    description: "Portfolio Website",
    images: [
      {
        url: "/me.jpg",
        width: 384,
        height: 384,
        alt: "sidlakhani",
      },
    ],
    url: new URL("https://sidlakhani.tech"),
  },
  metadataBase: new URL("https://sidlakhani.tech"),
  icons: "/me.jpg",
  manifest: "/site.webmanifest",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.className}`}>
        <Header />
        <PageEffect />
        <PageTransition>
          <main className="min-h-[90dvh] xl:grid grid-cols-7 text-center xl:text-left gap-4 mx-16 md:mx-32 mt-8 content-center my-auto">
            <div className="xl:col-span-3 h-max xl:pl-8 mt-24 md:mt-32 xl:mt-40">
              <div className="xl:mt-8 font-semibold">
                <AnimationText text="Hi," />
                <AnimationText text="I am Siddhesh Lakhani!" />
                <AnimationText text="A Full-Stack Engineer" />
              </div>
              <div className="flex flex-row gap-8 mt-8 md:mt-10 xl:mt-12 xl:ml-8 font-medium justify-center xl:justify-normal">
                <Link href={"./contact"}>
                  <Button className="w-36 text-xl bg-accent text-black hover:bg-accent-hover duration-300 transition-all rounded-3xl">
                    Hire Me
                  </Button>
                </Link>
                <Link href="/resume.pdf">
                  <Button className="w-36 text-xl bg-inherit text-accent border-2 md:border-4 border-accent hover:bg-accent-hover hover:text-black duration-300 transition-all rounded-3xl">
                    Resume
                  </Button>
                </Link>
              </div>
              <Nav />
            </div>
            {children}
          </main>
        </PageTransition>
      </body>
    </html>
  );
}
