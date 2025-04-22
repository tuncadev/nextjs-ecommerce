type ProductPriceProps = {
	price?: number;
	regularPrice?: number;
	salePrice?: number;
	onSale?: boolean;
	className?: string;
};

export const ProductPrice: React.FC<ProductPriceProps> = ({
	price,
	regularPrice,
	salePrice,
	onSale,
	className,
}) => {
	if (!price) return null;

	const formatPrice = (value: number): string => {
		return value.toLocaleString('en-US', {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		}).replace('.', ',');
	};

	const isDiscounted =
	onSale &&
	regularPrice !== undefined &&
	salePrice !== undefined &&
	regularPrice > salePrice;

	const discountPercentage = isDiscounted
		? Math.round(((regularPrice - salePrice) / regularPrice) * 100)
		: 0;

	return (
		<div className={`${className ?? ''} numbers flex flex-col`}>
			<span className={`${onSale ? 'text-lime-600' : ''} font-bold`}>
				{formatPrice(price)} ₴
			</span>
			{isDiscounted && (
				<div className="flex items-center gap-2">
					<span className="text-red-600 text-md line-through">
						{formatPrice(regularPrice)} ₴
					</span>
					<span className="text-red-500 font-bold text-sm">
						(-{discountPercentage}%)
					</span>
				</div>
			)}

		</div>
	);
};
