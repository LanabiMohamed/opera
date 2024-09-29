import CheckAdmin from "@components/CheckAdmin";
import Nav from "./Nav";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const AdminPw = process.env.adminPw!;
  return (
    <main className="max-w-[70rem] mx-auto p-2">
      <CheckAdmin AdminPw={AdminPw}>
        <Nav />
        {children}
      </CheckAdmin>
    </main>
  );
}

export default layout;
