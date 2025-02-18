"use client";
import React, { useEffect, useState } from "react";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/redis/products");
        if (!response.ok) throw new Error("Failed to fetch products");

        const data = await response.json();
        if (Array.isArray(data.products)) {
          setProducts(data.products); // ✅ Use `data.products`
        } else {
          throw new Error("Invalid data format");
        }
      } catch (err) {
        setError(err.message); // ✅ Fix error handling
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p className="text-red-500">❌ {error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ul className="list-disc pl-5">
        {products.map((product) => (
          <li key={product.id} className="text-lg">
            {product.name} {/* ✅ Display product name */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
