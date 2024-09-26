async function Table() {
  const res = await fetch(`${process.env.URL}/api/products`);
  if (!res.ok) {
    return <div>Failed to fetch</div>;
  }
  const products = await res.json();
  return (
    <div>
      {products.map((product: { _id: string; title: string }) => (
        <div key={product._id}>{product.title}</div>
      ))}
    </div>
  );
}

export default Table;
