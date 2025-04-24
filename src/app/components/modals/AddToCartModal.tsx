"use client";

import Link from "next/link";
import { Product } from "@/app/types/products";
import { SingleProduct } from "../products/SingleProduct";

type Props = {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  header?: string;
  message?: string;
	isModal?: boolean;
	product: Product;
};


export const AddToCartModal = ({
	openModal,
	setOpenModal,
	header = "Успішно додано в кошик!",
	message,
	product,
}: Props) => {
	return (
		<div
      onClick={() => setOpenModal(false)}
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${
        !openModal ? "hidden" : ""
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-lg relative md:max-w-[1000px] max-w-sm mx-auto w-full p-6"
      >
        <button
          onClick={() => setOpenModal(false)}
          className="absolute right-4 top-2 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <div className="flex flex-col items-center justify-between">
          <SingleProduct product={product} isModal={true} />
        </div>
      </div>
    </div>
 
	)};