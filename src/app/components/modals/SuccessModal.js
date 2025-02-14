"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import Link from "next/link";

export const SuccessModal = ({openModal, setOpenModal, header, message}) => {
 
	return (
		<>
		<div onClick={() => setOpenModal(false)} className={`fixed inset-0  flex items-center justify-center bg-black bg-opacity-50 z-50 ${!openModal ? 'hidden' : ''}`}>
			<div className="bg-white rounded-lg shadow-lg relative max-w-[300px] sm:max-w-sm mx-auto w-full p-6">
				<button
					onClick={() => setOpenModal(false)}
					className="absolute right-4 top-2 text-gray-400 hover:text-gray-600 ">
					✕
				</button>
				<div className="flex flex-col text-green-600 text-center items-center justify-between">
					<i className="fa-regular fa-circle-check text-4xl"></i>
					<h2 className="text-lg font-semibold">
						Успішно додано в кошик!
					</h2>
					<div className="flex flex-row gap-3">
						<Link
								href="/cart"
								className="w-full rounded bg-[#DD2400] hover:bg-blue-700 text-white font-semibold px-4 py-2 transition text-sm sm:text-normal"
							>
							в кошик
						</Link>
			
					<button
						onClick={() => setOpenModal(false)}
						className="bg-slate-500 px-3 py-1 font-semibold text-white rounded text-sm hover:bg-slate-800">
						закрити
					</button>
					</div>
				</div>
			</div>
		</div>

		</>
	)
}
