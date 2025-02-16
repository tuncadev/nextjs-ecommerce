
import { Open_Sans, Oswald, Poppins, Work_Sans } from 'next/font/google';
import Script from "next/script";
import { Header } from "./components/Header";
import "./globals.css";
import { ProductProvider } from './hooks/useProducts';
import { CartProvider } from "@/app/context/CartContext";
import { ErrorBoundary } from "@/app/components/ErrorBoundary";
import { AuthProvider } from './context/AuthContext';

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"], variable: "--openSans", preload: false });
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"], variable: "--oswald", preload: false });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"], variable: "--poppins", preload: true });
const workSans = Work_Sans({ subsets: ["latin"], weight: ["400", "700"], variable: "--workSans", preload: false });
 

export const metadata = {
  title: "BabyKangaroo - магазин дитячих меблів",
  description: "магазин дитячих меблів",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable} ${oswald.variable}  ${workSans.variable} ${poppins.variable}`} >
      <head>
        {/* Preconnect for Google Fonts */}
      </head>
      <body id="root" className={`antialiased `}>
				<AuthProvider> 
					<CartProvider>  {/*  Add Cart Context Provider */}
						<ProductProvider>  {/*  Keep your existing ProductProvider */}
							<ErrorBoundary>
								<Header />
								<main className="container">
									{children}
								</main>
							</ErrorBoundary>
						</ProductProvider>
					</CartProvider>
				</AuthProvider>
        {/* FontAwesome Script (Now Using Next.js <Script> Component) */}
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
