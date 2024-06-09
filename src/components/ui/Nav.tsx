"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-3 mt-12 mx-20">
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <Link href={link.path} key={index} className={`capitalize hover:text-accent font-medium text-xl transition-all`}>
            <span className="mr-2">-</span>
            <span className={`${isActive && "text-accent underline"}`}>{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
