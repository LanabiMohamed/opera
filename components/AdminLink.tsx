"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

function AdminLink({ adminPw }: { adminPw?: string }) {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (localStorage && localStorage.getItem("token") === adminPw) {
      setIsAdmin(true);
    }
  }, []);

  return isAdmin ? (
    <Link href="/admin" className="hover:border-b">
      Admin
    </Link>
  ) : (
    <></>
  );
}

export default AdminLink;
