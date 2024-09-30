import SwiperFeed from "./SwiperFeed";

async function Table() {
  const res = await fetch(`${process.env.URL}/api/products?q=latest`, {
    cache: "no-cache",
  });
  if (!res.ok) return <div>Error Getting Products</div>;
  const products = await res.json();

  return <SwiperFeed products={products} />;
}

export default Table;
