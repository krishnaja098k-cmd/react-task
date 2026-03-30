import { useState } from "react";

function ProductFilter() {
  const [price, setPrice] = useState("");

  const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Tablet", price: 15000 },
    { name: "Headphones", price: 3000 }
  ];

  const filtered = products.filter((p) =>
    price === "" ? true : p.price <= price
  );

  return (
    <div>
      <h2>Product Filter</h2>

      <input
        type="number"
        placeholder="Enter max price"
        onChange={(e) => setPrice(e.target.value)}
      />

      <ul>
        {filtered.map((p, i) => (
          <li key={i}>
            {p.name} - ₹{p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductFilter;