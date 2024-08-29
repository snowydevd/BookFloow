import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import NavBar from "@/components/ux/navbar";
const inter = Inter({ subsets: ["latin"] });

import { SessionProvider } from "next-auth/react";

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
        <CartProvider>
          {children}
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
