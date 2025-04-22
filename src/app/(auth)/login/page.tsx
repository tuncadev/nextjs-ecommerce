import { globalMetadata } from "@/app/config/metadata";
import LoginPage from "./LoginPage";

export const metadata = {
  title: ` Вхід | ${globalMetadata.title}`,
  description: "Увійдіть у свій обліковий запис, щоб переглядати та керувати замовленнями.",
};

export default function Page() {
  return <LoginPage />;
}
