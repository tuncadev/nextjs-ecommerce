export const ProductDescription = ({ description }) => {
	if (!description) return null;

	// Remove WooCommerce shortcodes (e.g., [vc_row], [shortcode attr="value"])
	const cleanDescription = description.replace(/\[.*?\]/g, "").trim();

	return <div className="product_desc" dangerouslySetInnerHTML={{ __html: cleanDescription }} />;
};
