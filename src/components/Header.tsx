import Link from "next/link";

//components
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="custom-blur p-8 md:p-10 xl:py-12 text-white fixed w-full top-0 left-0 border-b-2 border-accent xl:border-0 z-50">
      <div className="flex justify-between items-center px-4 md:px-8 xl:px-24">
        <Link href={"/"}>
          <div className="flex items-center">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold">
              sidlakhani<span className="text-accent">;</span>
            </h1>
          </div>
        </Link>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
