import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ux/navbar";
const inter = Inter({ subsets: ["latin"] });

import { CartProvider } from "./books/cartProvider";

export const metadata = {
  title: "BookFloow",
  description: "Lee, intercambia y vende de nuevo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased dark`}>
        {/* <NavBar /> */}
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
