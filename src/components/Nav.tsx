"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "about",
    path: "/",
  },
  {
    name: "skills",
    path: "/skills",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="xl:flex flex-col gap-2 mt-12 mx-20 hidden">
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <Link href={link.path} key={index} className={`capitalize hover:text-accent font-medium space-x-3 text-xl transition-all`}>
            <span className="mr-2">-</span>
            <span className={`${isActive && "text-accent underline"}`}>{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
