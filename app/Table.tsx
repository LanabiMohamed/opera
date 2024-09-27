// import LoadImage from "@components/LoadImage";
// import Link from "next/link";

interface Product {
  _id: string;
  imageUrl: string;
  title: string;
  definition: string;
  destination: string[];
  variances: {
    quantity: string;
    price: number;
  }[];
}

async function Table() {
  // const res = await fetch(`${process.env.URL}/api/products?q=latest`, {
  //   cache: "no-cache",
  // });
  // if (!res.ok) return <div>Error Getting Products</div>;
  // const products = await res.json();

  return (
    <div className="my-4">
      {/* <div className="flex gap-2 overflow-y-auto styled-scrollbar pb-2">
        {products.map((product: Product) => (
          <Link
            href={`/product?id=${product._id}`}
            key={product._id}
            className="min-w-80"
          >
            <LoadImage
              Css="w-full h-32 md:h-52 object-contain rounded-lg"
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
      </div> */}
    </div>
  );
}

export default Table;
