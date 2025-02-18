"use client";
import React, { useEffect, useState } from "react";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/redis/categories");
        if (!response.ok) throw new Error("Failed to fetch categories");

        const data = await response.json();
        if (Array.isArray(data.categories)) {
          setCategories(data.categories); // ✅ Use `data.categories`
        } else {
          throw new Error("Invalid data format");
        }
      } catch (err) {
        setError(err.message); // ✅ Fix error handling
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p className="text-red-500">❌ {error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <ul className="list-disc pl-5">
        {categories.map((category) => (
          <li key={category.id} className="text-lg">
            {category.name} {/* ✅ Display category name */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesPage;
