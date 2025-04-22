type ProductShortDescriptionProps = {
	description?: string;
};

export const ProductShortDescription: React.FC<ProductShortDescriptionProps> = ({ description }) => {
	if (!description) return null;

	const cleanDescription = description.replace(/\[.*?\]/g, '').trim();

	return (
		<div className="product_desc text-xs" dangerouslySetInnerHTML={{ __html: cleanDescription }} />
	);
};
