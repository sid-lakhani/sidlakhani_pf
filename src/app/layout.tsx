import type { Metadata } from "next";
import { JetBrains_Mono, Kalam } from "next/font/google";
import "./globals.css";
import Head from "next/head";

//components
import Nav from "@/components/Nav";
import PageTransition from "@/components/animations/PageTransition";
import AnimationText from "@/components/animations/AnimationText";
import Header from "@/components/Header";
import PageEffect from "@/components/animations/PageEffect";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>sidlakhani</title>
        <meta name="description" content="Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/public/me.jpg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:title" content="sidlakhani" />
        <meta property="og:description" content="Portfolio Website" />
        <meta property="og:image" content="https://sidlakhani.tech/_next/image?url=%2Fme.jpg&w=384&q=75" />
        <meta property="og:url" content="https://sidlakhani.tech" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body className={`${jetbrainsMono.variable} ${kalam.variable}`}>
        <Header />
        <PageEffect />
        <PageTransition>
          <main>
            <div className="xl:grid grid-cols-7 flex flex-col items-center xl:items-start text-center xl:text-left justify-center xl:justify-normal gap-4 mx-16 md:mx-32 mt-8">
              <div className="xl:col-span-3 h-max xl:pl-8 mt-24 md:mt-32 xl:mt-40">
                <div className="xl:mt-8 font-semibold">
                  <AnimationText text="Hi," />
                  <AnimationText text="I am Siddhesh Lakhani!" />
                  <AnimationText text="A Full-Stack Engineer ." />
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
            </div>
          </main>
        </PageTransition>
      </body>
    </html>
  );
}
