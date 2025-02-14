import Image from 'next/image'
import Link from "next/link";


const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
};

export const CategoryProductCard02 = ({ category = {}, subCategories = [] }) => {
    try {
        return (
            <div className="flex border border-[#bfbfbf] rounded sm:w-[370px] py-2 gap-6 px-2 items-center">
                <div className="flex items-center max-w-28 overflow-hidden h-full rounded-lg">
                    <Image
                        loader={imageLoader}
                        src={category?.image?.src || "/images/default-category.jpg"} 
                        width={96}
                        height={64.5}
                        alt={category?.name || "Category"}
                        loading="lazy"
                        className="w-full"
                    />                                         
                </div>
                <div className={`${subCategories.length === 0 ? "flex items-center" : "py-4"}`}>
                    <Link href={`/${category?.slug}/c${category?.id}`}>
                        <h3 className="text-gray-900 font-semibold hover:underline">{category?.name || "Unnamed Category"}</h3>
                    </Link>
                    {subCategories.length > 0 && (
                        <ul className="text-xs mt-2 flex flex-col gap-1">
                            {subCategories.map((subCategory) => (
                                subCategory?.count > 0 && (
                                    <li key={subCategory?.id}>
                                        <Link href={`/${subCategory?.slug}/c${subCategory?.id}`} className="hover:underline">
                                            {subCategory?.name || "Unnamed Subcategory"}
                                        </Link>
                                    </li>
                                )
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        );
 
    } catch (error) {
        console.error("Error in CategoryProductCard02:", error);
        return 
    }
};
