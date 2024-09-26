function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="max-w-[70rem] mx-auto p-1">{children}</main>;
}

export default layout;
