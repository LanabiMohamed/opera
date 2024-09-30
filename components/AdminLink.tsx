"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

function AdminLink({
  adminPw,
  ToggleOff,
}: {
  adminPw?: string;
  ToggleOff?: () => void;
}) {
  const [isAdmin, setIsAdmin] = useState(true);
  useEffect(() => {
    if (localStorage && localStorage.getItem("token") === adminPw) {
      setIsAdmin(true);
    }
  }, []);

  return isAdmin ? (
    <>
      <Link href="/admin" className="hover:border-b hidden md:block">
        Admin
      </Link>
      <div onClick={ToggleOff} className="block md:hidden">
        <Link
          href="/admin"
          className="flex justify-between items-center py-3 text-gray-700"
        >
          <p>Admin</p>
        </Link>
        <div className="w-full bg-gray-400 h-[1px]" />
      </div>
    </>
  ) : (
    <></>
  );
}

export default AdminLink;
