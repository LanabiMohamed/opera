import Link from "next/link";
import PhoneNav from "./PhoneNav";
import Search from "./Search";
import logo from "@public/logo.png";
import Image from "next/image";

const navs = [
  { name: "Colors", href: "/colors" },
  { name: "Products", href: "/products" },
  { name: "Painter", href: "/painter" },
  { name: "Inspiration", href: "/inspiration" },
  { name: "How to & Tips", href: "/tips" },
];

function TopBar() {
  return (
    <div>
      <div className="md:bg-black md:text-white border-b">
        <div className="flex justify-between max-w-[70rem] p-3 mx-auto items-center">
          <PhoneNav />
          <Link href="/">
            <Image alt="logo" src={logo} className="h-8 w-28" />
          </Link>

          <nav className="hidden md:flex gap-3">
            {navs.map((nav) => (
              <Link key={nav.name} href={nav.href} className="hover:border-b">
                {nav.name}
              </Link>
            ))}
          </nav>
          <div className="md:hidden w-10" />
        </div>
      </div>
      <Search />
    </div>
  );
}

export default TopBar;
