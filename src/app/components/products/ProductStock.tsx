type ProductStockProps = {
	stockQuantity?: number;
	stockStatus?: string;
};

export const ProductStock: React.FC<ProductStockProps> = ({
	stockQuantity,
	stockStatus,
}) => {
	const isInStock =
		(stockQuantity !== undefined && stockQuantity > 0) ||
		stockStatus === "instock";

	if (!isInStock) return null;

	return (
		<div className="flex items-center">
			<span className="text-xs text-gray-600">наявність:</span>
			<span className="instock text-xs text-lime-700 pl-2">в наявності</span>
		</div>
	);
};
