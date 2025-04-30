import React, { useState } from 'react'

type FavoritesCardProps = {
	children: (setHoveredName: (name: string) => void) => React.ReactNode;
}

const FavoriteCard = ({ children }: FavoritesCardProps) => {
	const [hoveredName, setHoveredName] = useState("");

	return (
		<div className='px-4 border border-gray-300 rounded-lg '>
			<div className="py-2">
				<span className='text-sm text-gray-500'>Список (Основний)</span>
				{hoveredName && <span className='ml-2 text-xs text-gray-600 font-semibold'>({hoveredName})</span>}
			</div>
			
			<div className="pb-4 flex flex-row gap-4">
				{children(setHoveredName)}
			</div>
		</div>
	)
}

export default FavoriteCard
