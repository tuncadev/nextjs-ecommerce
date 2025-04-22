import { fetchProductById } from "@/lib/fetchProductById";
import { fetchCategoryById } from "@/lib/fetchCategoryById";
import { globalMetadata } from "@/app/config/metadata";
import { Metadata } from "next";

type GeneratePageMetadataParams = {
  type?: "product" | "category";
  id?: string;
  pageTitle?: string;
  icons?: Metadata["icons"];
};


export async function generatePageMetadata({
  type,
  id,
  pageTitle,
  icons = globalMetadata.icons,
}: GeneratePageMetadataParams = {}): Promise<Metadata> {
  if (!type || !id) {
    return {
      title: `${pageTitle || globalMetadata.title} | ${globalMetadata.title}`,
      description: globalMetadata.description,
      icons,
    };
  }

  let data: any = null;
  if (type === "product") data = await fetchProductById(id);
  if (type === "category") data = await fetchCategoryById(id);

  const title = pageTitle || data?.name || globalMetadata.title;
  const description =
    (data?.short_description || data?.description)?.replace(/<[^>]+>/g, "") ||
    globalMetadata.description;

  return {
    title: `${title} | ${globalMetadata.title}`,
    description,
    icons,
  };
}
