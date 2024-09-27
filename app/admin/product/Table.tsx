import LoadImage from "@components/LoadImage";
import { MdEdit } from "react-icons/md";
import Delete from "./Delete";
import Link from "next/link";
import Pagin from "./Pagin";
import { Suspense } from "react";

async function Table({ p }: { p: string }) {
  const res = await fetch(`${process.env.URL}/api/manage/products?p=${p}`, {
    cache: "no-cache",
  });
  if (!res.ok) return <div>Failed to fetch</div>;

  const { products, count } = await res.json();
  return (
    <div>
      {products.map(
        (
          product: {
            _id: string;
            title: string;
            imageUrl: string;
            type: string;
            createdAt: string;
          },
          index: number
        ) => {
          const datt = new Date(product.createdAt);
          return (
            <div
              key={product._id}
              className={`flex justify-between my-2 ${
                index && "border-t border-gray-400"
              }`}
            >
              <Link
                href={{
                  pathname: "/product",
                  query: { id: product._id },
                }}
                className="flex gap-2 flex-1"
              >
                <Suspense
                  fallback={
                    <div className="w-36 md:w-52 h-28 rounded-lg loading--background"></div>
                  }
                >
                  <LoadImage
                    Css="object-contain rounded-md w-36 md:w-52"
                    Url={product.imageUrl}
                  />
                </Suspense>
                <div className="whitespace-nowrap overflow-hidden">
                  <p className="font-semibold">{product.title}</p>
                  <p>{product.type}</p>
                  <p>{`${datt.getDate().toString().padStart(2, "0")} - ${(
                    datt.getMonth() + 1
                  )
                    .toString()
                    .padStart(2, "0")} - ${datt.getFullYear()}`}</p>
                </div>
              </Link>
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
      <Pagin p={p} count={count} />
    </div>
  );
}

export default Table;
