"use client";
import React from "react";

type Props = {
  inCart: boolean;
  onClick: (e: React.MouseEvent) => void;
};

const CartButton: React.FC<Props> = ({ inCart, onClick }) => {
  return (
    <div
      className={`${
        inCart
          ? "bg-customGreen border-customGreen text-white"
          : "bg-white text-customRed border-customRed"
      } group/inner flex group-hover/outer:right-0 hover:cursor-pointer border-y border-l hover:bg-customRed justify-start items-center w-8 h-[20px] transition-all z-10 duration-500 absolute right-0 lg:-right-6 top-[35px] rounded-tl-md rounded-bl-md`}
    >
      <i
        onClick={onClick}
        className="fa-solid fa-cart-plus group-hover/inner:text-white pl-2 text-md"
      ></i>
    </div>
  );
};

export default CartButton;
