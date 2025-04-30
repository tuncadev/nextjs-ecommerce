import { globalMetadata } from "@/app/config/metadata";

type MetaOptions = {
  title: string;
  description?: string;
};

export const getMetadata = ({ title, description }: MetaOptions) => ({
  title: `${title} | ${globalMetadata.title} `,
  description: description || globalMetadata.description,
});
