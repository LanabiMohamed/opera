import LoadImage from "@components/LoadImage";
import { MdEdit } from "react-icons/md";

import Delete from "./Delete";
import Link from "next/link";

async function Table() {
  const res = await fetch(`${process.env.URL}/api/products`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    return <div>Failed to fetch</div>;
  }
  const products = await res.json();
  return (
    <div className="">
      {products.map(
        (product: {
          _id: string;
          title: string;
          imageUrl: string;
          type: string;
        }) => {
          const datt = new Date(products[0].createdAt);
          return (
            <div key={product._id} className="flex justify-between my-2">
              <div className="flex gap-2">
                <LoadImage
                  Css="object-contain rounded-md w-36 md:w-52"
                  Url={product.imageUrl}
                />
                <div className="whitespace-nowrap overflow-hidden">
                  <p className="font-semibold">{product.title}</p>
                  <p>{product.type}</p>
                  <p>{`${datt.getDate().toString().padStart(2, "0")} - ${(
                    datt.getMonth() + 1
                  )
                    .toString()
                    .padStart(2, "0")} - ${datt.getFullYear()}`}</p>
                </div>
              </div>
              <div>
                <Link
                  href={{
                    pathname: "/admin/manage/products",
                    query: { id: product._id },
                  }}
                >
                  <MdEdit
                    size={25}
                    className="cursor-pointer hover:scale-110 duration-150"
                  />
                </Link>
                <Delete id={product._id} />
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}

export default Table;
