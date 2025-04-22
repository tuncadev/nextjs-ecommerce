import { globalMetadata } from "@/app/config/metadata";
import ProfilePage from "./ProfilePage";

export const metadata = {
  title: `${globalMetadata.title} | Вхід`,
  description: "Увійдіть у свій обліковий запис, щоб переглядати та керувати замовленнями.",
};

export default function Page() {
  return <ProfilePage />;
}
