"use client";
import React from "react";

import { SessionProvider } from "next-auth/react";
import { CartProvider } from "./books/cartProvider";
export default function ClientProviders({ children }) {
  return (
    <SessionProvider>
      <CartProvider>{children}</CartProvider>
    </SessionProvider>
  );
}
