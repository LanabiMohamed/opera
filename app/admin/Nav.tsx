"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdAdd } from "react-icons/io";

function Nav() {
  const pathname = usePathname();
  return (
    <nav className="border-b flex">
      <ul className="flex">
        <li>
          <Link
            href="/admin"
            className={`p-4 ${
              pathname === "/admin" ? "font-semibold border-b border-black" : ""
            }`}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            href="/admin/manage"
            className={`p-4 ${
              pathname === "/admin/manage"
                ? "font-semibold border-b border-black"
                : "hover:scale-125 duration-200"
            }`}
          >
            <IoMdAdd size={23} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
