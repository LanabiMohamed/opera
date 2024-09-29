import { Suspense } from "react";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense>{children}</Suspense>;
}

export default layout;
