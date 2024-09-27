import LoadImage from "@components/LoadImage";
import Link from "next/link";
import Pagin from "./Pagin";
import { Suspense } from "react";
import emptyState from "@public/emptystate.png";

interface Product {
  _id: string;
  imageUrl: string;
  title: string;
  type: string;
  definition: string;
  destination: string[];
  properties: string[];
  variances: {
    quantity: string;
    price: number;
  }[];
  colors: string[];
}

async function Table({
  filters: { t, p },
}: {
  filters: {
    t: string;
    p: string;
  };
}) {
  const res = await fetch(`${process.env.URL}/api/products?type=${t}&p=${p}`, {
    cache: "no-cache",
  });
  if (!res.ok) return <div>Error Getting Products</div>;
  const { products, count } = await res.json();

  if (products.length === 0)
    return (
      <div className="flex justify-center items-center flex-col gap-4 py-32">
        <img src={emptyState.src} />
        <h2>No results here</h2>
      </div>
    );
  return (
    <div className="my-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {products.map((product: Product) => (
          <Link href={`/product?id=${product._id}`} key={product._id}>
            <LoadImage
              Css="w-full h-32 md:h-52 object-cover rounded-lg"
              Url={product.imageUrl}
            />
            <div className="p-1 font-semibold">
              <p>{product.title}</p>
              <p className="text-gray-800">
                {product.variances[0].price} Dzd /{" "}
                {product.variances[0].quantity}
              </p>
              <div className="flex flex-wrap gap-1 md:gap-2 text-xs md:text-sm mt-1">
                {product.destination.map((property) => (
                  <p
                    key={property}
                    className="text-gray-600 bg-green-300 rounded-md px-1"
                  >
                    {property}
                  </p>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Suspense>
        <Pagin p={p} count={count} />
      </Suspense>
    </div>
  );
}

export default Table;
