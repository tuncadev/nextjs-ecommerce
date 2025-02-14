"use client"; // Must be a Client Component

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="text-center">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()} className="px-4 py-2 bg-red-500 text-white rounded">
        Try Again
      </button>
    </div>
  );
}
