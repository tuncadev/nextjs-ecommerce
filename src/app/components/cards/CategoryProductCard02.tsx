import Image from "next/image";
import Link from "next/link";

interface Category {
  id: number;
	wpId: number;
  name: string;
  slug: string;
	image: string;
}

interface SubCategory {
  id: number;
	wpId: number;
  name: string;
  slug: string;
  count: number;
}

interface Props {
  category?: Category;
  subCategories?: SubCategory[];
}

const imageLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export const CategoryProductCard02: React.FC<Props> = ({ category = {} as Category, subCategories = [] }) => {
	const imageData = category?.image ? JSON.parse(category.image) : null;
	const imageSrc = imageData?.src || "/images/default-category.jpg";

  try {
    return (
      <div className="flex border border-[#bfbfbf] rounded sm:w-[370px] py-2 gap-6 px-2 items-center">
        <div className="flex items-center max-w-28 overflow-hidden h-full rounded-lg">
          <Image
            loader={imageLoader}
            src={`/api/media?url=${imageSrc}`}
            width={96}
            height={64.5}
            alt={category.name || "Category"}
            loading="lazy"
            className="w-full"
          />
        </div>
        <div className={`${subCategories.length === 0 ? "flex items-center" : "py-4"}`}>
          <Link href={`/category/${category.slug}/${category.wpId}`}>
            <h3 className="text-gray-900 font-semibold hover:underline">{category.name || "Unnamed Category"}</h3>
          </Link>
          {subCategories.length > 0 && (
            <ul className="text-xs mt-2 flex flex-col gap-1">
              {subCategories
                .filter((subCategory) => subCategory.count > 0) // ✅ Ensure count > 0 before rendering
                .map((subCategory) => (
                  <li key={subCategory.wpId}>
                    <Link href={`/category/${subCategory.slug}/${subCategory.wpId}`} className="hover:underline">
                      {subCategory.name || "Безіменна підкатегорія."}
                    </Link>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in CategoryProductCard02:", error);
    return null;
  }
};
