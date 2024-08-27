"use client";

import React from "react";
import useCart from "@/app/books/cartProvider";

import { Button } from "@/components/ui/button";
export default function AddToCart({ items }) {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: items.id,
        titulo: items.titulo,
        precio: items.precio,
        cantidad: 1,
      },
    });
  };
  return (
    <Button variant="outline" onClick={addToCart}>
      Agregar al carrito
    </Button>
  );
}
