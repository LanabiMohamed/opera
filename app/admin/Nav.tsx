"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdAdd } from "react-icons/io";

function Nav() {
  const pathname = usePathname();
  return (
    <nav className="border-b flex">
      <Link
        href="/admin"
        className={`p-4 ${
          pathname === "/admin" ? "font-semibold border-b border-black" : ""
        }`}
      >
        Products
      </Link>

      <Link
        href="/admin/manage/products"
        className={`p-4 hover:scale-125 duration-200  ${
          pathname === "/admin/manage/products"
            ? "font-semibold border-b border-black"
            : ""
        }`}
      >
        <IoMdAdd size={23} />
      </Link>

      <Link
        href="/admin/services"
        className={`p-4 ${
          pathname === "/admin/services"
            ? "font-semibold border-b border-black"
            : ""
        }`}
      >
        Services
      </Link>

      <Link
        href="/admin/manage/services"
        className={`p-4 hover:scale-125 duration-200  ${
          pathname === "/admin/manage/services"
            ? "font-semibold border-b border-black"
            : ""
        }`}
      >
        <IoMdAdd size={23} />
      </Link>
    </nav>
  );
}

export default Nav;
