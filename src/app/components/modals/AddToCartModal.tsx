"use client";
 
import { SingleProduct } from "@/app/components/products/SingleProduct";

type Props = {
  openCartModal: boolean;
  setOpenCartModal: (open: boolean) => void;
	isModal?: boolean;
	productId: number;
	variationId?: number;
};


export const AddToCartModal = ({
	openCartModal,
	setOpenCartModal,
	productId,
	variationId
}: Props) => {

	if(!openCartModal) return null;

	return (
		<div
      onClick={() => setOpenCartModal(false)}
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${
        !openCartModal ? "hidden" : ""
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-lg relative md:max-w-[1000px] max-w-sm mx-auto w-full p-6"
      >
        <button
          onClick={() => setOpenCartModal(false)}
          className="absolute right-4 top-2 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <div className="flex flex-col items-center justify-between">
				<SingleProduct 
					productId={productId} 
					variationId={variationId}
					isModal={true} 
					openCartModal={openCartModal} 
					setOpenCartModal={setOpenCartModal}
				/>
        </div>
      </div>
    </div>
 
	)};