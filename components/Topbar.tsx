import Link from "next/link";
import PhoneNav from "./PhoneNav";
import Search from "./Search";
import logo from "@public/logo.png";
import Image from "next/image";

const navs = [
  { title: "Products", href: "/products" },
  { title: "Painter", href: "/painter" },
  // { title: "Inspiration", href: "/inspiration" },
  { title: "How to & Tips", href: "/tips" },
  { title: "About us", href: "/aboutus" },
];

function TopBar() {
  return (
    <div>
      <div className="md:bg-black md:text-white border-b">
        <div className="flex justify-between max-w-[70rem] p-3 mx-auto items-center">
          <PhoneNav navs={navs} />
          <Link href="/">
            <Image
              alt="logo"
              src={logo}
              height={26}
              className="w-auto h-auto"
            />
          </Link>
          <nav className="hidden md:flex gap-3">
            {navs.map((nav) => (
              <Link key={nav.title} href={nav.href} className="hover:border-b">
                {nav.title}
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
