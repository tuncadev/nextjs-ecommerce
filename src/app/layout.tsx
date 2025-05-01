import { Open_Sans, Oswald, Poppins, Work_Sans } from 'next/font/google';
import "@/app/globals.css";
import "@/app/assets/css/global.scss";

import Script from "next/script";

//import { Header } from "@/app/components/Header";
import { Toaster } from "react-hot-toast";
import { Header } from "./components/globals/Header/Header";
import { Providers } from "./providers";
import { generatePageMetadata } from "./utils/generatePageMetadata";
import { Footer } from './components/globals/Footer/Footer';

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"], variable: "--openSans", preload: true });
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"], variable: "--oswald", preload: false });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"], variable: "--poppins", preload: false });
const workSans = Work_Sans({ subsets: ["latin"], weight: ["400", "700"], variable: "--workSans", preload: false });


await generatePageMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${openSans.variable} ${oswald.variable}  ${workSans.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body id="root" className={`sm:flex sm:min-h-screen flex-col antialiased`}>
				
        <Toaster position="top-right" />
				<Providers>
					<Header />
					<main id="main" className="flex-grow">
						{children}
					</main>
					<Footer />
				</Providers>
				<Script
				async
				src="https://kit.fontawesome.com/d4521e1f6c.js"
				strategy="lazyOnload"
				crossOrigin="anonymous"
			/>
      </body>
    </html>
  );
}
