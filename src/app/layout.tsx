import type { Metadata } from "next";
import { JetBrains_Mono, Zeyada } from "next/font/google";
import "./globals.css";

//components
import Nav from "@/components/Nav";
import PageTransition from "@/components/animations/PageTransition";
import AnimationText from "@/components/animations/AnimationText";
import Header from "@/components/Header";
import PageEffect from "@/components/animations/PageEffect";
import { Button } from "@/components/ui/button";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains",
});

const zeyada = Zeyada({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-architects",
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
      <body className={`${jetbrainsMono.variable} ${zeyada.variable}`}>
        <Header />
        <PageEffect />
        <PageTransition>
          <main>
            <div className="xl:grid grid-cols-7 flex flex-col items-center xl:items-start text-center xl:text-left justify-center xl:justify-normal gap-4 mx-16 xl:mx-32 mt-8">
              <div className="xl:col-span-3 h-max xl:pl-8 mt-24 xl:mt-40">
                <div className="xl:mt-8 font-semibold">
                  <AnimationText text="Hi," />
                  <AnimationText text="I am Siddhesh Lakhani!" />
                  <AnimationText text="A Full-Stack Engineer." />
                </div>
                <div className="flex flex-row gap-8 mt-8 xl:mt-12 xl:ml-8 font-medium">
                  <Button className="w-36 text-xl bg-accent text-black hover:opacity-80 hover:bg-accent duration-300 transition-all">
                    Hire Me
                  </Button>
                  <Button className="w-36 text-xl bg-inherit text-accent border-4 border-accent hover:opacity-90 hover:bg-accent hover:text-black duration-200 transition-a">
                    Resume
                  </Button>
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
