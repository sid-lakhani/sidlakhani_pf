"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants/nav";

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="xl:flex flex-col gap-2 mt-12 mx-20 hidden">
      {navLinks.map((navLinks, index) => {
        const isActive = navLinks.path === pathname;
        return (
          <Link href={navLinks.path} key={index} className={`capitalize hover:text-accent font-medium space-x-3 text-xl transition-all`}>
            <span className="mr-2">-</span>
            <span className={`${isActive && "text-accent border-b-2 border-accent"}`}>{navLinks.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
