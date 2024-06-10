import Link from "next/link";

//components
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="pt-8 xl:pt-16 text-white">
      <div className="container px-48">
        {/* logo */}
        
        <Link href={"/"}>
          <h1 className="text-6xl font-bold">
            sidlakhani<span className="text-accent">;</span>
          </h1>
        </Link>

        {/* desktop nav & hire me*/}

        {/* <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire Me</Button>
          </Link>
        </div> */}

        {/* mobile nav */}

        <div className="xl:hidden">
            <MobileNav />
        </div>

      </div>
    </header>
  );
};

export default Header;
