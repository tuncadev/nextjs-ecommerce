"use client";

import { useAuth } from "@/app/context/AuthProvider";
import { getProfileLink } from "@/app/utils/getProfileLink";
import Link from "next/link";

type Props = {
  openSuccessModal: boolean;
  setOpenSuccessModal: (open: boolean) => void;
	openCartModal: boolean;
  setOpenCartModal?: (open: boolean) => void;
  header?: string;
  message?: string;
};

export const SuccessModal = ({
  openSuccessModal,
	setOpenSuccessModal,
	openCartModal,
	setOpenCartModal,
  header = "Успішно додано в кошик!",
  message,
}: Props) => {
	const {user} = useAuth();
  return (
    <div
		onClick={() => {
			setOpenSuccessModal(false);
			if (openCartModal && setOpenCartModal) setOpenCartModal(false);

		}}
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${
        !openSuccessModal ? "hidden" : "" 
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-lg relative max-w-[300px] sm:max-w-sm mx-auto w-full p-6"
      >
        <button
					onClick={() => {
						setOpenSuccessModal(false);
						if (openCartModal && setOpenCartModal) setOpenCartModal(false);
					}}
          className="absolute right-4 top-2 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <div className="flex flex-col text-green-600 text-center items-center justify-between">
          <i className="fa-regular fa-circle-check text-4xl" />
          <h2 className="text-lg font-semibold">{header}</h2>
          {message && <p className="text-sm text-gray-600">{message}</p>}

          <div className="flex flex-row gap-3 mt-4">
            <Link
              href={`${user ? getProfileLink({username: user?.username, page: "cart"}) : "/cart"}`}
              className="w-full rounded bg-[#DD2400] hover:bg-blue-700 text-white font-semibold px-4 py-2 transition text-sm sm:text-normal text-center"
            >
              в кошик
            </Link>

            <button
              onClick={() => {
								setOpenSuccessModal(false);
								if (openCartModal && setOpenCartModal) setOpenCartModal(false);
							}}
              className="bg-slate-500 px-3 py-1 font-semibold text-white rounded text-sm hover:bg-slate-800"
            >
              закрити
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
