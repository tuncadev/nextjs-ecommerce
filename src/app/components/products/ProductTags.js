import React from 'react'

export const ProductTags = ({tags, category}) => {
	return (<>
					{tags && (
						<div className="flex flex-col text-sm">
							<span className='font-semibold'>
								Категорія:
								<span className='font-normal pl-3'>
									{category}
								</span>
							</span>
							<span className='font-semibold'>
								Теги:
								<span className='font-normal pl-3'>
								{tags?.length > 1 ? (
										tags.map((tag, index) => (
												<span key={tag.id} className="font-normal pl-3">
														{tag.name}{index !== tags.length - 1 ? ", " : ""}
												</span>
										))
								) : (
										<span className="font-normal pl-3">{tags[0]?.name}</span>
								)}
								</span>
							</span>
						</div>
					)}
						
					</>
	)
}
