"use client";
import Link from "next/link";

function AdminLink({ adminPw }: { adminPw?: string }) {
  if (localStorage.getItem("token") === adminPw) {
    return (
      <Link href="/admin" className="hover:border-b">
        Admin
      </Link>
    );
  }
  return <></>;
}

export default AdminLink;
