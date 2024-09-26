async function Table() {
  const res = await fetch("http://localhost:3000/api/products");
  if (!res.ok) {
    return <div>Failed to fetch</div>;
  }
  const products = await res.json();
  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>{product.title}</div>
      ))}
    </div>
  );
}

export default Table;
