import { redirect } from "next/navigation";

function page() {
  redirect("/admin/product");
  return <div></div>;
}

export default page;
