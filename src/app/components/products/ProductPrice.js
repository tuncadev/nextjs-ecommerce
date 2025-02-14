export const ProductPrice = ({ price, regularPrice, salePrice, onSale, className }) => {
	if (!price) return null; // Prevent empty rendering

	const formatPrice = (value) => {
			return value.toLocaleString("en-US", {
					minimumFractionDigits: 2,
					maximumFractionDigits: 2
			}).replace(".", ",");
	};

	const discountPercentage = onSale
			? Math.round(((regularPrice - salePrice) / regularPrice) * 100)
			: 0;

	return (
			<div className={`${className ?? ""} numbers flex flex-col`}>
					<span className={`${onSale ?? "text-lime-600"} font-bold`}>
							{formatPrice(price)} ₴
					</span>
					{onSale && regularPrice > salePrice && (
							<div className="flex items-center gap-2">
									<span className="text-red-600 text-sm line-through">{formatPrice(regularPrice)} ₴</span>
									<span className="text-red-500 font-bold text-sm">(-{discountPercentage}%)</span>
							</div>
					)}
			</div>
	);
};
