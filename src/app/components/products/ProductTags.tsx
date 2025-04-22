import React from 'react';

type Tag = {
	id: number;
	name: string;
};

type ProductTagsProps = {
	tags?: Tag[];
	category?: string;
};

export const ProductTags: React.FC<ProductTagsProps> = ({ tags = [], category = '' }) => {
	if (!tags.length && !category) return null;

	return (
		<div className="flex flex-col text-sm">
			{category && (
				<span className="font-semibold">
					Категорія:
					<span className="font-normal pl-3">{category}</span>
				</span>
			)}

			{tags.length > 0 && (
				<span className="font-semibold">
					Теги:
					<span className="font-normal pl-3">
						{tags.map((tag, index) => (
							<span key={tag.id}>
								{tag.name}
								{index !== tags.length - 1 && ', '}
							</span>
						))}
					</span>
				</span>
			)}
		</div>
	);
};
