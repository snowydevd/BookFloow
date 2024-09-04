import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

import { CartProvider } from "./books/cartProvider";
import Provider from "./Provider";

export const metadata = {
  title: "BookFloow",
  description: "Lee, intercambia y lee de nuevo",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased dark`}>
        {/* <NavBar /> */}
        <Provider>
          <Toaster />
          {/* <ClientProviders children={children}></ClientProviders> */}
          <CartProvider>{children}</CartProvider>
        </Provider>
      </body>
    </html>
  );
}
