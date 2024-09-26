import Nav from "./Nav";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="max-w-[70rem] mx-auto p-2">
      <Nav /> {children}
    </main>
  );
}

export default layout;
