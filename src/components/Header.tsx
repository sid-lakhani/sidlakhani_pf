import Link from "next/link";

//components
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="p-8 md:pt-12 text-white fixed w-full top-0 left-0 border-b-2 border-accent md:border-0 backdrop-filter backdrop-blur-lg md:backdrop-blur-none">
      <div className="container flex justify-between items-center px-4 md:px-48">
        <Link href={"/"}>
          <div className="flex items-center">
            <h1 className="text-4xl md:text-6xl font-bold">
              sidlakhani<span className="text-accent">;</span>
            </h1>
          </div>
        </Link>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
