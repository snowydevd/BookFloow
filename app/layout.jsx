import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { handlers } from "./auth";
const inter = Inter({ subsets: ["latin"] });

import dynamic from "next/dynamic";

// Cargar ClientProviders dinámicamente solo en el cliente
const ClientProviders = dynamic(() => import("./ClientProviders"), {
  ssr: false,
});

import { CartProvider } from "./books/cartProvider";

export const metadata = {
  title: "BookFloow",
  description: "Lee, intercambia y lee de nuevo",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased dark`}>
        {/* <NavBar /> */}

        <Toaster />
        <ClientProviders children={children}></ClientProviders>
      </body>
    </html>
  );
}
