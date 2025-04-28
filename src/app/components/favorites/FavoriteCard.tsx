import React from 'react'

type FavoritesCardProps = {
	children: React.ReactNode;
}

const FavoriteCard = ({children}: FavoritesCardProps) => {
	return (
		<div className='px-4 border border-gray-300 rounded-lg '>
			<div className="py-2 ">
				<span className='text-sm text-gray-500'>Список (Основний)</span>	
			</div>
			
			<div className="pb-4 flex flex-row gap-4">
				{children}
			</div>
		</div>
	)
}

export default FavoriteCard