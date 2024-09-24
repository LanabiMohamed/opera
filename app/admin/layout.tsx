import Link from "next/link";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <nav>
        <Link href="/admin">Products</Link>
        <Link href="/admin/services">Services</Link>
      </nav>
      {children}
    </main>
  );
}

export default layout;
