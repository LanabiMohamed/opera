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
        href="/admin/manage"
        className={`p-4  ${
          pathname === "/admin/manage"
            ? "font-semibold border-b border-black"
            : "hover:scale-125 duration-200"
        }`}
      >
        <IoMdAdd size={23} />
      </Link>

      {/* <Link
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
        className={`p-4  ${
          pathname === "/admin/manage/services"
            ? "font-semibold border-b border-black"
            : "hover:scale-125 duration-200"
        }`}
      >
        <IoMdAdd size={23} />
      </Link> */}
    </nav>
  );
}

export default Nav;
