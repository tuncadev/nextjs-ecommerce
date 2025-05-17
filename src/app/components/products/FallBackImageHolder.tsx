import React from 'react'
import { FaRegImages } from "react-icons/fa6";

export const FallBackImageHolder = () => {

	return (
		<div  className={`flex items-center justify-center rounded-[0.5rem] overflow-hidden`}>
			<picture className=''>
				<FaRegImages />
			</picture>
		</div>
	)
}
