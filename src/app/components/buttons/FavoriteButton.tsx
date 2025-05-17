"use client";
import React from "react";

type Props = {
  isFavorite: boolean;
  onClick: (e: React.MouseEvent) => void;
};

const FavoriteButton: React.FC<Props> = ({ isFavorite, onClick }) => {
  return (
    <div
      className={`${
        isFavorite
          ? "bg-customRed border-customRed text-white"
          : "bg-white border-customRed border-y border-l text-customRed hover:text-white hover:bg-customRed"
      } group/inner flex group-hover/outer:right-0 hover:cursor-pointer border-customRed border-y border-l hover:bg-customRed justify-start items-center w-8 h-[20px] transition-all z-10 duration-500 absolute right-0 lg:-right-6 top-[13px] rounded-tl-md rounded-bl-md`}
      style={{ touchAction: "manipulation" }}
    >
      <button onClick={onClick} className="w-full h-full flex items-center">
        <i className={`${isFavorite ? "fa-solid" : "fa-regular"} pl-2 text-md fa-heart`}></i>
      </button>
    </div>
  );
};

export default FavoriteButton;
