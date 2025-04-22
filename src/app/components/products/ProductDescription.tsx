type ProductDescriptionProps = {
	description?: string;
	title?: string;
};

export const ProductDescription: React.FC<ProductDescriptionProps> = ({ description, title }) => {
	if (!description) return null;

	const cleanDescription = description.replace(/\[.*?\]/g, '').trim();

	return (
		<div className="">
		<h2>{title}</h2>
		<p className="product_desc text-xs" dangerouslySetInnerHTML={{ __html: cleanDescription }} />
		</div>
	);
};
