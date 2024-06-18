"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { navLinks } from "@/constants/nav";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] md:text-[40px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="text-3xl md:text-4xl">
          sl<span className="text-accent">;</span>
        </div>

        {/* nav */}
        <nav className="flex flex-col gap-8 md:gap-12 mt-10 md:mt-14">
          {navLinks.map((navLinks, index) => {
            return (
              <Link
                href={navLinks.path}
                key={index}
                className={`${
                  navLinks.path === pathname &&
                  "text-accent underline"
                } capitalize hover:text-accent font-medium text-xl transition-all`}
              >
                {navLinks.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
