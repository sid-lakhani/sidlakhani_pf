import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
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
      <body className={jetbrainsMono.className}>
        <Header />
        <PageEffect />
        <PageTransition>
          <main>
            <div className="grid md:grid-cols-7 gap-0 mx-32">
              <div className="md:col-span-3 h-max mt-8 pl-8">
                <div className="mt-8 font-semibold">
                  <AnimationText text="Hi," />
                  <AnimationText text="I am Siddhesh Lakhani!" />
                  <AnimationText text="A Full-Stack Engineer." />
                </div>
                <div className="flex flex-row gap-8 mt-12 ml-8 font-medium">
                  <Button className="w-36 text-md bg-accent text-black hover:opacity-80 hover:bg-accent duration-300 transition-all">
                    Hire Me
                  </Button>
                  <Button className="w-36 text-md bg-inherit text-accent border-4 border-accent hover:opacity-90 hover:bg-accent hover:text-black duration-200 transition-a">
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
