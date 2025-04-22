"use client";

import { useState } from "react";

type Props = {
  min?: number;
  max?: number;
  quantity?: number;
  onQuantityChange?: (quantity: number) => void;
};

export const ProductQuantity = ({
  min = 1,
  max = 99,
  quantity,
  onQuantityChange,
}: Props) => {
  const [localQuantity, setLocalQuantity] = useState<number>(min);

  const currentQuantity = quantity ?? localQuantity;

  const handleQuantityChange = (newQuantity: number) => {
    if (onQuantityChange) {
      onQuantityChange(newQuantity);
    } else {
      setLocalQuantity(newQuantity);
    }
  };

  const handleIncrement = () => {
    if (currentQuantity < max) {
      handleQuantityChange(currentQuantity + 1);
    }
  };

  const handleDecrement = () => {
    if (currentQuantity > min) {
      handleQuantityChange(currentQuantity - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/, "");
    const num = value ? Math.max(min, Math.min(parseInt(value, 10), max)) : min;
    handleQuantityChange(num);
  };

  return (
    <div className="relative flex items-center max-w-[8rem]">
      <button
        type="button"
        onClick={handleDecrement}
        className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
      >
        <svg
          className="w-3 h-3 text-gray-900 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 2"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
        </svg>
      </button>

      <input
        type="text"
        value={currentQuantity}
        onChange={handleInputChange}
        className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />

      <button
        type="button"
        onClick={handleIncrement}
        className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
      >
        <svg
          className="w-3 h-3 text-gray-900 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
        </svg>
      </button>
    </div>
  );
};
